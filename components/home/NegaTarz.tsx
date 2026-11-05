export default function NegaTarz() {
  return (
    <section style={{ padding: "clamp(48px, 8vw, 96px) 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", gap: "clamp(32px, 6vw, 72px)", alignItems: "flex-start" }}>
        <div className="sticky-desktop" style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px", position: "sticky", top: "100px", alignSelf: "flex-start" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px", color: "#10152B" }}>
            <span style={{ width: "14px", height: "2px", background: "#10152B" }} />
            03 · Nega Tarz?
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(34px, 7vw, 64px)", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Nega aynan Tarz?
          </h2>
          <svg width="180" height="180" viewBox="0 0 200 200" style={{ transform: "rotate(-12deg)", marginTop: "8px", maxWidth: "100%", height: "auto" }} role="img" aria-label="Hujjat bilan tekshirilgan ustalar muhri">
            <defs>
              <path id="cp" d="M100 100 m-78 0 a78 78 0 1 1 156 0 a78 78 0 1 1 -156 0" />
            </defs>
            <circle cx="100" cy="100" r="94" fill="none" stroke="#2E5BFF" strokeWidth="3" />
            <circle cx="100" cy="100" r="58" fill="none" stroke="#2E5BFF" strokeWidth="1.5" />
            <text fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700" fill="#2E5BFF">
              <textPath href="#cp" textLength="480" lengthAdjust="spacing">
                HUJJAT BILAN TEKSHIRILGAN · TARZ · USTALAR ·
              </textPath>
            </text>
            <path d="M76 102l17 17 33-38" fill="none" stroke="#2E5BFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={{ flex: "2 1 540px", minWidth: "0", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "clamp(14px, 3vw, 28px)", padding: "clamp(20px, 3.5vw, 34px) 0", borderTop: "1.5px solid #10152B" }}>
            <span className="m" style={{ fontSize: "14px", fontWeight: "700", minWidth: "30px", paddingTop: "8px", color: "var(--accent)" }}>
              01
            </span>
            <div>
              <h3 className="d" style={{ margin: "0", fontSize: "clamp(24px, 5vw, 38px)", fontWeight: "700", letterSpacing: "-0.03em" }}>
                Hujjat bilan tekshirilgan
              </h3>
              <p style={{ margin: "8px 0 0", fontSize: "clamp(15px, 2.5vw, 19px)", lineHeight: "1.5", color: "#5F6B88", maxWidth: "520px" }}>
                Ustalar shaxsini tasdiqlovchi hujjat bilan tekshiriladi.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "clamp(14px, 3vw, 28px)", padding: "clamp(20px, 3.5vw, 34px) 0", borderTop: "1.5px solid #10152B" }}>
            <span className="m" style={{ fontSize: "14px", fontWeight: "700", minWidth: "30px", paddingTop: "8px", color: "var(--accent)" }}>
              02
            </span>
            <div>
              <h3 className="d" style={{ margin: "0", fontSize: "clamp(24px, 5vw, 38px)", fontWeight: "700", letterSpacing: "-0.03em" }}>
                Narx oldindan ma’lum
              </h3>
              <p style={{ margin: "8px 0 0", fontSize: "clamp(15px, 2.5vw, 19px)", lineHeight: "1.5", color: "#5F6B88", maxWidth: "520px" }}>
                Ustalar o’z narxini yozadi, eng ma’qulini solishtirib tanlaysiz.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "clamp(14px, 3vw, 28px)", padding: "clamp(20px, 3.5vw, 34px) 0", borderTop: "1.5px solid #10152B" }}>
            <span className="m" style={{ fontSize: "14px", fontWeight: "700", minWidth: "30px", paddingTop: "8px", color: "var(--accent)" }}>
              03
            </span>
            <div>
              <h3 className="d" style={{ margin: "0", fontSize: "clamp(24px, 5vw, 38px)", fontWeight: "700", letterSpacing: "-0.03em" }}>
                Haqiqiy sharhlar
              </h3>
              <p style={{ margin: "8px 0 0", fontSize: "clamp(15px, 2.5vw, 19px)", lineHeight: "1.5", color: "#5F6B88", maxWidth: "520px" }}>
                Faqat buyurtma bajargan haqiqiy mijozlar sharh qoldiradi.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "clamp(14px, 3vw, 28px)", padding: "clamp(20px, 3.5vw, 34px) 0", borderTop: "1.5px solid #10152B", borderBottom: "1.5px solid #10152B" }}>
            <span className="m" style={{ fontSize: "14px", fontWeight: "700", minWidth: "30px", paddingTop: "8px", color: "var(--accent)" }}>
              04
            </span>
            <div>
              <h3 className="d" style={{ margin: "0", fontSize: "clamp(24px, 5vw, 38px)", fontWeight: "700", letterSpacing: "-0.03em" }}>
                Mijoz uchun bepul
              </h3>
              <p style={{ margin: "8px 0 0", fontSize: "clamp(15px, 2.5vw, 19px)", lineHeight: "1.5", color: "#5F6B88", maxWidth: "520px" }}>
                Buyurtma berish, narx olish va maslahat 100% bepul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
