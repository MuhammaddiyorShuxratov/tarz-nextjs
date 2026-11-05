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

## Brand ranglari
- **Asosiy havo rang (Accent):** `#2E5BFF` (Logodagi pastki qanot rangi)
- **To'q ko'k / Matn (Ink / Navy):** `#10152B` (Logodagi yuqori qanot va "tarz" matni)
- **Oq fon (Background):** `#FFFFFF` / kartalar uchun `#F4F7FD`
- **Logo fayllari:** `public/logo.png` va `public/logo-white.png`
