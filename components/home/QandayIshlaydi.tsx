"use client";

import { useState, useEffect } from "react";

type CategoryKey = "santexnik" | "elektrik" | "kafel";

interface OfferData {
  key: "a" | "b" | "c";
  initial: string;
  name: string;
  role: string;
  rating: string;
  reviews: string;
  price: string;
  badge?: string;
}

interface CategoryConfig {
  name: string;
  icon: React.ReactNode;
  placeholder: string;
  defaultText: string;
  chips: string[];
  offers: OfferData[];
}

const CATEGORIES: Record<CategoryKey, CategoryConfig> = {
  santexnik: {
    name: "Santexnik",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />
      </svg>
    ),
    placeholder: "Masalan: Kran oqmoqda, quvur sozlash...",
    defaultText: "Kran almashtirish va quvur sozlash",
    chips: ["Kran oqmoqda", "Quvur sozlash", "Sifon almashtirish"],
    offers: [
      { key: "a", initial: "A", name: "Aziz", role: "Santexnik-usta", rating: "4,6 ★", reviews: "18 ta sharh", price: "120 000 so’m" },
      { key: "b", initial: "S", name: "Sardor", role: "Usta santexnik", rating: "4,8 ★", reviews: "32 ta sharh", price: "95 000 so’m", badge: "eng ma’qul" },
      { key: "c", initial: "B", name: "Bobur", role: "Universal usta", rating: "4,7 ★", reviews: "24 ta sharh", price: "110 000 so’m" },
    ],
  },
  elektrik: {
    name: "Elektrik",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
      </svg>
    ),
    placeholder: "Masalan: Rozetka kuygan, lyustra osish...",
    defaultText: "Rozetka montaj qilish va sim tortish",
    chips: ["Rozetka montaj", "Lyustra osish", "Avtomat kuygan"],
    offers: [
      { key: "a", initial: "F", name: "Farhod", role: "Tajribali elektrik", rating: "4,6 ★", reviews: "14 ta sharh", price: "55 000 so’m" },
      { key: "b", initial: "J", name: "Jamshid", role: "Elektromontaj ustasi", rating: "4,8 ★", reviews: "41 ta sharh", price: "40 000 so’m", badge: "eng ma’qul" },
      { key: "c", initial: "S", name: "Sherzod", role: "Universal elektrik", rating: "4,7 ★", reviews: "19 ta sharh", price: "50 000 so’m" },
    ],
  },
  kafel: {
    name: "Kafel",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    placeholder: "Masalan: Hammom va oshxonaga kafel terish...",
    defaultText: "Hammom va oshxonaga kafel yotqizish",
    chips: ["Hammom kafeli", "Oshxona fartuk", "Pol terish"],
    offers: [
      { key: "a", initial: "A", name: "Alisher", role: "Kafel va marmar ustasi", rating: "4,6 ★", reviews: "22 ta sharh", price: "100 000 so’m/m²" },
      { key: "b", initial: "D", name: "Davron", role: "Kafel ustasi", rating: "4,8 ★", reviews: "37 ta sharh", price: "85 000 so’m/m²", badge: "eng ma’qul" },
      { key: "c", initial: "R", name: "Rustam", role: "Plitkachi usta", rating: "4,7 ★", reviews: "16 ta sharh", price: "90 000 so’m/m²" },
    ],
  },
};

