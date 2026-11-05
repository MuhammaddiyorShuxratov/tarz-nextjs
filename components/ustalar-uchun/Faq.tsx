"use client";

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  num: string;
  q: string;
  a: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    num: "01",
    q: "Qanday qilib Tarz’da usta bo’laman?",
    a: "“Usta bo’lib qo’shilish” tugmasini bosing. Telegram’da ro’yxatdan o’tish oynasi ochiladi. Xizmat turini tanlab, shaxsingizni tasdiqlovchi hujjatlarni topshirasiz. Tekshiruvdan o’tgach, buyurtmalarga narx taklif qila boshlaysiz.",
  },
  {
    num: "02",
    q: "Ustalar Tarz’ga pul to’laydimi?",
    a: "Ro’yxatdan o’tish bepul. Qat’iy majburiyat va yashirin komissiya yo’q. Narxni o’zingiz belgilaysiz. Shartlar o’zgarsa, bu sahifada oldindan yozib qo’yamiz.",
  },
  {
    num: "03",
    q: "Narxni o’zim belgilaymanmi?",
    a: "Ha. Har bir buyurtmaga o’z narxingizni yozasiz. Mijoz bir nechta taklifni solishtiradi. Narx, reyting va sharhlar birga ko’rinadi, shuning uchun halol narx va sifatli ish ko’proq buyurtma olib keladi.",
  },
  {
    num: "04",
    q: "Buyurtmalar qanday keladi?",
    a: "Mijoz buyurtma qoldirsa, shu xizmat va tuman bo’yicha ustalar xabar oladi. Siz o’z narxingizni taklif qilasiz. Mijoz sizni tanlasa, u bilan bog’lanib, ish vaqtini kelishasiz.",
  },
  {
    num: "05",
    q: "Ustalar qanday tekshiriladi?",
    a: "Har bir usta ro’yxatdan o’tishda shaxsini tasdiqlovchi hujjatlarini topshiradi. Tekshiruvdan o’tmagan usta buyurtma qabul qila olmaydi. Mijozlar bahosi va sharhi usta profilida ochiq ko’rinadi.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section style={{ padding: "0 0 clamp(48px, 8vw, 96px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", gap: "clamp(32px, 6vw, 72px)", alignItems: "flex-start" }}>
        <div className="sticky-sidebar" style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "14px", height: "2px", background: "#10152B" }} />
            04 · Savollar
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(30px, 6vw, 52px)", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Ustalar savollari
          </h2>
          <Link href="/savollar" style={{ fontWeight: "700", fontSize: "16px", display: "inline-flex", alignItems: "center", gap: "8px", borderBottom: "2px solid var(--accent)", paddingBottom: "4px", alignSelf: "flex-start" }}>
            Barcha savollar
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
        <div style={{ flex: "2 1 600px", minWidth: "0", display: "flex", flexDirection: "column", borderBottom: "1.5px solid #10152B" }}>
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <details
                key={item.num}
                open={isOpen}
                name="faq-ustalar"
                style={{ borderTop: "1.5px solid #10152B", padding: "26px 0" }}
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    toggleItem(idx);
                  }}
                  style={{ display: "flex", gap: "22px", alignItems: "center" }}
                >
                  <span className="m" style={{ fontSize: "13px", minWidth: "30px" }}>
                    {item.num}
                  </span>
                  <h3 className="d" style={{ margin: "0", fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", flex: "1" }}>
                    {item.q}
                  </h3>
                  <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="faq-answer">
                  {item.a}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
