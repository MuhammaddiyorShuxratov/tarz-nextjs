import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biz haqimizda — Tarz",
  description:
    "Tarz — Toshkentda ishonchli qurilish va ta’mirlash ustalarini topish xizmati. Steppe Venture Builders ekotizimi mahsuloti.",
};

export default function BizHaqimizdaPage() {
  return (
    <main>
      <section className="gb" style={{ borderBottom: "1.5px solid #10152B" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "clamp(28px, 5vw, 40px) clamp(16px, 4vw, 40px) clamp(44px, 7vw, 72px)",
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
              Biz haqimizda
            </span>
          </nav>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "780px" }}>
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
              Toshkent · 2026
            </span>
            <h1
              className="d"
              style={{
                margin: "0",
                fontSize: "clamp(36px, 7vw, 76px)",
                lineHeight: "1.02",
                letterSpacing: "-0.04em",
                fontWeight: "800",
              }}
            >
              Ishonchli usta topish endi{" "}
              <span
                style={{
                  background:
                    "linear-gradient(transparent 60%,var(--accent) 60%,var(--accent) 92%,transparent 92%)",
                  padding: "0 6px",
                  margin: "0 -6px",
                }}
              >
                oson
              </span>
            </h1>
            <p style={{ margin: "0", fontSize: "clamp(17px, 2.3vw, 21px)", lineHeight: "1.55", color: "#5F6B88" }}>
              Tarz Toshkentdagi uy egalari va bizneslarni tekshirilgan santexnik, elektrik, kafelchi, tom yopuvchi va pardozchilar bilan Telegram orqali tezkor bog’laydi.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(48px, 7vw, 88px) 0" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(16px, 4vw, 40px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #10152B",
              borderRadius: "14px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <span className="m" style={{ fontSize: "12px", fontWeight: "700", color: "var(--accent)" }}>
              01 · MAQSADIMIZ
            </span>
            <h2 className="d" style={{ margin: "0", fontSize: "24px", fontWeight: "800" }}>
              Shaffof narx va tezkor aloqa
            </h2>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5F6B88" }}>
              Tanish-bilishlardan usta qidirish yoki taxminiy narxlar bilan chalg’ish o’rniga, bitta buyurtma bilan bir nechta tekshirilgan ustaning aniq taklifini olasiz.
            </p>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #10152B",
              borderRadius: "14px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <span className="m" style={{ fontSize: "12px", fontWeight: "700", color: "var(--accent)" }}>
              02 · MANZIL VA ALOQA
            </span>
            <h2 className="d" style={{ margin: "0", fontSize: "24px", fontWeight: "800" }}>
              Toshkent bo’ylab xizmat
            </h2>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5F6B88" }}>
              Ofis manzili: Chilonzor tumani, Bunyodkor shoh ko’chasi, 15, Toshkent.
              <br />
              Telefon: +998 71 200 12 34
              <br />
              Email: info@tarz.uz
            </p>
          </div>

          <div
            style={{
              background: "#F4F7FD",
              border: "1.5px solid #10152B",
              borderRadius: "14px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <span className="m" style={{ fontSize: "12px", fontWeight: "700", color: "var(--accent)" }}>
              03 · VENTURE STUDIO
            </span>
            <h2 className="d" style={{ margin: "0", fontSize: "24px", fontWeight: "800" }}>
              Steppe Venture Builders
            </h2>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5F6B88" }}>
              Tarz{" "}
              <a
                href="https://steppeventure.builders/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#10152B", fontWeight: "700", textDecoration: "underline" }}
              >
                Steppe Venture Builders
              </a>{" "}
              tomonidan O’zbekiston bozori uchun yaratilgan texnologik mahsulotdir.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
