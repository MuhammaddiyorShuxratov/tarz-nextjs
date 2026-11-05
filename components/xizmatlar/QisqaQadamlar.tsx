import Link from "next/link";

export default function QisqaQadamlar() {
  const steps = [
    { num: "01 · 2 daqiqa", title: "Buyurtma joylang", desc: "Nima kerakligini 2 daqiqada yozing." },
    { num: "02 · 10–30 daqiqa", title: "Takliflarni solishtiring", desc: "Tekshirilgan ustalar narx taklif qiladi." },
    { num: "03 · ≈ 2 soat", title: "Ustani tanlang", desc: "Narx va sharhga qarab o’zingiz tanlaysiz." },
  ];

  return (
    <section style={{ padding: "clamp(48px, 8vw, 88px) 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: "clamp(24px, 4vw, 40px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(28px, 6vw, 48px)", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Keyin nima bo’ladi?
          </h2>
          <Link href="/qanday-ishlaydi" style={{ fontWeight: "700", fontSize: "16px", display: "inline-flex", alignItems: "center", gap: "8px", borderBottom: "2px solid var(--accent)", paddingBottom: "4px" }}>
            Batafsil o’qish
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="responsive-grid-3">
          {steps.map((st, i) => (
            <div
              key={i}
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                background: "#FFFFFF",
                border: "1.5px solid #10152B",
                borderRadius: "12px",
                boxShadow: "3px 3px 0 #10152B",
              }}
            >
              <span className="m" style={{ fontSize: "13px", fontWeight: "700", color: "var(--accent)" }}>
                {st.num}
              </span>
              <strong className="d" style={{ fontSize: "24px", letterSpacing: "-0.02em" }}>
                {st.title}
              </strong>
              <span style={{ fontSize: "16px", lineHeight: "1.5", color: "#5F6B88" }}>
                {st.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