export default function QandayIshlaydi() {
  const [category, setCategory] = useState<CategoryKey>("santexnik");
  const [inputValue, setInputValue] = useState<string>("Kran almashtirish va quvur sozlash");
  const [selectedOffer, setSelectedOffer] = useState<"a" | "b" | "c">("b");
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [contactFeedback, setContactFeedback] = useState<string | null>(null);

  const currentCat = CATEGORIES[category];
  const activeOffer = currentCat.offers.find((o) => o.key === selectedOffer) ?? currentCat.offers[1];

  const handleSelectCategory = (cat: CategoryKey) => {
    setCategory(cat);
    setInputValue(CATEGORIES[cat].defaultText);
    setIsSubmitted(false);
    setActiveStep(1);
  };

  const handleChipClick = (chip: string) => {
    setInputValue(chip);
  };

  const handleSubmitOrder = () => {
    setIsSubmitted(true);
    setActiveStep(2);
  };

  const handleSelectOffer = (key: "a" | "b" | "c") => {
    setSelectedOffer(key);
    setActiveStep(3);
  };

  const handleTelegramContact = () => {
    setContactFeedback(`${activeOffer.name} usta bilan Telegram ochilmoqda...`);
    setTimeout(() => {
      setContactFeedback(null);
    }, 3500);
  };

  useEffect(() => {
    const handleCustomSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ category?: CategoryKey; text?: string }>;
      if (customEvent.detail) {
        if (customEvent.detail.category && CATEGORIES[customEvent.detail.category]) {
          setCategory(customEvent.detail.category);
        }
        if (customEvent.detail.text) {
          setInputValue(customEvent.detail.text);
        }
        setIsSubmitted(false);
        setActiveStep(1);
      }
    };

    window.addEventListener("tarz:select-service", handleCustomSelect);
    return () => window.removeEventListener("tarz:select-service", handleCustomSelect);
  }, []);

  return (
    <section id="qanday-ishlaydi" style={{ background: "#101820", color: "#F2EEE5", padding: "clamp(48px, 8vw, 96px) 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: "clamp(32px, 5vw, 56px)" }}>
        
        {/* Section Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "720px" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px", color: "var(--accent)" }}>
            <span style={{ width: "14px", height: "2px", background: "var(--accent)" }} />
            02 · Qanday ishlaydi?
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(32px, 7vw, 64px)", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Uch qadamda usta topasiz
          </h2>
        </div>

        {/* ── 3 Column Step System with Architectural Precision Timeline ── */}
        <div className="responsive-grid-3" style={{ position: "relative" }}>
          
          {/* ═════════ STEP 1 ═════════ */}
          <div className="step-col" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* Timeline Node & Architectural Connecting Conduit */}
            <div style={{ display: "flex", alignItems: "center", position: "relative", height: "46px" }}>
              <div
                className={activeStep === 1 || isSubmitted ? "pulse-node" : ""}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: isSubmitted ? "#0B5D66" : "#101820",
                  border: isSubmitted ? "2px solid #0B5D66" : "2px solid var(--accent)",
                  boxShadow: isSubmitted
                    ? "0 0 0 3px rgba(11, 93, 102, 0.3), 0 0 16px rgba(11, 93, 102, 0.4)"
                    : "0 0 0 3px rgba(255, 90, 31, 0.25), 0 0 16px rgba(255, 90, 31, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 3,
                  flexShrink: 0,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: "800",
                  color: isSubmitted ? "#F2EEE5" : "var(--accent)",
                  transition: "all .3s ease",
                }}
              >
                {isSubmitted ? "✓" : "01"}
              </div>

              {/* Architectural Conduit Track from Step 1 to Step 2 */}
              <svg
                className="timeline-track-svg"
                style={{
                  position: "absolute",
                  left: "44px",
                  right: "-40px",
                  top: "14px",
                  width: "calc(100% - 44px + 40px)",
                  height: "22px",
                  zIndex: 2,
                  pointerEvents: "none",
                  overflow: "visible",
                }}
              >
                <defs>
                  <pattern id="rulerTicks1" width="16" height="8" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="4" stroke="rgba(242, 238, 229, 0.18)" strokeWidth="1" />
                    <line x1="8" y1="0" x2="8" y2="7" stroke="rgba(242, 238, 229, 0.35)" strokeWidth="1.2" />
                  </pattern>
                </defs>

                {/* Millimeter blueprint ticks above rail */}
                <rect x="6" y="0" width="calc(100% - 12px)" height="8" fill="url(#rulerTicks1)" />

                {/* Solid base rail */}
                <line x1="6" y1="9" x2="calc(100% - 6px)" y2="9" stroke="rgba(242, 238, 229, 0.15)" strokeWidth="2" />

                {/* Glowing laser progress track */}
                <line
                  x1="6"
                  y1="9"
                  x2="calc(100% - 6px)"
                  y2="9"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  strokeDasharray="6 8"
                  className="timeline-track"
                  strokeLinecap="round"
                />

                {/* Milestone arrow in center */}
                <path
                  d="M calc(50% - 4px) 5 L calc(50% + 2px) 9 L calc(50% - 4px) 13"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Time label badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="m" style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", background: "rgba(255,90,31,0.12)", padding: "3px 8px", borderRadius: "6px", border: "1px solid rgba(255,90,31,0.25)" }}>
                ⚡ 2 daqiqa
              </span>
              <span className="m" style={{ fontSize: "11px", color: "#A9B0BA" }}>
                ariza topshirish
              </span>
            </div>

            {/* Giant stroked step number */}
            <div
              className="d step-num"
              style={{
                fontSize: "110px",
                lineHeight: ".8",
                fontWeight: "800",
                letterSpacing: "-0.05em",
                color: "transparent",
                WebkitTextStroke: activeStep === 1 ? "1.5px var(--accent)" : "1.5px #F2EEE5",
              }}
            >
              1
            </div>

            <div>
              <h3 className="d" style={{ margin: "0", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                Buyurtma joylang
              </h3>
              <p style={{ margin: "8px 0 0", fontSize: "16px", lineHeight: "1.5", color: "#A9B0BA" }}>
                Nima kerakligini 2 daqiqada yozing.
              </p>
            </div>

            {/* ── CARD 1: Truly Functional Interactive Order Card ── */}
            <div
              className="step-card"
              style={{
                background: "#FBFAF6",
                color: "#14181F",
                borderRadius: "16px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                border: activeStep === 1 ? "2px solid #14181F" : "1.5px solid #14181F",
                marginTop: "auto",
                minHeight: "315px",
                justifyContent: "space-between",
                boxSizing: "border-box",
                boxShadow: "5px 5px 0 var(--accent)",
                gap: "12px",
              }}
            >
              {/* Card Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong style={{ fontSize: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>Nima kerak?</span>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0B5D66", display: "inline-block" }} />
                </strong>
                <span className="m" style={{ fontSize: "11px", fontWeight: "700", color: "#14181F", background: "#E8E2D5", padding: "3px 10px", borderRadius: "999px" }}>
                  1-BOSQICH
                </span>
              </div>

              {/* Service Category Pills */}
              <div style={{ display: "flex", gap: "6px" }}>
                {(["santexnik", "elektrik", "kafel"] as CategoryKey[]).map((catKey) => {
                  const active = category === catKey;
                  const item = CATEGORIES[catKey];
                  return (
                    <button
                      key={catKey}
                      type="button"
                      onClick={() => handleSelectCategory(catKey)}
                      style={{
                        background: active ? "#14181F" : "#FFFFFF",
                        color: active ? "#F2EEE5" : "#14181F",
                        border: active ? "1.5px solid #14181F" : "1.5px solid #D6D0C0",
                        borderRadius: "999px",
                        padding: "6px 10px",
                        fontSize: "12px",
                        fontWeight: "700",
                        fontFamily: "'JetBrains Mono', monospace",
                        cursor: "pointer",
                        transition: "all .15s ease",
                        flex: "1",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "4px",
                      }}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Real Interactive Input with Clear Button */}
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5A5F69"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ position: "absolute", left: "12px", pointerEvents: "none" }}
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={currentCat.placeholder}
                  style={{
                    width: "100%",
                    height: "42px",
                    padding: "0 34px 0 36px",
                    background: "#FFFFFF",
                    border: "1.5px solid #14181F",
                    borderRadius: "10px",
                    fontSize: "13px",
                    color: "#14181F",
                    outline: "none",
                    boxSizing: "border-box",
                    fontFamily: "'Inter Tight', system-ui, sans-serif",
                    fontWeight: "500",
                  }}
                />
                {inputValue.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setInputValue("")}
                    style={{
                      position: "absolute",
                      right: "10px",
                      background: "transparent",
                      border: "none",
                      color: "#888",
                      fontSize: "16px",
                      cursor: "pointer",
                      padding: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    title="Tozalash"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Quick suggestion chips */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {currentCat.chips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => handleChipClick(chip)}
                    style={{
                      background: inputValue === chip ? "#E8E2D5" : "#FFFFFF",
                      color: "#14181F",
                      border: "1px solid #D6D0C0",
                      borderRadius: "6px",
                      padding: "3px 8px",
                      fontSize: "11px",
                      fontFamily: "'JetBrains Mono', monospace",
                      cursor: "pointer",
                      transition: "all .12s ease",
                    }}
                  >
                    + {chip}
                  </button>
                ))}
              </div>

              {/* Real Working Action CTA Button */}
              <button
                type="button"
                onClick={handleSubmitOrder}
                className="hb"
                style={{
                  height: "44px",
                  borderRadius: "10px",
                  background: isSubmitted ? "#0B5D66" : "var(--accent)",
                  color: isSubmitted ? "#F2EEE5" : "#14181F",
                  border: "1.5px solid #14181F",
                  fontWeight: "700",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: "pointer",
                  width: "100%",
                  boxShadow: "0 2px 0 #14181F",
                  transition: "all .2s ease",
                }}
              >
                {isSubmitted ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>3 ta taklif keldi! (2-qadam)</span>
                  </>
                ) : (
                  <>
                    <span>Buyurtma qoldirish</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ═════════ STEP 2 ═════════ */}
          <div className="step-col" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* Timeline Node & Architectural Connecting Conduit */}
            <div style={{ display: "flex", alignItems: "center", position: "relative", height: "46px" }}>
              <div
                className={activeStep === 2 ? "pulse-node" : ""}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "#101820",
                  border: "2px solid var(--accent)",
                  boxShadow: "0 0 0 3px rgba(255, 90, 31, 0.25), 0 0 16px rgba(255, 90, 31, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 3,
                  flexShrink: 0,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "var(--accent)",
                }}
              >
                02
              </div>

              {/* Architectural Conduit Track from Step 2 to Step 3 */}
              <svg
                className="timeline-track-svg"
                style={{
                  position: "absolute",
                  left: "44px",
                  right: "-40px",
                  top: "14px",
                  width: "calc(100% - 44px + 40px)",
                  height: "22px",
                  zIndex: 2,
                  pointerEvents: "none",
                  overflow: "visible",
                }}
              >
                <defs>
                  <pattern id="rulerTicks2" width="16" height="8" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="4" stroke="rgba(242, 238, 229, 0.18)" strokeWidth="1" />
                    <line x1="8" y1="0" x2="8" y2="7" stroke="rgba(242, 238, 229, 0.35)" strokeWidth="1.2" />
                  </pattern>
                </defs>

                {/* Millimeter blueprint ticks above rail */}
                <rect x="6" y="0" width="calc(100% - 12px)" height="8" fill="url(#rulerTicks2)" />

                {/* Solid base rail */}
                <line x1="6" y1="9" x2="calc(100% - 6px)" y2="9" stroke="rgba(242, 238, 229, 0.15)" strokeWidth="2" />

                {/* Glowing laser progress track */}
                <line
                  x1="6"
                  y1="9"
                  x2="calc(100% - 6px)"
                  y2="9"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  strokeDasharray="6 8"
                  className="timeline-track"
                  strokeLinecap="round"
                />

                {/* Milestone arrow in center */}
                <path
                  d="M calc(50% - 4px) 5 L calc(50% + 2px) 9 L calc(50% - 4px) 13"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Time label badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="m" style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", background: "rgba(255,90,31,0.12)", padding: "3px 8px", borderRadius: "6px", border: "1px solid rgba(255,90,31,0.25)" }}>
                ⚡ 10–30 daqiqa
              </span>
              <span className="m" style={{ fontSize: "11px", color: "#A9B0BA" }}>
                takliflar tushadi
              </span>
            </div>

            {/* Giant stroked step number */}
            <div
              className="d step-num"
              style={{
                fontSize: "110px",
                lineHeight: ".8",
                fontWeight: "800",
                letterSpacing: "-0.05em",
                color: "transparent",
                WebkitTextStroke: activeStep === 2 ? "1.5px var(--accent)" : "1.5px #F2EEE5",
              }}
            >
              2
            </div>

            <div>
              <h3 className="d" style={{ margin: "0", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                Takliflarni solishtiring
              </h3>
              <p style={{ margin: "8px 0 0", fontSize: "16px", lineHeight: "1.5", color: "#A9B0BA" }}>
                Tekshirilgan ustalar narx taklif qiladi.
              </p>
            </div>

            {/* ── CARD 2: Interactive Real Offers (Aziz, Sardor, Bobur etc.) ── */}
            <div
              className="step-card"
              style={{
                background: "#FBFAF6",
                color: "#14181F",
                borderRadius: "16px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                border: activeStep === 2 ? "2px solid #14181F" : "1.5px solid #14181F",
                marginTop: "auto",
                minHeight: "315px",
                justifyContent: "space-between",
                boxSizing: "border-box",
                boxShadow: isSubmitted ? "0 0 20px rgba(255, 90, 31, 0.4), 5px 5px 0 var(--accent)" : "5px 5px 0 var(--accent)",
                gap: "12px",
                transition: "all .3s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong style={{ fontSize: "16px" }}>Ustalar taklifi</strong>
                <span className="m" style={{ fontSize: "11px", fontWeight: "700", color: "#0B5D66", background: "#D3E6E3", padding: "3px 10px", borderRadius: "999px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0B5D66" }} />
                  3 TA KELDI
                </span>
              </div>

              {/* Dynamic offers list with real Uzbek specialist names */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {currentCat.offers.map((o) => {
                  const on = selectedOffer === o.key;
                  return (
                    <button
                      key={o.key}
                      type="button"
                      onClick={() => handleSelectOffer(o.key)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "9px 12px",
                        border: on ? "1.5px solid #14181F" : "1.5px solid #D6D0C0",
                        borderRadius: "10px",
                        background: on ? "#D3E6E3" : "#FFFFFF",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        color: "inherit",
                        font: "inherit",
                        transition: "all .15s ease",
                        boxShadow: on ? "0 2px 0 #14181F" : "none",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            background: "#14181F",
                            color: "#F2EEE5",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            fontWeight: "800",
                          }}
                        >
                          {o.initial}
                        </span>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <strong style={{ fontSize: "14px" }}>
                            {o.name} <span style={{ fontWeight: "400", fontSize: "12px", color: "#5A5F69" }}>· {o.role}</span>
                          </strong>
                          <span className="m" style={{ fontSize: "11px", color: on ? "#14181F" : "#5A5F69" }}>
                            {o.rating} {o.badge ? `· ${o.badge}` : `· ${o.reviews}`}
                          </span>
                        </div>
                      </div>
                      <strong className="m" style={{ fontSize: "13px", color: on ? "#14181F" : "#2F3A3D" }}>
                        {o.price}
                      </strong>
                    </button>
                  );
                })}
              </div>

              <span className="m" style={{ fontSize: "11px", color: "#5A5F69", textAlign: "center" }}>
                Tanlash uchun taklif ustiga bosing →
              </span>
            </div>
          </div>

          {/* ═════════ STEP 3 ═════════ */}
          <div className="step-col" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* Timeline Terminal Node */}
            <div style={{ display: "flex", alignItems: "center", position: "relative", height: "46px" }}>
              <div
                className={activeStep === 3 ? "pulse-node" : ""}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "#101820",
                  border: "2px solid var(--accent)",
                  boxShadow: "0 0 0 3px rgba(255, 90, 31, 0.25), 0 0 16px rgba(255, 90, 31, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 3,
                  flexShrink: 0,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "var(--accent)",
                }}
              >
                03
              </div>
            </div>

            {/* Time label badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="m" style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", background: "rgba(255,90,31,0.12)", padding: "3px 8px", borderRadius: "6px", border: "1px solid rgba(255,90,31,0.25)" }}>
                ⚡ Shoshilinch ishda ≈ 2 soat
              </span>
              <span className="m" style={{ fontSize: "11px", color: "#A9B0BA" }}>
                manzilga yetib keladi
              </span>
            </div>

            {/* Giant stroked step number */}
            <div
              className="d step-num"
              style={{
                fontSize: "110px",
                lineHeight: ".8",
                fontWeight: "800",
                letterSpacing: "-0.05em",
                color: "transparent",
                WebkitTextStroke: activeStep === 3 ? "1.5px var(--accent)" : "1.5px #F2EEE5",
              }}
            >
              3
            </div>

            <div>
              <h3 className="d" style={{ margin: "0", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                Ustani tanlang
              </h3>
              <p style={{ margin: "8px 0 0", fontSize: "16px", lineHeight: "1.5", color: "#A9B0BA" }}>
                Narx va sharhga qarab o’zingiz tanlaysiz.
              </p>
            </div>

            {/* ── CARD 3: Selected Usta Confirmation & Telegram Connection ── */}
            <div
              className="step-card"
              style={{
                background: "#FBFAF6",
                color: "#14181F",
                borderRadius: "16px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                border: activeStep === 3 ? "2px solid #14181F" : "1.5px solid #14181F",
                marginTop: "auto",
                minHeight: "315px",
                justifyContent: "space-between",
                boxSizing: "border-box",
                boxShadow: "5px 5px 0 var(--accent)",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong style={{ fontSize: "16px" }}>Tanlangan usta</strong>
                <span className="m" style={{ fontSize: "11px", fontWeight: "700", color: "#0B5D66", background: "#D3E6E3", padding: "3px 10px", borderRadius: "999px" }}>
                  ✓ TASDIQLANDI
                </span>
              </div>

              {/* Selected Usta preview box */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  background: "#FFFFFF",
                  border: "1.5px solid #14181F",
                  borderRadius: "12px",
                  padding: "12px",
                  boxShadow: "0 2px 0 #14181F",
                }}
              >
                <div style={{ position: "relative" }}>
                  <span
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "#14181F",
                      color: "#F2EEE5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "800",
                      fontSize: "17px",
                      flexShrink: 0,
                    }}
                  >
                    {activeOffer.initial}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      right: "-2px",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#0B5D66",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      fontWeight: "800",
                      border: "2px solid #FFFFFF",
                    }}
                  >
                    ✓
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0, gap: "2px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <strong style={{ fontSize: "15px" }}>{activeOffer.name}</strong>
                    <span className="m" style={{ fontSize: "11px", color: "#5A5F69" }}>
                      ({currentCat.name}) · {activeOffer.rating}
                    </span>
                  </div>
                  <span className="m" style={{ fontSize: "13px", color: "#0B5D66", fontWeight: "800" }}>
                    {activeOffer.price} · 2 soatda
                  </span>
                </div>
              </div>

              <div className="m" style={{ fontSize: "11px", color: "#5A5F69", display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0B5D66" }} />
                Hujjat bilan tekshirilgan mutaxassis · 100% bepul aloqa
              </div>

              {/* Direct Telegram Connection Button */}
              <button
                type="button"
                onClick={handleTelegramContact}
                className="hb"
                style={{
                  height: "44px",
                  borderRadius: "10px",
                  background: "#0B5D66",
                  color: "#F2EEE5",
                  border: "1.5px solid #14181F",
                  fontWeight: "700",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: "pointer",
                  width: "100%",
                  boxShadow: "0 2px 0 #14181F",
                  transition: "all .2s ease",
                }}
              >
                {contactFeedback ? (
                  <span>{contactFeedback}</span>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 4 3 11l6 2 2 7 3-4 5 4z" />
                    </svg>
                    <span>Telegram orqali bog’lanish</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}