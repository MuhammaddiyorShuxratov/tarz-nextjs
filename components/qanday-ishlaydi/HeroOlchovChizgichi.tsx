import Link from "next/link";

export default function HeroOlchovChizgichi() {
  return (
    <section className="gb" style={{ borderBottom: "1.5px solid #14181F" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(28px, 5vw, 40px) clamp(16px, 4vw, 40px) clamp(48px, 8vw, 72px)", display: "flex", flexDirection: "column", gap: "clamp(24px, 4vw, 40px)" }}>
        <nav aria-label="Sahifa yo’li" className="m anim-fade-up" style={{ fontSize: "13px", display: "flex", gap: "10px", color: "#5A5F69" }}>
          <Link href="/">
            Bosh sahifa
          </Link>
          <span>
            /
          </span>
          <span style={{ color: "#14181F", fontWeight: "700" }} aria-current="page">
            Qanday ishlaydi?
          </span>
        </nav>
        <h1 className="d anim-fade-up anim-delay-1" style={{ margin: "0", fontSize: "clamp(42px, 8vw, 104px)", lineHeight: ".95", letterSpacing: "-0.045em", fontWeight: "800", maxWidth: "1000px" }}>
          {"Tarz qanday "}
          <span style={{ background: "linear-gradient(transparent 60%,var(--accent) 60%,var(--accent) 92%,transparent 92%)", padding: "0 6px", margin: "0 -6px" }}>
            ishlaydi?
          </span>
        </h1>
        <p className="anim-fade-up anim-delay-2" style={{ margin: "0", fontSize: "clamp(16px, 2.5vw, 21px)", lineHeight: "1.5", color: "#5A5F69", maxWidth: "620px" }}>
          Tarz buyurtmangizni tekshirilgan ustalar bilan bog’laydi. Siz 3 qadamda usta tanlaysiz. Hammasi Telegram ichida, bepul.
        </p>
        <div className="anim-fade-up anim-delay-3" style={{ background: "#FBFAF6", border: "1.5px solid #14181F", borderRadius: "14px", padding: "clamp(16px, 3vw, 26px) clamp(16px, 3vw, 28px) 14px", display: "flex", flexDirection: "column", gap: "10px", overflowX: "auto" }}>
          <span className="m" style={{ fontSize: "12px", fontWeight: "500", letterSpacing: ".1em", textTransform: "uppercase", color: "#5A5F69" }}>
            Vaqt shkalasi · buyurtmadan ustagacha
          </span>
          <svg viewBox="0 0 1200 120" width="100%" role="img" aria-label="Vaqt shkalasi: buyurtma 2 daqiqada, takliflar 10 dan 30 daqiqagacha, usta shoshilinch ishda taxminan 2 soatda yetib keladi">
            <g stroke="#14181F" strokeWidth="1.5" fill="none">
              <path d="M20 70H1180" />
              <path d="M20 60V80M309.9 60V80M599.8 60V80M889.7 60V80M1180 56V84" />
            </g>
            <g stroke="#14181F" strokeWidth="1">
              <path d="M116.7 66V74M213.3 66V74M406.6 66V74M503.2 66V74M696.5 66V74M793.2 66V74M986.4 66V74M1083 66V74" />
            </g>
            <rect x="116.7" y="58" width="193.3" height="24" rx="3" fill="var(--accent)" stroke="#14181F" strokeWidth="1.5" />
            <text x="213" y="46" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700" fill="#14181F">
              takliflar kela boshlaydi
            </text>
            <circle cx="39.3" cy="70" r="8" fill="#14181F" />
            <text x="20" y="46" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700" fill="#14181F">
              buyurtma
            </text>
            <circle cx="1180" cy="70" r="12" fill="#0B5D66" stroke="#14181F" strokeWidth="1.5" />
            <path d="M1174 70l4 4 8-9" stroke="#F2EEE5" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="1180" y="40" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700" fill="#14181F">
              usta yetib keladi (shoshilinch ishda)
            </text>
            <g fontFamily="JetBrains Mono, monospace" fontSize="12" fill="#5A5F69" textAnchor="middle">
              <text x="20" y="106" textAnchor="start">
                0
              </text>
              <text x="309.9" y="106">
                30 daq
              </text>
              <text x="599.8" y="106">
                60 daq
              </text>
              <text x="889.7" y="106">
                90 daq
              </text>
              <text x="1180" y="106" textAnchor="end">
                2 soat
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
