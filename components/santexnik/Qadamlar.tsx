export default function Qadamlar() {
  return (
    <section style={{ background: "#10152B", color: "#FFFFFF", padding: "clamp(48px, 8vw, 96px) 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: "clamp(28px, 4vw, 48px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px", color: "var(--accent)" }}>
            <span style={{ width: "14px", height: "2px", background: "var(--accent)" }} />
            03 · Qanday ishlaydi?
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(30px, 6vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Santexnik ustasini qanday topaman?
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px 24px", padding: "clamp(20px, 3.5vw, 34px) 0", borderTop: "1px solid #1F2642" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "24px", flex: "1 1 300px" }}>
              <span className="d" style={{ fontSize: "clamp(48px, 8vw, 72px)", fontWeight: "800", letterSpacing: "-0.05em", lineHeight: "1", color: "transparent", WebkitTextStroke: "1.5px #FFFFFF", minWidth: "64px" }}>
                01
              </span>
              <div>
                <h3 className="d" style={{ margin: "0", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: "700", letterSpacing: "-0.02em" }}>
                  Buyurtma joylang
                </h3>
                <p style={{ margin: "6px 0 0", fontSize: "17px", color: "#8C9BB5" }}>
                  Nima kerakligini 2 daqiqada yozing.
                </p>
              </div>
            </div>
            <span className="m" style={{ fontSize: "13px", color: "var(--accent)", letterSpacing: ".08em", textTransform: "uppercase" }}>
              2 daqiqa
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px 24px", padding: "clamp(20px, 3.5vw, 34px) 0", borderTop: "1px solid #1F2642" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "24px", flex: "1 1 300px" }}>
              <span className="d" style={{ fontSize: "clamp(48px, 8vw, 72px)", fontWeight: "800", letterSpacing: "-0.05em", lineHeight: "1", color: "transparent", WebkitTextStroke: "1.5px #FFFFFF", minWidth: "64px" }}>
                02
              </span>
              <div>
                <h3 className="d" style={{ margin: "0", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: "700", letterSpacing: "-0.02em" }}>
                  Takliflarni solishtiring
                </h3>
                <p style={{ margin: "6px 0 0", fontSize: "17px", color: "#8C9BB5" }}>
                  Tekshirilgan ustalar narx taklif qiladi.
                </p>
              </div>
            </div>
            <span className="m" style={{ fontSize: "13px", color: "var(--accent)", letterSpacing: ".08em", textTransform: "uppercase" }}>
              10–30 daqiqa
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px 24px", padding: "clamp(20px, 3.5vw, 34px) 0", borderTop: "1px solid #1F2642", borderBottom: "1px solid #1F2642" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "24px", flex: "1 1 300px" }}>
              <span className="d" style={{ fontSize: "clamp(48px, 8vw, 72px)", fontWeight: "800", letterSpacing: "-0.05em", lineHeight: "1", color: "transparent", WebkitTextStroke: "1.5px #FFFFFF", minWidth: "64px" }}>
                03
              </span>
              <div>
                <h3 className="d" style={{ margin: "0", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: "700", letterSpacing: "-0.02em" }}>
                  Ustani tanlang
                </h3>
                <p style={{ margin: "6px 0 0", fontSize: "17px", color: "#8C9BB5" }}>
                  Narx va sharhga qarab o’zingiz tanlaysiz.
                </p>
              </div>
            </div>
            <span className="m" style={{ fontSize: "13px", color: "var(--accent)", letterSpacing: ".08em", textTransform: "uppercase" }}>
              shoshilinch ishda ≈ 2 soat
            </span>
          </div>
        </div>
        <div>
          <a href="https://t.me/tarz_usta_bot" target="_blank" rel="noopener noreferrer" className="btn hb" style={{ background: "var(--accent)", color: "#FFFFFF", border: "1.5px solid #10152B", boxShadow: "0 3px 0 #10152B" }}>
            Usta topish
          </a>
        </div>
      </div>
    </section>
  );
}
