#!/usr/bin/env bash
# LUMIO deploy — lokal build qilib, serverga rsync bilan yuboradi.
#
# Ishlatish:
#   ./deploy/deploy.sh
#
# Sozlamalarni muhit o'zgaruvchilari orqali almashtirish mumkin:
#   SSH_HOST=root@138.249.7.75 SSH_PORT=22 REMOTE_DIR=/var/www/lumio ./deploy/deploy.sh

set -euo pipefail

SSH_HOST="${SSH_HOST:-root@138.249.7.75}"
SSH_PORT="${SSH_PORT:-22}"
REMOTE_DIR="${REMOTE_DIR:-/var/www/lumio}"

# Uzilishlarga chidamli SSH sozlamalari. Bir vaqtda boshqa uzoq ssh sessiyasi
# (masalan `certbot renew`) ishlayotganda ulanish uzilib qolishi mumkin edi.
SSH_OPTS=(-p "$SSH_PORT" -o ConnectTimeout=20 -o ServerAliveInterval=15 -o ServerAliveCountMax=4)

cd "$(dirname "$0")/.."

# Tarmoq uzilsa yoki server band bo'lsa — uch marta urinib ko'radi.
retry() {
  local attempt=1 max=3
  until "$@"; do
    if [ $attempt -ge $max ]; then
      echo "XATO: $max urinishdan keyin ham bajarilmadi: $*" >&2
      return 1
    fi
    echo "   ...urinish $attempt muvaffaqiyatsiz, 5 soniyadan keyin qayta urinaman"
    attempt=$((attempt + 1))
    sleep 5
  done
}

echo "==> Tiplarni tekshirish"
npx tsc --noEmit

echo "==> Production build"
npm run build

if [ ! -f dist/index.html ]; then
  echo "XATO: dist/index.html topilmadi — build muvaffaqiyatsiz." >&2
  exit 1
fi

echo "==> Serverga yuborish: $SSH_HOST:$REMOTE_DIR"
# --delete eski fayllarni tozalaydi, shuning uchun REMOTE_DIR faqat shu sayt uchun bo'lsin.
retry rsync -avz --delete -e "ssh ${SSH_OPTS[*]}" dist/ "$SSH_HOST:$REMOTE_DIR/"

# Huquqlarni tenglashtirish va nginx'ni qayta yuklash — bitta ulanishda,
# chunki har bir qo'shimcha ssh sessiyasi uzilish ehtimolini oshiradi.
# macOS'dagi rsync (openrsync) --chmod ni qo'llab-quvvatlamaydi, shuning uchun
# huquqlar shu yerda to'g'rilanadi: aks holda 600 huquqli fayllarni nginx
# (www-data) o'qiy olmay 403 qaytaradi.
echo "==> Huquqlar va nginx"
retry ssh "${SSH_OPTS[@]}" "$SSH_HOST" "
  set -e
  find '$REMOTE_DIR' -type d -exec chmod 755 {} +
  find '$REMOTE_DIR' -type f -exec chmod 644 {} +
  chown -R www-data:www-data '$REMOTE_DIR'
  nginx -t
  systemctl reload nginx
"

echo "==> Tekshirish"
code=$(curl -sS -o /dev/null -w '%{http_code}' --max-time 20 https://lumio.mvendor.uz/ || echo 000)
if [ "$code" = "200" ]; then
  echo "    https://lumio.mvendor.uz — HTTP 200"
else
  # Lokal DNS keshi eskirgan bo'lishi mumkin, shuning uchun IP orqali ham tekshiramiz.
  code=$(curl -sS -o /dev/null -w '%{http_code}' --max-time 20 \
    --resolve lumio.mvendor.uz:443:138.249.7.75 https://lumio.mvendor.uz/ || echo 000)
  echo "    IP orqali: HTTP $code (lokal DNS keshi eskirgan bo'lishi mumkin)"
fi

echo "==> Tayyor."
