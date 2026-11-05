import Link from "next/link";

export default function Hero() {
  return (
    <section className="gb" style={{ borderBottom: "1px solid #10152B" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(28px, 5vw, 40px) clamp(16px, 4vw, 40px) clamp(48px, 8vw, 72px)", display: "flex", flexDirection: "column", gap: "clamp(24px, 4vw, 40px)" }}>
        <nav aria-label="Sahifa yo’li" className="m" style={{ fontSize: "13px", display: "flex", gap: "10px", color: "#5F6B88" }}>
          <Link href="/">
            Bosh sahifa
          </Link>
          <span>
            /
          </span>
          <span style={{ color: "#10152B", fontWeight: "700" }} aria-current="page">
            Savollar
          </span>
        </nav>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "clamp(24px, 4vw, 40px)" }}>
          <div style={{ flex: "1 1 540px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <h1 className="d" style={{ margin: "0", fontSize: "clamp(44px, 8.5vw, 108px)", lineHeight: ".95", letterSpacing: "-0.045em", fontWeight: "800" }}>
              {"Savol "}
              <span style={{ background: "linear-gradient(transparent 60%,var(--accent) 60%,var(--accent) 92%,transparent 92%)", padding: "0 6px", margin: "0 -6px" }}>
                javob
              </span>
            </h1>
            <p style={{ margin: "0", fontSize: "clamp(16px, 2.5vw, 21px)", lineHeight: "1.5", color: "#5F6B88", maxWidth: "560px" }}>
              Tarz haqida eng ko’p so’raladigan savollarga aniq javoblar. Javobni topolmasangiz, buyurtma qoldiring.
            </p>
          </div>
          <nav aria-label="Bo’limlar" style={{ flex: "0 1 420px", minWidth: "0", width: "100%", maxWidth: "420px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="#a" className="jump" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 20px", border: "1.5px solid #10152B", borderRadius: "10px", background: "#FFFFFF" }}>
              <span className="m" style={{ fontSize: "13px", fontWeight: "700" }}>
                A
              </span>
              <span style={{ flex: "1", fontWeight: "700", fontSize: "17px" }}>
                Buyurtma va narx
              </span>
              <span className="m" style={{ fontSize: "12px" }}>
                8
              </span>
            </a>
            <a href="#b" className="jump" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 20px", border: "1.5px solid #10152B", borderRadius: "10px", background: "#FFFFFF" }}>
              <span className="m" style={{ fontSize: "13px", fontWeight: "700" }}>
                B
              </span>
              <span style={{ flex: "1", fontWeight: "700", fontSize: "17px" }}>
                Ishonch va xavfsizlik
              </span>
              <span className="m" style={{ fontSize: "12px" }}>
                4
              </span>
            </a>
            <a href="#c" className="jump" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 20px", border: "1.5px solid #10152B", borderRadius: "10px", background: "#FFFFFF" }}>
              <span className="m" style={{ fontSize: "13px", fontWeight: "700" }}>
                C
              </span>
              <span style={{ flex: "1", fontWeight: "700", fontSize: "17px" }}>
                Ustalar uchun
              </span>
              <span className="m" style={{ fontSize: "12px" }}>
                4
              </span>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
