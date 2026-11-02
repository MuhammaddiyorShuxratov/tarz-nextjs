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
    <section style={{ background: "#E8E3D6", padding: "clamp(56px, 8vw, 88px) 0", borderTop: "1.5px solid #14181F", borderBottom: "1.5px solid #14181F" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: "clamp(28px, 4vw, 44px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px", color: "#14181F" }}>
            <span style={{ width: "14px", height: "2px", background: "#14181F" }} />
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
              <blockquote style={{ margin: "0", fontSize: "clamp(16px, 2vw, 18px)", lineHeight: "1.55", fontWeight: "500", color: "#14181F", flex: "1" }}>
                {r.quote}
              </blockquote>
              <figcaption style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "1px solid #D6D0C0" }}>
                <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#14181F", color: "#F2EEE5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "16px", flexShrink: 0 }}>
                  {r.initial}
                </span>
                <span style={{ display: "flex", flexDirection: "column", flex: "1", minWidth: "0" }}>
                  <strong style={{ fontSize: "15px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {r.author}
                  </strong>
                  <span className="m" style={{ fontSize: "11px", color: "#5A5F69", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {r.district} · {r.service}
                  </span>
                </span>
                <span className="m" style={{ fontSize: "10px", fontWeight: "700", color: "#0B5D66", background: "#D3E6E3", border: "1px solid #0B5D66", borderRadius: "6px", padding: "3px 6px", textTransform: "uppercase", flexShrink: 0 }}>
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
