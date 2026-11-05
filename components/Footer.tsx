import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#10152B", color: "#8C9BB5", fontFamily: "'Inter Tight',system-ui,sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(48px, 8vw, 88px) clamp(16px, 4vw, 40px) 0", display: "flex", flexDirection: "column", gap: "clamp(36px, 5vw, 56px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "56px", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 360px", maxWidth: "440px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <Link href="/" aria-label="Tarz bosh sahifa" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/logo-white.png"
                alt="Tarz"
                style={{ height: "36px", width: "auto", display: "block" }}
              />
            </Link>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6" }}>
              Tarz Toshkentdagi mijozlarni tekshirilgan qurilish va ta’mirlash ustalari bilan Telegram orqali bog’laydigan xizmat.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href="https://t.me/tarz_usta_bot" target="_blank" rel="noopener noreferrer" aria-label="Telegram" style={{ width: "46px", height: "46px", borderRadius: "10px", border: "1px solid #1F2642", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
                  <path d="M21 4 3 11l6 2 2 7 3-4 5 4z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" style={{ width: "46px", height: "46px", borderRadius: "10px", border: "1px solid #1F2642", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" style={{ width: "46px", height: "46px", borderRadius: "10px", border: "1px solid #1F2642", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M7 10v7M7 7v.01M11 17v-7M11 13a3 3 0 0 1 6 0v4" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" style={{ width: "46px", height: "46px", borderRadius: "10px", border: "1px solid #1F2642", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="5" width="20" height="14" rx="4" />
                  <path d="m10 9 5 3-5 3z" />
                </svg>
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "64px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "16px" }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", fontWeight: "500", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "6px" }}>
                Xizmatlar
              </span>
              <Link className="fl" href="/xizmatlar/santexnik">
                Santexnik
              </Link>
              <Link className="fl" href="/xizmatlar">
                Elektrik
              </Link>
              <Link className="fl" href="/xizmatlar">
                Kafel ustasi
              </Link>
              <Link className="fl" href="/xizmatlar">
                Tom yopish
              </Link>
              <Link className="fl" href="/xizmatlar">
                Pardozchi
              </Link>
              <Link className="fl" href="/xizmatlar">
                Eshik va deraza
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "16px" }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", fontWeight: "500", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "6px" }}>
                Foydali
              </span>
              <Link className="fl" href="/qanday-ishlaydi">
                Qanday ishlaydi?
              </Link>
              <Link className="fl" href="/xizmatlar">
                Narxlar
              </Link>
              <Link className="fl" href="/ustalar-uchun">
                Ustalar uchun
              </Link>
              <Link className="fl" href="/savollar">
                Savollar
              </Link>
              <a className="fl" href="#">
                Biz haqimizda
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "16px" }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", fontWeight: "500", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "6px" }}>
                Aloqa
              </span>
              <a className="fl" href="https://t.me/tarz_usta_bot" target="_blank" rel="noopener noreferrer">
                @tarz_usta_bot
              </a>
              <a className="fl" href="#">
                [+998 00 000 00 00]
              </a>
              <span>
                Toshkent, O’zbekiston
              </span>
              <span>
                [Manzil]
              </span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1F2642", padding: "22px 0", display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", fontFamily: "'JetBrains Mono',monospace", fontSize: "13px" }}>
          <span>
            {"© 2026 Tarz · "}
            <a className="fl" href="#">
              Maxfiylik
            </a>
            {" · "}
            <a className="fl" href="#">
              Shartlar
            </a>
          </span>

        </div>
      </div>
      <div aria-hidden="true" style={{ height: "clamp(120px, 20vw, 250px)", overflow: "hidden", display: "flex", justifyContent: "center" }}>
        <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "800", fontSize: "clamp(120px, 28vw, 380px)", lineHeight: ".85", letterSpacing: "-0.06em", color: "#161D36", whiteSpace: "nowrap", marginTop: "12px" }}>
          Tarz
        </span>
      </div>
    </footer>
  );
}
