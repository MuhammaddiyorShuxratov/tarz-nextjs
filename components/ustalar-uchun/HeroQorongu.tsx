import Link from "next/link";

export default function HeroQorongu() {
  return (
    <section className="gd" style={{ backgroundColor: "#101820", color: "#F2EEE5", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(28px, 5vw, 40px) clamp(16px, 4vw, 40px) clamp(48px, 8vw, 104px)", display: "flex", flexDirection: "column", gap: "clamp(24px, 4vw, 48px)" }}>
        <nav aria-label="Sahifa yo’li" className="m anim-fade-up" style={{ fontSize: "13px", display: "flex", gap: "10px", color: "#A9B0BA" }}>
          <Link href="/">
            Bosh sahifa
          </Link>
          <span>/</span>
          <span style={{ color: "#F2EEE5", fontWeight: "700" }} aria-current="page">
            Ustalar uchun
          </span>
        </nav>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 56px)", alignItems: "center" }}>
          <div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px", alignItems: "flex-start" }}>
            <span className="m anim-fade-up" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", border: "1px solid #3A4856", padding: "6px 14px", borderRadius: "999px", background: "rgba(255,255,255,0.04)" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)" }} />
              Ustalar uchun · bepul ro’yxat
            </span>
            <h1 className="d anim-fade-up anim-delay-1" style={{ margin: "0", fontSize: "clamp(36px, 7.5vw, 88px)", lineHeight: "1.08", letterSpacing: "-0.04em", fontWeight: "800" }}>
              {"Buyurtmalar "}
              <span style={{ display: "inline-block", background: "var(--accent)", color: "#14181F", padding: "2px 10px", borderRadius: "8px" }}>
                o’zi
              </span>
              {" kelsin"}
            </h1>
            <p className="anim-fade-up anim-delay-2" style={{ margin: "0", fontSize: "clamp(16px, 2.5vw, 21px)", lineHeight: "1.5", color: "#A9B0BA", maxWidth: "540px" }}>
              Tarz’da bepul ro’yxatdan o’ting. Toshkent bo’yicha tayyor buyurtmalarga o’z narxingizni taklif qiling.
            </p>
            <div className="anim-fade-up anim-delay-3" style={{ display: "flex", gap: "14px", flexWrap: "wrap", width: "100%" }}>
              <a href="#" className="btn hb" style={{ background: "var(--accent)", color: "#14181F", border: "1.5px solid #14181F", boxShadow: "0 3px 0 #14181F" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
                  <path d="M21 4 3 11l6 2 2 7 3-4 5 4z" />
                </svg>
                <span>Usta bo’lib qo’shilish</span>
              </a>
              <Link href="/" className="btn hb" style={{ border: "1.5px solid rgba(242,238,229,.4)", color: "#F2EEE5", background: "transparent" }}>
                Usta topish
              </Link>
            </div>
          </div>

          {/* Sample Tickets Stack */}
          <div className="tickets-container anim-fade-up anim-delay-2">
            <div className="ticket-card-1">
              <span className="m" style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#5A5F69" }}>
                Yangi buyurtma · namuna
              </span>
              <strong className="d" style={{ fontSize: "24px", letterSpacing: "-0.02em", marginTop: "4px" }}>
                Elektrik · Yunusobod
              </strong>
              <span style={{ fontSize: "14px", color: "#5A5F69" }}>
                Rozetka va sim almashtirish
              </span>
            </div>

            <div className="ticket-card-2">
              <span className="m" style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#5A5F69" }}>
                Yangi buyurtma · namuna
              </span>
              <strong className="d" style={{ fontSize: "24px", letterSpacing: "-0.02em", marginTop: "4px" }}>
                Kafel ustasi · Mirobod
              </strong>
              <span style={{ fontSize: "14px", color: "#5A5F69" }}>
                Vannaxona kafeli
              </span>
            </div>

            <div className="ticket-card-3">
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span className="m" style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#5A5F69" }}>
                  Yangi buyurtma · namuna
                </span>
                <strong className="d" style={{ fontSize: "26px", letterSpacing: "-0.02em" }}>
                  Santexnik · Chilonzor
                </strong>
                <span style={{ fontSize: "14px", color: "#5A5F69" }}>
                  Kran almashtirish, 1 dona
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "8px" }}>
                <div style={{ flex: "1", height: "44px", border: "1.5px solid #14181F", borderRadius: "8px", background: "#FBFAF6", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px" }}>
                  <span className="m" style={{ fontWeight: "700", fontSize: "15px" }}>
                    [000 000]
                  </span>
                  <span className="m" style={{ fontSize: "12px", color: "#5A5F69" }}>
                    so’m
                  </span>
                </div>
                <div style={{ height: "44px", padding: "0 18px", borderRadius: "8px", background: "#14181F", color: "#F2EEE5", display: "flex", alignItems: "center", fontWeight: "700", fontSize: "14px" }}>
                  Taklif
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
