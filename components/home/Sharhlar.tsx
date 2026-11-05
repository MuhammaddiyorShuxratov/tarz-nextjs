export default function Sharhlar() {
  const reviews = [
    {
      quote:
        "Oshxonadagi kran oqib yotgandi, 15 daqiqa ichida 3 ta usta narx taklif qildi. Sardor usta kelib yarim soatda yangi sifatli kran o’rnatib berdi. Narxi ham juda ma’qul!",
      author: "Jasur Qosimov",
      district: "Chilonzor 9-mavze",
      service: "Santexnika",
      rating: "5.0",
      initial: "J",
    },
    {
      quote:
        "Yangi xonadonga rozetka va lyustralarni montaj qilish kerak edi. Farhod usta o’z vaqtida kelib, chiroyli va xavfsiz qilib ulab berdi. Ishiga gap yo’q, tavsiya qilaman.",
      author: "Dilnoza Rahimova",
      district: "Yunusobod 14-mavze",
      service: "Elektr montaj",
      rating: "5.0",
      initial: "D",
    },
    {
      quote:
        "Hammomga kafel terdirish bo’yicha buyurtma bergandim. Usta Davron hamma burchaklarini 45 gradusda silliq terdi. Narxini ham oldindan kelishgandek oldi.",
      author: "Shavkat Aliyev",
      district: "Mirzo Ulug’bek",
      service: "Kafel yotqizish",
      rating: "5.0",
      initial: "S",
    },
  ];

  return (
    <section style={{ background: "#F4F7FD", padding: "clamp(56px, 8vw, 88px) 0", borderTop: "1.5px solid #10152B", borderBottom: "1.5px solid #10152B" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: "clamp(28px, 4vw, 44px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px", color: "#10152B" }}>
            <span style={{ width: "14px", height: "2px", background: "#10152B" }} />
            04 · Mijozlar fikri
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(32px, 6vw, 56px)", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Haqiqiy mijozlar sharhlari
          </h2>
        </div>

        <div className="responsive-grid-3">
          {reviews.map((r, i) => (
            <figure key={i} className="review-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span className="d" style={{ fontSize: "72px", lineHeight: ".6", height: "36px", fontWeight: "800", color: "var(--accent)" }}>
                  “
                </span>
                <span className="m" style={{ fontSize: "12px", letterSpacing: "2px", color: "var(--accent)", fontWeight: "700" }}>
                  ★★★★★
                </span>
              </div>
              <blockquote style={{ margin: "0", fontSize: "clamp(15px, 2.2vw, 18px)", lineHeight: "1.55", fontWeight: "500", color: "#10152B", flex: "1" }}>
                {r.quote}
              </blockquote>
              <figcaption style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", paddingTop: "14px", borderTop: "1px solid #E2E8F0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0, flex: "1" }}>
                  <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#10152B", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "15px", flexShrink: 0 }}>
                    {r.initial}
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                    <strong style={{ fontSize: "15px", color: "#10152B", lineHeight: "1.2" }}>
                      {r.author}
                    </strong>
                    <span className="m" style={{ fontSize: "12px", color: "#5F6B88", lineHeight: "1.3", marginTop: "2px" }}>
                      {r.district} · {r.service}
                    </span>
                  </span>
                </div>
                <span className="m" style={{ fontSize: "10px", fontWeight: "700", color: "#2E5BFF", background: "#EBF1FF", border: "1px solid #2E5BFF", borderRadius: "6px", padding: "3px 7px", textTransform: "uppercase", flexShrink: 0, whiteSpace: "nowrap" }}>
                  ✓ Bajarildi
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
