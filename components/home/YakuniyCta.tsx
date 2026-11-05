export default function YakuniyCta() {
  return (
    <section className="gb" style={{ borderTop: "1.5px solid #10152B" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(64px, 10vw, 112px) clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "clamp(20px, 4vw, 32px)" }}>
        <span className="m" style={{ fontSize: "13px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase", border: "1.5px solid #10152B", padding: "8px 16px", borderRadius: "999px", background: "#FFFFFF", boxShadow: "0 2px 0 #10152B" }}>
          ⚡ Bugun boshlang
        </span>
        <h2 className="d" style={{ margin: "0", fontSize: "clamp(36px, 7vw, 92px)", lineHeight: ".98", letterSpacing: "-0.04em", fontWeight: "800", maxWidth: "980px" }}>
          {"Usta kerakmi? "}
          <span style={{ background: "linear-gradient(transparent 60%,var(--accent) 60%,var(--accent) 92%,transparent 92%)", padding: "0 6px" }}>
            2 daqiqada
          </span>
          {" buyurtma qoldiring."}
        </h2>
        <p style={{ margin: "0", fontSize: "clamp(16px, 2.5vw, 21px)", lineHeight: "1.5", color: "#5F6B88", maxWidth: "560px" }}>
          Tekshirilgan ustalar narx taklif qiladi. Narxi va sharhiga qarab eng ma’qulini o’zingiz tanlaysiz.
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
          <a href="https://t.me/tarz_usta_bot" target="_blank" rel="noopener noreferrer" className="btn hb" style={{ background: "var(--accent)", color: "#FFFFFF", height: "58px", padding: "0 clamp(24px, 5vw, 36px)", fontSize: "18px", border: "1.5px solid #10152B", boxShadow: "0 3px 0 #10152B" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
              <path d="M21 4 3 11l6 2 2 7 3-4 5 4z" />
            </svg>
            <span>Usta topish</span>
          </a>
          <a href="https://t.me/tarz_usta_bot" target="_blank" rel="noopener noreferrer" className="btn hb" style={{ border: "1.5px solid #10152B", color: "#10152B", height: "58px", padding: "0 clamp(24px, 5vw, 36px)", fontSize: "18px", background: "#FFFFFF", boxShadow: "0 3px 0 #10152B" }}>
            Men ustaman
          </a>
        </div>
      </div>
    </section>
  );
}
