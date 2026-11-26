import Link from "next/link";

export interface LegalSection {
  num: string;
  title: string;
  paragraphs: string[];
  items?: string[];
}

interface LegalDocumentProps {
  breadcrumb: string;
  badge: string;
  title: string;
  updatedAt: string;
  lead: string;
  sections: LegalSection[];
}

/** Shared layout for legal and policy pages matching the Tarz blueprint design system. */
export default function LegalDocument({
  breadcrumb,
  badge,
  title,
  updatedAt,
  lead,
  sections,
}: LegalDocumentProps) {
  return (
    <main>
      <section className="gb" style={{ borderBottom: "1.5px solid #10152B" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "clamp(28px, 5vw, 40px) clamp(16px, 4vw, 40px) clamp(40px, 6vw, 64px)",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <nav
            aria-label="Sahifa yo’li"
            className="m"
            style={{ fontSize: "13px", display: "flex", gap: "10px", color: "#5F6B88" }}
          >
            <Link href="/">Bosh sahifa</Link>
            <span>/</span>
            <span style={{ color: "#10152B", fontWeight: "700" }} aria-current="page">
              {breadcrumb}
            </span>
          </nav>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "780px" }}>
            <span
              className="m"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                alignSelf: "flex-start",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: ".08em",
                textTransform: "uppercase",
                border: "1.5px solid #10152B",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "#FFFFFF",
              }}
            >
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)" }} />
              {badge} · {updatedAt}
            </span>
            <h1
              className="d"
              style={{
                margin: "0",
                fontSize: "clamp(36px, 6vw, 68px)",
                lineHeight: "1.02",
                letterSpacing: "-0.04em",
                fontWeight: "800",
              }}
            >
              {title}
            </h1>
            <p style={{ margin: "0", fontSize: "clamp(16px, 2.2vw, 20px)", lineHeight: "1.55", color: "#5F6B88" }}>
              {lead}
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(40px, 6vw, 72px) 0" }}>
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            padding: "0 clamp(16px, 4vw, 40px)",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {sections.map((sec) => (
            <article
              key={sec.num}
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #10152B",
                borderRadius: "14px",
                padding: "clamp(22px, 4vw, 32px)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <span
                className="m"
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                {sec.num}
              </span>
              <h2
                className="d"
                style={{
                  margin: "0",
                  fontSize: "clamp(22px, 3vw, 28px)",
                  lineHeight: "1.2",
                  letterSpacing: "-0.025em",
                  fontWeight: "800",
                }}
              >
                {sec.title}
              </h2>
              {sec.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#36415E" }}
                >
                  {p}
                </p>
              ))}
              {sec.items && sec.items.length > 0 && (
                <ul
                  style={{
                    margin: "4px 0 0",
                    paddingLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#36415E",
                  }}
                >
                  {sec.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <div
            style={{
              background: "#F4F7FD",
              border: "1.5px solid #10152B",
              borderRadius: "14px",
              padding: "clamp(20px, 4vw, 28px)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <strong className="d" style={{ fontSize: "20px" }}>
                Savollaringiz bormi?
              </strong>
              <span style={{ fontSize: "15px", color: "#5F6B88" }}>
                info@tarz.uz yoki +998 71 200 12 34 orqali murojaat qiling.
              </span>
            </div>
            <a
              href="https://t.me/tarz_usta_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn hb"
              style={{
                background: "var(--accent)",
                color: "#FFFFFF",
                border: "1.5px solid #10152B",
                boxShadow: "0 2px 0 #10152B",
              }}
            >
              Telegram orqali bog’lanish
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
