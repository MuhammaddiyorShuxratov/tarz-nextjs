import Link from "next/link";

export default function Yonalishlar() {
  return (
    <section style={{ padding: "clamp(48px, 8vw, 96px) 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: "clamp(28px, 4vw, 44px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "14px", height: "2px", background: "#10152B" }} />
            03 · Yo’nalishlar
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(32px, 6vw, 60px)", lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Qaysi ustalar kerak?
          </h2>
          <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.5", color: "#5F6B88" }}>
            Qurilish va ta’mirlash ustalari, brigadalar qo’shilishi mumkin.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "0", border: "1.5px solid #10152B", borderRadius: "14px", overflow: "hidden", background: "#FFFFFF" }}>
          <Link href="/xizmatlar/santexnik" className="tile" style={{ display: "flex", alignItems: "center", gap: "18px", padding: "30px 28px", borderRight: "1.5px solid #10152B", borderBottom: "1.5px solid #10152B" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />
            </svg>
            <span className="d" style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em" }}>
              Santexnik
            </span>
          </Link>
          <Link href="/xizmatlar" className="tile" style={{ display: "flex", alignItems: "center", gap: "18px", padding: "30px 28px", borderRight: "1.5px solid #10152B", borderBottom: "1.5px solid #10152B" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
            </svg>
            <span className="d" style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em" }}>
              Elektrik
            </span>
          </Link>
          <Link href="/xizmatlar" className="tile" style={{ display: "flex", alignItems: "center", gap: "18px", padding: "30px 28px", borderBottom: "1.5px solid #10152B" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="8" height="8" rx="1" />
              <rect x="13" y="3" width="8" height="8" rx="1" />
              <rect x="3" y="13" width="8" height="8" rx="1" />
              <rect x="13" y="13" width="8" height="8" rx="1" />
            </svg>
            <span className="d" style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em" }}>
              Kafel ustasi
            </span>
          </Link>
          <Link href="/xizmatlar" className="tile" style={{ display: "flex", alignItems: "center", gap: "18px", padding: "30px 28px", borderRight: "1.5px solid #10152B" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 12 12 4l9 8M6 10v10h12V10" />
            </svg>
            <span className="d" style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em" }}>
              Tom yopish
            </span>
          </Link>
          <Link href="/xizmatlar" className="tile" style={{ display: "flex", alignItems: "center", gap: "18px", padding: "30px 28px", borderRight: "1.5px solid #10152B" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="15" height="6" rx="1" />
              <path d="M18 6h3v6H11v3" />
              <rect x="9" y="15" width="4" height="6" rx="1" />
            </svg>
            <span className="d" style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em" }}>
              Pardozchi
            </span>
          </Link>
          <Link href="/xizmatlar" className="tile" style={{ display: "flex", alignItems: "center", gap: "18px", padding: "30px 28px" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="5" y="2" width="14" height="20" rx="1" />
              <circle cx="15" cy="12" r="1" />
            </svg>
            <span className="d" style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em" }}>
              Eshik va deraza
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
