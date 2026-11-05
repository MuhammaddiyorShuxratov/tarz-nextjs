export default function Cta() {
  return (
    <section style={{ background: "var(--accent)", borderTop: "1px solid #10152B", borderBottom: "1px solid #10152B" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(48px, 8vw, 88px) clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", gap: "clamp(24px, 4vw, 40px)", alignItems: "center", justifyContent: "space-between" }}>
        <h2 className="d" style={{ margin: "0", flex: "1 1 540px", fontSize: "clamp(30px, 6vw, 76px)", lineHeight: ".98", letterSpacing: "-0.04em", fontWeight: "800", color: "#FFFFFF" }}>
          Kerakli ustani 2 daqiqada toping.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
          <a href="https://t.me/tarz_usta_bot" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "#10152B", color: "#FFFFFF", height: "64px", padding: "0 36px", fontSize: "19px", border: "1.5px solid #10152B", boxShadow: "0 3px 0 #10152B" }}>
            Usta topish
          </a>
          <span className="m" style={{ fontSize: "13px", fontWeight: "500", color: "#EBF1FF" }}>
            Bepul · Telegram ichida · Tekshirilgan ustalar
          </span>
        </div>
      </div>
    </section>
  );
}
