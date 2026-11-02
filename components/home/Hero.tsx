import PlanCard from "./PlanCard";

export default function Hero() {
  return (
    <section className="gb" style={{ borderBottom: "1px solid #14181F" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(40px, 7vw, 72px) clamp(16px, 4vw, 40px) clamp(48px, 8vw, 96px)",
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(36px, 6vw, 56px)",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1 1 500px", minWidth: "0", display: "flex", flexDirection: "column", gap: "clamp(20px, 4vw, 30px)", alignItems: "flex-start" }}>
          
          {/* Badge */}
          <span
            className="m anim-fade-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "clamp(11px, 2.5vw, 13px)",
              fontWeight: "600",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              border: "1px solid #14181F",
              padding: "6px 14px",
              borderRadius: "999px",
              background: "#FBFAF6",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)" }} />
            Toshkent bo’ylab · tekshirilgan ustalar
          </span>

          {/* Heading */}
          <h1
            className="d anim-fade-up anim-delay-1"
            style={{
              margin: "0",
              fontSize: "clamp(42px, 8vw, 90px)",
              lineHeight: ".98",
              letterSpacing: "-0.04em",
              fontWeight: "800",
            }}
          >
            {"Toshkentda ishonchli usta "}
            <span
              style={{
                background: "linear-gradient(transparent 60%,var(--accent) 60%,var(--accent) 92%,transparent 92%)",
                padding: "0 6px",
                margin: "0 -6px",
              }}
            >
              2 soatda
            </span>
          </h1>

          {/* Precision Ruler Graphic */}
          <svg
            className="anim-fade-up anim-delay-2"
            width="100%"
            height="36"
            viewBox="0 0 520 36"
            role="img"
            aria-label="Taxminan 2 soat ichida"
            style={{ maxWidth: "520px", height: "auto" }}
          >
            <g stroke="#14181F" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 18H190M330 18H518" />
              <path d="M2 7V29M518 7V29" />
              <path d="M13 12 2 18l11 6M507 12l11 6-11 6" />
            </g>
            <text x="260" y="23" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="15" fontWeight="600" fill="#14181F">
              ≈ 2 soat ichida
            </text>
          </svg>

          {/* Subtitle */}
          <p
            className="anim-fade-up anim-delay-2"
            style={{
              margin: "0",
              fontSize: "clamp(17px, 2.5vw, 21px)",
              lineHeight: "1.5",
              color: "#5A5F69",
              maxWidth: "520px",
            }}
          >
            Buyurtma qoldiring, tekshirilgan ustalar narx taklif qiladi, siz tanlaysiz. 100% bepul.
          </p>

          {/* Action CTAs */}
          <div className="anim-fade-up anim-delay-3" style={{ display: "flex", gap: "12px", flexWrap: "wrap", width: "100%" }}>
            <a
              href="#xizmatlar"
              className="btn hb"
              style={{
                background: "var(--accent)",
                color: "#14181F",
                border: "1.5px solid #14181F",
                boxShadow: "0 3px 0 #14181F",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
                <path d="M21 4 3 11l6 2 2 7 3-4 5 4z" />
              </svg>
              <span>Usta topish</span>
            </a>
            <a
              href="/ustalar-uchun"
              className="btn hb"
              style={{
                border: "1.5px solid #14181F",
                background: "#FBFAF6",
                color: "#14181F",
                boxShadow: "0 3px 0 #14181F",
              }}
            >
              Men ustaman
            </a>
          </div>

          {/* Guarantees List */}
          <ul
            className="m anim-fade-up anim-delay-3"
            style={{
              margin: "0",
              padding: "0",
              listStyle: "none",
              display: "flex",
              gap: "16px 24px",
              flexWrap: "wrap",
              fontSize: "clamp(12px, 2.5vw, 13px)",
              fontWeight: "600",
              color: "#14181F",
            }}
          >
            <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B5D66" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12l5 5 9-10" />
              </svg>
              Bepul xizmat
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B5D66" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12l5 5 9-10" />
              </svg>
              Telegram ichida
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B5D66" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12l5 5 9-10" />
              </svg>
              Hujjat bilan tekshirilgan
            </li>
          </ul>
        </div>

        {/* Blueprint Plan Card */}
        <div style={{ flex: "0 1 500px", width: "100%", maxWidth: "500px", minWidth: "0" }}>
          <PlanCard />
        </div>
      </div>
    </section>
  );
}