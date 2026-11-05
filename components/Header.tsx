"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { key: "xizmat", label: "Xizmatlar", href: "/xizmatlar" },
  { key: "qanday", label: "Qanday ishlaydi?", href: "/qanday-ishlaydi" },
  { key: "ustalar", label: "Ustalar uchun", href: "/ustalar-uchun" },
  { key: "savollar", label: "Savollar", href: "/savollar" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() ?? "/";

  const activeKey = pathname.startsWith("/xizmatlar")
    ? "xizmat"
    : pathname.startsWith("/qanday-ishlaydi")
    ? "qanday"
    : pathname.startsWith("/ustalar-uchun")
    ? "ustalar"
    : pathname.startsWith("/savollar")
    ? "savollar"
    : "";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255, 255, 255, 0.94)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1.5px solid #10152B",
        fontFamily: "'Inter Tight', system-ui, sans-serif",
        color: "#10152B",
        transition: "all .2s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 40px)",
          height: "clamp(68px, 10vw, 84px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <Link href="/" aria-label="Tarz bosh sahifa" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <img
            src="/logo.png"
            alt="Tarz"
            style={{ height: "34px", width: "auto", display: "block" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Asosiy menyu" style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          {NAV_ITEMS.map((item) => {
            const on = item.key === activeKey;
            return (
              <Link
                key={item.key}
                className="nv"
                href={item.href}
                style={{
                  padding: "8px 14px",
                  fontSize: "15px",
                  fontWeight: on ? "700" : "600",
                  color: on ? "#10152B" : "#5F6B88",
                  borderBottom: on ? "2.5px solid var(--accent)" : "2.5px solid transparent",
                  transition: "all .15s ease",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: City badge + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            className="m desktop-city"
            style={{
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#5F6B88",
            }}
          >
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2E5BFF" }} />
            Toshkent
          </span>

          <a
            href="https://t.me/tarz_usta_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="hb"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              height: "44px",
              padding: "0 clamp(14px, 3vw, 20px)",
              borderRadius: "10px",
              background: "var(--accent)",
              color: "#FFFFFF",
              fontWeight: "700",
              fontSize: "14px",
              border: "1.5px solid #10152B",
              boxShadow: "0 2px 0 #10152B",
              whiteSpace: "nowrap",
            }}
          >
            Usta topish
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-burger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menyu"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              border: "1.5px solid #10152B",
              background: mobileMenuOpen ? "#10152B" : "#FFFFFF",
              color: mobileMenuOpen ? "#FFFFFF" : "#10152B",
              cursor: "pointer",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div
          className="anim-fade-up"
          style={{
            background: "#FFFFFF",
            borderTop: "1.5px solid #10152B",
            borderBottom: "1.5px solid #10152B",
            padding: "20px 24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const on = item.key === activeKey;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: "12px 14px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: on ? "700" : "600",
                  background: on ? "#EBF1FF" : "transparent",
                  color: "#10152B",
                  border: on ? "1.5px solid #10152B" : "1px solid transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>{item.label}</span>
                <span className="m" style={{ fontSize: "14px", color: "var(--accent)" }}>→</span>
              </Link>
            );
          })}

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid #E2E8F0" }}>
            <span className="m" style={{ fontSize: "12px", color: "#5F6B88", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2E5BFF" }} />
              Toshkent bo’ylab xizmat
            </span>
            <a
              href="https://t.me/tarz_usta_bot"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="m"
              style={{ fontSize: "12px", color: "#2E5BFF", fontWeight: "700" }}
            >
              Men ustaman →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}