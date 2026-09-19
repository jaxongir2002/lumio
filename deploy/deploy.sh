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

cd "$(dirname "$0")/.."

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
rsync -avz --delete \
  -e "ssh -p $SSH_PORT" \
  dist/ "$SSH_HOST:$REMOTE_DIR/"

# macOS rsync (openrsync) --chmod ni qo'llab-quvvatlamaydi, shuning uchun
# huquqlarni serverda tenglashtiramiz: aks holda 600 huquqli fayllarni
# nginx (www-data) o'qiy olmay 403 qaytaradi.
echo "==> Huquqlarni tenglashtirish"
ssh -p "$SSH_PORT" "$SSH_HOST" "
  find $REMOTE_DIR -type d -exec chmod 755 {} + &&
  find $REMOTE_DIR -type f -exec chmod 644 {} + &&
  chown -R www-data:www-data $REMOTE_DIR
"

echo "==> Nginx konfiguratsiyasini tekshirish va qayta yuklash"
ssh -p "$SSH_PORT" "$SSH_HOST" 'nginx -t && systemctl reload nginx'

echo "==> Tayyor."
