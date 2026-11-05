import Link from "next/link";

export default function Hero() {
  return (
    <section className="gb" style={{ borderBottom: "1px solid #10152B" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(28px, 5vw, 40px) clamp(16px, 4vw, 40px) clamp(48px, 8vw, 88px)", display: "flex", flexDirection: "column", gap: "clamp(24px, 4vw, 44px)" }}>
        <nav aria-label="Sahifa yo’li" className="m" style={{ fontSize: "13px", display: "flex", gap: "10px", color: "#5F6B88", flexWrap: "wrap" }}>
          <Link href="/">
            Bosh sahifa
          </Link>
          <span>
            /
          </span>
          <Link href="/xizmatlar">
            Xizmatlar
          </Link>
          <span>
            /
          </span>
          <span style={{ color: "#10152B", fontWeight: "700" }} aria-current="page">
            Santexnik
          </span>
        </nav>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
          <div style={{ flex: "1 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px", alignItems: "flex-start" }}>
            <span className="m" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: "500", letterSpacing: ".08em", textTransform: "uppercase", border: "1px solid #10152B", padding: "8px 14px", borderRadius: "999px", background: "#FFFFFF" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />
              </svg>
              Xizmat № 01
            </span>
            <h1 className="d" style={{ margin: "0", fontSize: "clamp(34px, 7vw, 88px)", lineHeight: ".96", letterSpacing: "-0.04em", fontWeight: "800" }}>
              {"Santexnik ustasi "}
              <span style={{ background: "linear-gradient(transparent 60%,var(--accent) 60%,var(--accent) 92%,transparent 92%)", padding: "0 6px", margin: "0 -6px" }}>
                Toshkentda
              </span>
            </h1>
            <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.55", color: "#5F6B88", maxWidth: "600px" }}>
              Santexnik ustasini Tarz orqali 2 soat ichida topishingiz mumkin. Taxminiy narx: 80 000–150 000 so’m (1 dona uchun). Aniq narxni tekshirilgan ustalar buyurtmangizga qarab taklif qiladi.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="https://t.me/tarz_usta_bot" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "var(--accent)", color: "#FFFFFF", border: "1.5px solid #10152B", boxShadow: "0 2px 0 #10152B" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
                  <path d="M21 4 3 11l6 2 2 7 3-4 5 4z" />
                </svg>
                Usta topish
              </a>
              <a href="https://t.me/tarz_usta_bot" target="_blank" rel="noopener noreferrer" className="btn" style={{ border: "1.5px solid #10152B", color: "#10152B", background: "#FFFFFF", boxShadow: "0 2px 0 #10152B" }}>
                Men ustaman
              </a>
            </div>
          </div>
          <div style={{ flex: "0 1 430px", minWidth: "320px", filter: "drop-shadow(10px 10px 0 var(--accent))" }}>
            <div style={{ background: "#FFFFFF", border: "1.5px solid #10152B", borderBottom: "0", borderRadius: "14px 14px 0 0", padding: "28px", display: "flex", flexDirection: "column", gap: "18px" }}>
              <span className="m" style={{ fontSize: "12px", fontWeight: "500", letterSpacing: ".1em", textTransform: "uppercase", color: "#5F6B88" }}>
                Taxminiy narx · 1 dona uchun
              </span>
              <div className="d" style={{ fontSize: "54px", fontWeight: "800", letterSpacing: "-0.045em", lineHeight: "1" }}>
                {"80 000–150 000 "}
                <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "0" }}>
                  so’m
                </span>
              </div>
              <div style={{ position: "relative", height: "30px" }}>
                <div style={{ position: "absolute", left: "0", right: "0", top: "20px", height: "8px", backgroundImage: "repeating-linear-gradient(90deg,#10152B 0 1px,transparent 1px 10%)", opacity: ".4" }} />
                <div style={{ position: "absolute", left: "0", right: "0", top: "19px", height: "1.5px", background: "#10152B", opacity: ".5" }} />
                <div style={{ position: "absolute", left: "25%", width: "21.9%", top: "6px", height: "14px", background: "var(--accent)", border: "1.5px solid #10152B", borderRadius: "3px" }} />
              </div>
              <div className="m" style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#5F6B88" }}>
                <span>
                  0
                </span>
                <span>
                  160 000
                </span>
                <span>
                  320 000
                </span>
              </div>
            </div>
            <div style={{ position: "relative", height: "0", borderTop: "2px dashed #10152B", background: "#FFFFFF", borderLeft: "1.5px solid #10152B", borderRight: "1.5px solid #10152B" }}>
              <span style={{ position: "absolute", left: "-15px", top: "-15px", width: "28px", height: "28px", borderRadius: "50%", background: "#FFFFFF", borderRight: "1.5px solid #10152B" }} />
              <span style={{ position: "absolute", right: "-15px", top: "-15px", width: "28px", height: "28px", borderRadius: "50%", background: "#FFFFFF", borderLeft: "1.5px solid #10152B" }} />
            </div>
            <div style={{ background: "#FFFFFF", border: "1.5px solid #10152B", borderTop: "0", borderRadius: "0 0 14px 14px", padding: "24px 28px 28px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <a href="https://t.me/tarz_usta_bot" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "#10152B", color: "#FFFFFF", width: "100%", boxSizing: "border-box" }}>
                Narx taklifini olish
              </a>
              <ul className="m" style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                <li style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E5BFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                  Birinchi takliflar 10–30 daqiqada
                </li>
                <li style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E5BFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                  Ustalar hujjat bilan tekshirilgan
                </li>
                <li style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E5BFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                  Buyurtma bepul
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
