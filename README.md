# Tarz — Next.js (App Router)

Dizayn (6 sahifa) 1:1 piksel aniqligida Next.js 14 + TypeScript'ga ko'chirilgan.

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Sahifalar
- `/` — 1 · Bosh sahifa
- `/xizmatlar` — 2 · Xizmatlar (narx kalkulyatori bilan)
- `/xizmatlar/santexnik` — 3 · Xizmat sahifasi (santexnik)
- `/qanday-ishlaydi` — 4 · Qanday ishlaydi
- `/ustalar-uchun` — 5 · Ustalar uchun
- `/savollar` — 6 · Savollar

## Tuzilma
- `app/layout.tsx` — shriftlar, umumiy o'ram, Header va Footer
- `app/globals.css` — dizayndagi barcha hover/yordamchi klasslar va `--accent` rangi
- `components/<sahifa>/*.tsx` — sahifa bo'limlari (dizayndagi izohlar bo'yicha)
- `components/Header.tsx` — joriy sahifani avtomatik belgilaydi

## Accent rangi
Dizaynda `#FF5A1F`. O'zgartirish: `app/globals.css` dagi `--accent`
(variantlar: `#E8B931`, `#2FA39A`, `#7A5AF8`).
