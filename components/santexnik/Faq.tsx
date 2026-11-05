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
    q: "Santexnik ustasi qancha vaqtda keladi?",
    a: "Birinchi takliflar odatda 10–30 daqiqada keladi. Shoshilinch ishda usta 2 soat ichida yetib borishi mumkin. Aniq vaqt tumaningizga va ustaning bandligiga bog’liq. Tezroq kerak bo’lsa, buyurtmada shuni yozing.",
  },
  {
    num: "02",
    q: "Santexnik xizmati narxi qancha?",
    a: "Taxminiy narx 1 dona uchun 80 000–150 000 so’m. Aniq narx ish hajmiga va materialga bog’liq. Tekshirilgan ustalar buyurtmangizga qarab o’z narxini taklif qiladi.",
  },
  {
    num: "03",
    q: "Santexnik ustasi qanday tekshiriladi?",
    a: "Har bir usta ro’yxatdan o’tishda shaxsini tasdiqlovchi hujjatlarini topshiradi. Tekshiruvdan o’tmagan usta buyurtma qabul qila olmaydi.",
  },
  {
    num: "04",
    q: "Narxni kim belgilaydi?",
    a: "Narxni usta o’zi yozadi. Siz bir nechta taklifni yonma-yon ko’rasiz va ma’qulini tanlaysiz. Bu sahifadagi narx oralig’i faqat taxminiy yo’l-yo’riq.",
  },
  {
    num: "05",
    q: "Buyurtma berish uchun pul to’lashim kerakmi?",
    a: "Yo’q, Tarz mijoz uchun bepul. Buyurtma berish, narx olish va maslahat uchun pul to’lamaysiz. Ustaga faqat o’zingiz tanlagan va kelishgan narxda ish haqi to’laysiz.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", display: "flex", flexWrap: "wrap", gap: "72px", alignItems: "flex-start" }}>
        <div className="sticky-sidebar" style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "500", letterSpacing: ".1em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ width: "32px", height: "2px", background: "#10152B" }} />
            04 — Savollar
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "52px", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Santexnik haqida savollar
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
                name="faq-santexnik"
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
