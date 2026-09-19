# LUMIO — deploy

## Server
- Host: `138.249.7.75` (vps07843.eskiz.uz), Ubuntu + nginx 1.18
- Sayt papkasi: `/var/www/lumio`
- Nginx konfig: `/etc/nginx/sites-available/lumio.mvendor.uz.conf`
- Domen: `lumio.mvendor.uz`

## Har safar yangilash
```bash
./deploy/deploy.sh
```
Skript: tiplarni tekshiradi → build qiladi → `dist/` ni serverga rsync qiladi →
fayl huquqlarini tenglashtiradi → nginx'ni qayta yuklaydi.

## Bir martalik qadamlar (hali bajarilmagan)

### 1. DNS yozuvi
eskiz.uz boshqaruv panelida (ns1/ns2.eskiz.uz):
```
Turi: A    Nomi: lumio    Qiymati: 138.249.7.75    TTL: 3600
```
Wildcard yo'q, shuning uchun har bir subdomen alohida yozuv talab qiladi.

### 2. SSL (DNS tarqalgandan keyin)
```bash
ssh root@138.249.7.75 'certbot --nginx -d lumio.mvendor.uz'
```
Certbot konfigga 443 blokini va 80 → 443 redirectni o'zi qo'shadi.

## Eslatma
macOS'dagi `rsync` (openrsync) `--chmod` ni qo'llab-quvvatlamaydi, shuning uchun
huquqlar serverda `chmod`/`chown` bilan tenglashtiriladi. Busiz 600 huquqli
fayllarni nginx o'qiy olmay 403 qaytaradi.
