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
    q: "Tarz mijozlar uchun pullikmi?",
    a: "Yo’q, Tarz mijoz uchun bepul. Buyurtma qoldirasiz, tekshirilgan ustalar narx taklif qiladi. Takliflarni solishtirib, ma’qulini o’zingiz tanlaysiz.",
  },
  {
    num: "02",
    q: "Tarz qanday ishlaydi?",
    a: "Uch qadam: ishingizni 2 daqiqada yozasiz, tekshirilgan ustalar narx taklif qiladi, narxi va sharhiga qarab eng yaxshisini tanlaysiz.",
  },
  {
    num: "03",
    q: "Usta qancha vaqtda topiladi?",
    a: "Birinchi takliflar odatda 10–30 daqiqada keladi. Shoshilinch ishda usta 2 soat ichida yetib borishi mumkin.",
  },
  {
    num: "04",
    q: "Ustalar qanday tekshiriladi?",
    a: "Har bir usta ro’yxatdan o’tishda shaxsini tasdiqlovchi hujjatlarini topshiradi. Tekshiruvdan o’tmagan usta buyurtma qabul qila olmaydi.",
  },
  {
    num: "05",
    q: "Usta kelmasa yoki ish yoqmasa nima bo’ladi?",
    a: "Tarz mijozlar xizmati yordamga tayyor. Usta kelmasa, boshqa ishonchli ustani tavsiya qilamiz va masalani hal qilamiz.",
  },
  {
    num: "06",
    q: "Ilova yuklash kerakmi?",
    a: "Yo’q. Tarz Telegram ichida ochiladi. “Usta topish” tugmasini bosasiz, buyurtma oynasi ochiladi.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section style={{ background: "#FFFFFF", padding: "clamp(24px, 4vw, 32px) 0 clamp(48px, 8vw, 96px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", gap: "clamp(32px, 6vw, 72px)", alignItems: "flex-start" }}>
        <div className="sticky-sidebar" style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "14px", height: "2px", background: "#10152B" }} />
            06 · Savollar
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(28px, 6vw, 56px)", lineHeight: "1.1", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Eng muhim savollarga aniq javoblar
          </h2>
          <p style={{ margin: "0", fontSize: "clamp(15px, 2.5vw, 18px)", lineHeight: "1.5", color: "#5F6B88" }}>
            Javobni topolmadingizmi? Buyurtma qoldiring, ustalar o’zi bog’lanadi.
          </p>
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
                name="faq-home"
                style={{ borderTop: "1.5px solid #10152B", padding: "clamp(18px, 3.5vw, 26px) 0" }}
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    toggleItem(idx);
                  }}
                  style={{ display: "flex", gap: "clamp(14px, 3vw, 22px)", alignItems: "center" }}
                >
                  <span className="m" style={{ fontSize: "13px", minWidth: "26px", color: "var(--accent)", fontWeight: "700" }}>
                    {item.num}
                  </span>
                  <h3 className="d" style={{ margin: "0", fontSize: "clamp(18px, 4vw, 24px)", fontWeight: "600", letterSpacing: "-0.02em", flex: "1", lineHeight: "1.3" }}>
                    {item.q}
                  </h3>
                  <svg className="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
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
