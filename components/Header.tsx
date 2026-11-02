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
        background: "rgba(242, 238, 229, 0.94)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1.5px solid #14181F",
        fontFamily: "'Inter Tight', system-ui, sans-serif",
        color: "#14181F",
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
        <Link href="/" aria-label="Tarz bosh sahifa" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(26px, 5vw, 32px)", fontWeight: "800", letterSpacing: "-0.05em", lineHeight: "1" }}>
            Tarz
          </span>
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
                  color: on ? "#14181F" : "#5A5F69",
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
              color: "#5A5F69",
            }}
          >
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#0B5D66" }} />
            Toshkent
          </span>

          <Link
            href="#xizmatlar"
            className="hb"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              height: "44px",
              padding: "0 clamp(14px, 3vw, 20px)",
              borderRadius: "10px",
              background: "var(--accent)",
              color: "#14181F",
              fontWeight: "700",
              fontSize: "14px",
              border: "1.5px solid #14181F",
              boxShadow: "0 2px 0 #14181F",
              whiteSpace: "nowrap",
            }}
          >
            Usta topish
          </Link>

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
              border: "1.5px solid #14181F",
              background: mobileMenuOpen ? "#14181F" : "#FBFAF6",
              color: mobileMenuOpen ? "#F2EEE5" : "#14181F",
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
            background: "#FBFAF6",
            borderTop: "1.5px solid #14181F",
            borderBottom: "1.5px solid #14181F",
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
                  background: on ? "#D3E6E3" : "transparent",
                  color: "#14181F",
                  border: on ? "1.5px solid #14181F" : "1px solid transparent",
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

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid #D6D0C0" }}>
            <span className="m" style={{ fontSize: "12px", color: "#5A5F69", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#0B5D66" }} />
              Toshkent bo’ylab xizmat
            </span>
            <Link
              href="/ustalar-uchun"
              onClick={() => setMobileMenuOpen(false)}
              className="m"
              style={{ fontSize: "12px", color: "#0B5D66", fontWeight: "700" }}
            >
              Men ustaman →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}