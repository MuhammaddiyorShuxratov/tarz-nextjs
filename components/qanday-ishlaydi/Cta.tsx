export default function Cta() {
  return (
    <section className="gb" style={{ borderTop: "1px solid #10152B" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(48px, 8vw, 104px) clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "clamp(20px, 4vw, 30px)" }}>
        <h2 className="d" style={{ margin: "0", fontSize: "clamp(34px, 7vw, 84px)", lineHeight: ".98", letterSpacing: "-0.04em", fontWeight: "800", maxWidth: "960px" }}>
          {"Tayyormisiz? "}
          <span style={{ background: "linear-gradient(transparent 60%,var(--accent) 60%,var(--accent) 92%,transparent 92%)", padding: "0 6px" }}>
            2 daqiqada
          </span>
          {" buyurtma qoldiring."}
        </h2>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
          <a href="https://t.me/tarz_usta_bot" target="_blank" rel="noopener noreferrer" className="btn hb" style={{ background: "var(--accent)", color: "#FFFFFF", height: "56px", padding: "0 clamp(24px, 4vw, 36px)", fontSize: "18px", border: "1.5px solid #10152B", boxShadow: "0 3px 0 #10152B" }}>
            Usta topish
          </a>
          <a href="https://t.me/tarz_usta_bot" target="_blank" rel="noopener noreferrer" className="btn hb" style={{ border: "1.5px solid #10152B", color: "#10152B", height: "56px", padding: "0 clamp(24px, 4vw, 36px)", fontSize: "18px", background: "#FFFFFF", boxShadow: "0 3px 0 #10152B" }}>
            Men ustaman
          </a>
        </div>
        <p className="m" style={{ margin: "0", fontSize: "13px", color: "#5F6B88" }}>
          Oxirgi yangilanish: 29-oktabr, 2026
        </p>
      </div>
    </section>
  );
}
