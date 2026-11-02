import Link from "next/link";

export default function Hero() {
  return (
    <section className="gb" style={{ borderBottom: "1.5px solid #14181F" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(28px, 5vw, 40px) clamp(16px, 4vw, 40px) clamp(48px, 8vw, 72px)", display: "flex", flexDirection: "column", gap: "clamp(24px, 4vw, 40px)" }}>
        <nav aria-label="Sahifa yo’li" className="m anim-fade-up" style={{ fontSize: "13px", display: "flex", gap: "10px", color: "#5A5F69" }}>
          <Link href="/">
            Bosh sahifa
          </Link>
          <span>/</span>
          <span style={{ color: "#14181F", fontWeight: "700" }} aria-current="page">
            Xizmatlar
          </span>
        </nav>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "clamp(24px, 4vw, 40px)" }}>
          <div style={{ flex: "1 1 540px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <h1 className="d anim-fade-up anim-delay-1" style={{ margin: "0", fontSize: "clamp(42px, 8vw, 96px)", lineHeight: ".95", letterSpacing: "-0.045em", fontWeight: "800" }}>
              {"Qaysi usta "}
              <span style={{ background: "linear-gradient(transparent 60%,var(--accent) 60%,var(--accent) 92%,transparent 92%)", padding: "0 6px", margin: "0 -6px" }}>
                kerak?
              </span>
            </h1>
            <p className="anim-fade-up anim-delay-2" style={{ margin: "0", fontSize: "clamp(16px, 2.5vw, 21px)", lineHeight: "1.5", color: "#5A5F69", maxWidth: "560px" }}>
              Tarz 6 xil yo’nalishda tekshirilgan ustalarni topadi. Ish turini tanlang va taxminiy narxni ko’ring.
            </p>
          </div>
          <div className="anim-fade-up anim-delay-3" style={{ display: "flex", alignItems: "flex-end", gap: "16px" }}>
            <span className="d" style={{ fontSize: "clamp(64px, 14vw, 140px)", lineHeight: ".78", fontWeight: "800", letterSpacing: "-0.06em", color: "transparent", WebkitTextStroke: "2px #14181F" }}>
              06
            </span>
            <span className="m" style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", paddingBottom: "6px", lineHeight: "1.5", color: "#5A5F69" }}>
              yo’nalish
              <br />
              Toshkent
              <br />
              bo’ylab
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
