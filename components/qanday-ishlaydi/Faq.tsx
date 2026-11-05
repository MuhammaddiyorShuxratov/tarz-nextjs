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
    q: "Tarz qanday ishlaydi?",
    a: "Uch qadam bor. Avval Telegram’da ishingizni 2 daqiqada yozasiz. Keyin tekshirilgan ustalar narx taklif qiladi. Oxirida narxi va sharhiga qarab eng yaxshisini tanlaysiz. Alohida ilova yuklash shart emas.",
  },
  {
    num: "02",
    q: "Usta qancha vaqtda topiladi?",
    a: "Birinchi takliflar odatda 10–30 daqiqada keladi. Shoshilinch ishda usta 2 soat ichida yetib borishi mumkin. Aniq vaqt tumaningizga va ustaning bandligiga bog’liq.",
  },
  {
    num: "03",
    q: "Tarz mijozlar uchun pullikmi?",
    a: "Yo’q, Tarz mijoz uchun bepul. Buyurtma qoldirasiz, tekshirilgan ustalar narx taklif qiladi. Takliflarni solishtirib, ma’qulini o’zingiz tanlaysiz.",
  },
  {
    num: "04",
    q: "Ilova yuklash kerakmi?",
    a: "Yo’q. Tarz Telegram ichida ochiladi, alohida ilova yuklash shart emas. “Usta topish” tugmasini bosasiz, buyurtma oynasi ochiladi.",
  },
  {
    num: "05",
    q: "Usta kelmasa yoki ish sifatsiz bo’lsa nima qilaman?",
    a: "Tarz mijozlar xizmatiga yozing. Usta kelmasa, boshqa ishonchli ustani tavsiya qilamiz. Ish sifatsiz chiqsa, masalani usta bilan birga hal qilamiz.",
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
            Savollar
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(30px, 6vw, 52px)", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Qisqa javoblar
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
                name="faq-qanday-ishlaydi"
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
