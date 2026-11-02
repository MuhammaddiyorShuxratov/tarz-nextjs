"use client";

import { useState } from "react";

type UstaType = "santexnik" | "elektrik" | "kafel" | "tom";

interface UstaOffer {
  id: string;
  letter: string;
  name: string;
  rating: string;
  reviews: string;
  badge: string;
  price: string;
}

const CATEGORY_DATA: Record<
  UstaType,
  {
    name: string;
    defaultTask: string;
    chips: string[];
    offers: UstaOffer[];
  }
> = {
  santexnik: {
    name: "Santexnik",
    defaultTask: "Kran almashtirish va quvur sozlash",
    chips: ["Kran almashtirish", "Quvur tozalash", "Sifon sozlash", "Isitish montaji"],
    offers: [
      { id: "a", letter: "A", name: "Aziz", rating: "4,6 ★", reviews: "tekshirilgan", badge: "hujjatli", price: "120 000 so’m" },
      { id: "b", letter: "S", name: "Sardor", rating: "4,8 ★", reviews: "eng ma’qul", badge: "yangi taklif", price: "95 000 so’m" },
      { id: "c", letter: "B", name: "Bobur", rating: "4,7 ★", reviews: "tekshirilgan", badge: "ishonchli", price: "110 000 so’m" },
    ],
  },
  elektrik: {
    name: "Elektrik",
    defaultTask: "Rozetka o’rnatish va lyustra montaj",
    chips: ["Rozetka almashtirish", "Lyustra osish", "Avtomat kuygan", "Sim tortish"],
    offers: [
      { id: "a", letter: "F", name: "Farhod", rating: "4,6 ★", reviews: "tekshirilgan", badge: "hujjatli", price: "55 000 so’m" },
      { id: "b", letter: "J", name: "Jamshid", rating: "4,8 ★", reviews: "eng ma’qul", badge: "yangi taklif", price: "40 000 so’m" },
      { id: "c", letter: "S", name: "Sherzod", rating: "4,7 ★", reviews: "tekshirilgan", badge: "ishonchli", price: "50 000 so’m" },
    ],
  },
  kafel: {
    name: "Kafel",
    defaultTask: "Hammom va oshxona kafel yotqizish",
    chips: ["Hammom kafeli", "Oshxona fartuk", "Pol kafeli", "Mozaika"],
    offers: [
      { id: "a", letter: "A", name: "Alisher", rating: "4,6 ★", reviews: "tekshirilgan", badge: "hujjatli", price: "100 000 so’m/m²" },
      { id: "b", letter: "D", name: "Davron", rating: "4,8 ★", reviews: "eng ma’qul", badge: "yangi taklif", price: "85 000 so’m/m²" },
      { id: "c", letter: "R", name: "Rustam", rating: "4,7 ★", reviews: "tekshirilgan", badge: "ishonchli", price: "90 000 so’m/m²" },
    ],
  },
  tom: {
    name: "Tom",
    defaultTask: "Tom ta’mirlash va profnastil montaj",
    chips: ["Tom ta’mirlash", "Profnastil", "Chortoq", "Gidroizolyatsiya"],
    offers: [
      { id: "a", letter: "S", name: "Sobir", rating: "4,6 ★", reviews: "tekshirilgan", badge: "hujjatli", price: "70 000 so’m/m²" },
      { id: "b", letter: "I", name: "Ilhom", rating: "4,8 ★", reviews: "eng ma’qul", badge: "yangi taklif", price: "55 000 so’m/m²" },
      { id: "c", letter: "O", name: "Otabek", rating: "4,7 ★", reviews: "tekshirilgan", badge: "ishonchli", price: "65 000 so’m/m²" },
    ],
  },
};

const DISTRICTS = [
  "Chilonzor",
  "Yunusobod",
  "Mirzo Ulug’bek",
  "Mirobod",
  "Yakkasaroy",
  "Shayxontohur",
  "Olmazor",
  "Uchtepa",
  "Sergeli",
  "Yashnobod",
];

export default function Qadamlar() {
  const [selectedCat, setSelectedCat] = useState<UstaType>("santexnik");
  const [district, setDistrict] = useState<string>("Chilonzor");
  const [desc, setDesc] = useState<string>("Kran almashtirish va quvur sozlash");
  const [selectedOfferId, setSelectedOfferId] = useState<string>("b");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [contactFeedback, setContactFeedback] = useState<string | null>(null);

  const currentCatData = CATEGORY_DATA[selectedCat];
  const activeOffer = currentCatData.offers.find((o) => o.id === selectedOfferId) ?? currentCatData.offers[1];

  const handleSelectCategory = (cat: UstaType) => {
    setSelectedCat(cat);
    setDesc(CATEGORY_DATA[cat].defaultTask);
    setSubmitted(false);
  };

  const handleSelectChip = (chip: string) => {
    setDesc(chip);
  };

  const handleSeeOffers = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setSubmitted(true);
      // Scroll down to Step 2
      const step2 = document.getElementById("qadam-2");
      if (step2) {
        step2.scrollIntoView({ behavior: "smooth" });
      }
    }, 600);
  };

  const handleSelectOffer = (id: string) => {
    setSelectedOfferId(id);
    const step3 = document.getElementById("qadam-3");
    if (step3) {
      step3.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    setContactFeedback(`${activeOffer.name} usta bilan Telegram orqali bog’lanish ochilmoqda...`);
    setTimeout(() => {
      setContactFeedback(null);
    }, 3500);
  };

  return (
    <section style={{ padding: "clamp(48px, 8vw, 80px) 0 40px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: "clamp(48px, 8vw, 80px)" }}>
        
        {/* ══════════════ QADAM 1 ══════════════ */}
        <div id="qadam-1" style={{ display: "flex", flexWrap: "wrap", gap: "clamp(28px, 5vw, 48px)", alignItems: "center" }}>
          
          {/* Text Description */}
          <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span className="m" style={{ fontSize: "13px", letterSpacing: ".1em", textTransform: "uppercase", color: "#0B5D66", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0B5D66" }} />
              Qadam 1 · 2 daqiqa
            </span>
            <div className="d" style={{ fontSize: "clamp(80px, 12vw, 150px)", lineHeight: ".78", fontWeight: "800", letterSpacing: "-0.06em", color: "transparent", WebkitTextStroke: "2px #14181F" }}>
              1
            </div>
            <h2 className="d" style={{ margin: "0", fontSize: "clamp(32px, 6vw, 48px)", lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "800" }}>
              Buyurtma joylang
            </h2>
            <p style={{ margin: "0", fontSize: "clamp(16px, 2.5vw, 20px)", lineHeight: "1.55", color: "#5A5F69", maxWidth: "480px" }}>
              Ish turini, tumaningizni va qisqa tavsifni yozing. Tekshirilgan ustalar o’z narxini taklif qilishni boshlaydi.
            </p>
          </div>

          {/* Interactive Card from User Screenshot */}
          <div className="gb" style={{ flex: "1 1 440px", minWidth: "0", backgroundColor: "#E8E3D6", border: "1.5px solid #14181F", borderRadius: "16px", padding: "32px 20px", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "100%",
                maxWidth: "360px",
                background: "#FBFAF6",
                border: "1.5px solid #14181F",
                borderRadius: "14px",
                boxShadow: "8px 8px 0 var(--accent)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                boxSizing: "border-box",
                transition: "transform .2s ease, box-shadow .2s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong className="d" style={{ fontSize: "24px", letterSpacing: "-0.02em" }}>
                  Qaysi usta kerak?
                </strong>
                <span className="m" style={{ fontSize: "11px", fontWeight: "700", color: "#0B5D66", background: "#D3E6E3", padding: "3px 8px", borderRadius: "999px" }}>
                  1-BOSQICH
                </span>
              </div>

              {/* Category Pills: Santexnik, Elektrik, Kafel, Tom */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {(["santexnik", "elektrik", "kafel", "tom"] as UstaType[]).map((cat) => {
                  const active = selectedCat === cat;
                  const label = cat === "santexnik" ? "Santexnik" : cat === "elektrik" ? "Elektrik" : cat === "kafel" ? "Kafel" : "Tom";
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => handleSelectCategory(cat)}
                      style={{
                        background: active ? "#14181F" : "#FFFFFF",
                        color: active ? "#F2EEE5" : "#14181F",
                        border: "1.5px solid #14181F",
                        borderRadius: "999px",
                        padding: "7px 14px",
                        fontSize: "12px",
                        fontWeight: "700",
                        fontFamily: "'JetBrains Mono', monospace",
                        cursor: "pointer",
                        transition: "all .15s ease",
                        boxShadow: active ? "0 2px 0 var(--accent)" : "none",
                      }}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Tuman Selector Dropdown / Input */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span className="m" style={{ fontSize: "11px", fontWeight: "700", color: "#5A5F69", textTransform: "uppercase" }}>
                  Tuman
                </span>
                <div style={{ position: "relative" }}>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    style={{
                      width: "100%",
                      height: "44px",
                      border: "1.5px solid #14181F",
                      borderRadius: "8px",
                      padding: "0 12px",
                      fontWeight: "600",
                      fontSize: "15px",
                      background: "#FFFFFF",
                      color: "#14181F",
                      fontFamily: "'Inter Tight', system-ui, sans-serif",
                      outline: "none",
                      cursor: "pointer",
                      boxSizing: "border-box",
                      appearance: "none",
                    }}
                  >
                    {DISTRICTS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#14181F"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ position: "absolute", right: "12px", top: "14px", pointerEvents: "none" }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Real Editable Tavsif (Description) Input */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="m" style={{ fontSize: "11px", fontWeight: "700", color: "#5A5F69", textTransform: "uppercase" }}>
                    Tavsif
                  </span>
                  <span className="m" style={{ fontSize: "10px", color: "#888" }}>
                    o’zgartirish mumkin
                  </span>
                </div>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Qanday ish bajarilishi kerak? Masalan: kranni almashtirish..."
                  rows={2}
                  style={{
                    width: "100%",
                    minHeight: "68px",
                    border: "1.5px solid #14181F",
                    borderRadius: "8px",
                    padding: "10px 12px",
                    fontSize: "14px",
                    fontFamily: "'Inter Tight', system-ui, sans-serif",
                    fontWeight: "500",
                    color: "#14181F",
                    background: "#FFFFFF",
                    outline: "none",
                    resize: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Quick suggestion chips */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {currentCatData.chips.slice(0, 3).map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => handleSelectChip(chip)}
                    style={{
                      background: desc === chip ? "#E8E2D5" : "#FFFFFF",
                      color: "#14181F",
                      border: "1px solid #D6D0C0",
                      borderRadius: "6px",
                      padding: "2px 8px",
                      fontSize: "11px",
                      fontFamily: "'JetBrains Mono', monospace",
                      cursor: "pointer",
                    }}
                  >
                    + {chip}
                  </button>
                ))}
              </div>

              {/* Real Working Action Button: Takliflarni ko'rish */}
              <button
                type="button"
                onClick={handleSeeOffers}
                className="hb"
                style={{
                  height: "48px",
                  borderRadius: "10px",
                  background: submitted ? "#0B5D66" : "var(--accent)",
                  color: submitted ? "#F2EEE5" : "#14181F",
                  border: "1.5px solid #14181F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                  fontSize: "15px",
                  cursor: "pointer",
                  width: "100%",
                  gap: "8px",
                  boxShadow: "0 2px 0 #14181F",
                  transition: "all .15s ease",
                }}
              >
                {isSearching ? (
                  <span>Ustalar qidirilmoqda...</span>
                ) : submitted ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>Takliflar chiqdi (Qadam 2)</span>
                  </>
                ) : (
                  <>
                    <span>Takliflarni ko’rish</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ══════════════ QADAM 2 ══════════════ */}
        <div id="qadam-2" style={{ display: "flex", flexWrap: "wrap-reverse", gap: "48px", alignItems: "center" }}>
          
          {/* Card: 3 ta taklif (Interactive) */}
          <div className="gb" style={{ flex: "1 1 440px", minWidth: "0", backgroundColor: "#E8E3D6", border: "1.5px solid #14181F", borderRadius: "16px", padding: "32px 20px", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "100%",
                maxWidth: "360px",
                background: "#FBFAF6",
                border: "1.5px solid #14181F",
                borderRadius: "14px",
                boxShadow: "8px 8px 0 var(--accent)",
                padding: "22px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong className="d" style={{ fontSize: "22px", letterSpacing: "-0.02em" }}>
                  3 ta taklif keldi
                </strong>
                <span className="m" style={{ fontSize: "11px", fontWeight: "700", color: "#0B5D66", background: "#D3E6E3", padding: "3px 8px", borderRadius: "999px" }}>
                  {district} bo’yicha
                </span>
              </div>

              {/* Dynamic master offers matching category */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {currentCatData.offers.map((o) => {
                  const on = selectedOfferId === o.id;
                  return (
                    <button
                      key={o.id}
                      type="button"
                      onClick={() => handleSelectOffer(o.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 12px",
                        border: on ? "1.5px solid #14181F" : "1px solid #D6D0C0",
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
                      <span
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          background: "#14181F",
                          color: "#F2EEE5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "800",
                          fontSize: "14px",
                          flexShrink: 0,
                        }}
                      >
                        {o.letter}
                      </span>
                      <div style={{ flex: "1", display: "flex", flexDirection: "column", minWidth: 0 }}>
                        <strong style={{ fontSize: "15px" }}>
                          {o.name} · {o.rating}
                        </strong>
                        <span className="m" style={{ fontSize: "11px", color: on ? "#14181F" : "#5A5F69" }}>
                          {o.badge} · {currentCatData.name}
                        </span>
                      </div>
                      <strong className="m" style={{ fontSize: "13px", color: on ? "#14181F" : "#2F3A3D" }}>
                        {o.price}
                      </strong>
                    </button>
                  );
                })}
              </div>

              <div className="m" style={{ fontSize: "11px", color: "#5A5F69", textAlign: "center", paddingTop: "4px" }}>
                Narx · reyting · sharh yonma-yon
              </div>
            </div>
          </div>

          {/* Text Description */}
          <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span className="m" style={{ fontSize: "13px", letterSpacing: ".1em", textTransform: "uppercase", color: "#0B5D66", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0B5D66" }} />
              Qadam 2 · 10–30 daqiqa
            </span>
            <div className="d" style={{ fontSize: "clamp(80px, 12vw, 150px)", lineHeight: ".78", fontWeight: "800", letterSpacing: "-0.06em", color: "transparent", WebkitTextStroke: "2px #14181F" }}>
              2
            </div>
            <h2 className="d" style={{ margin: "0", fontSize: "clamp(32px, 6vw, 48px)", lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "800" }}>
              Takliflarni solishtiring
            </h2>
            <p style={{ margin: "0", fontSize: "clamp(16px, 2.5vw, 20px)", lineHeight: "1.55", color: "#5A5F69", maxWidth: "480px" }}>
              Ustalar o’z narxini taklif qiladi. Narx, reyting va sharhlarni yonma-yon ko’rib, o’zingizga ma’qulini tanlaysiz.
            </p>
          </div>
        </div>

        {/* ══════════════ QADAM 3 ══════════════ */}
        <div id="qadam-3" style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
          
          {/* Text Description */}
          <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span className="m" style={{ fontSize: "13px", letterSpacing: ".1em", textTransform: "uppercase", color: "#0B5D66", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0B5D66" }} />
              Qadam 3 · shoshilinch ishda ≈ 2 soat
            </span>
            <div className="d" style={{ fontSize: "clamp(80px, 12vw, 150px)", lineHeight: ".78", fontWeight: "800", letterSpacing: "-0.06em", color: "transparent", WebkitTextStroke: "2px #14181F" }}>
              3
            </div>
            <h2 className="d" style={{ margin: "0", fontSize: "clamp(32px, 6vw, 48px)", lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "800" }}>
              Ustani tanlang
            </h2>
            <p style={{ margin: "0", fontSize: "clamp(16px, 2.5vw, 20px)", lineHeight: "1.55", color: "#5A5F69", maxWidth: "480px" }}>
              Ma’qul taklifni tanlab, usta bilan to’g’ridan-to’g’ri Telegram’da bog’lanasiz. Ish tugagach, sharh qoldirishingiz mumkin.
            </p>
          </div>

          {/* Card: Usta tanlandi (Interactive) */}
          <div className="gb" style={{ flex: "1 1 440px", minWidth: "0", backgroundColor: "#E8E3D6", border: "1.5px solid #14181F", borderRadius: "16px", padding: "32px 20px", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "100%",
                maxWidth: "360px",
                background: "#FBFAF6",
                border: "1.5px solid #14181F",
                borderRadius: "14px",
                boxShadow: "8px 8px 0 var(--accent)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                alignItems: "center",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              <div style={{ position: "relative" }}>
                <span style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#14181F", color: "#F2EEE5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "24px" }}>
                  {activeOffer.letter}
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    right: "-2px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#0B5D66",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: "800",
                    border: "2px solid #FFFFFF",
                  }}
                >
                  ✓
                </span>
              </div>

              <div>
                <strong className="d" style={{ fontSize: "24px", letterSpacing: "-0.02em" }}>
                  {activeOffer.name} usta tanlandi
                </strong>
                <div className="m" style={{ fontSize: "12px", color: "#0B5D66", fontWeight: "700", marginTop: "4px" }}>
                  ✓ {currentCatData.name} ({district}) · {activeOffer.price}
                </div>
              </div>

              <div className="m" style={{ fontSize: "14px", letterSpacing: "3px", color: "var(--accent)" }}>
                ★★★★★
              </div>

              {contactFeedback && (
                <div className="m" style={{ fontSize: "12px", fontWeight: "700", color: "#0B5D66", background: "#D3E6E3", padding: "6px 12px", borderRadius: "6px", width: "100%" }}>
                  {contactFeedback}
                </div>
              )}

              <button
                type="button"
                onClick={handleContact}
                className="hb"
                style={{
                  height: "48px",
                  width: "100%",
                  borderRadius: "10px",
                  background: "#0B5D66",
                  color: "#F2EEE5",
                  border: "1.5px solid #14181F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                  fontSize: "15px",
                  cursor: "pointer",
                  gap: "8px",
                  boxShadow: "0 2px 0 #14181F",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 4 3 11l6 2 2 7 3-4 5 4z" />
                </svg>
                <span>Telegram orqali bog’lanish</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const step1 = document.getElementById("qadam-1");
                  if (step1) step1.scrollIntoView({ behavior: "smooth" });
                }}
                className="hb"
                style={{
                  height: "44px",
                  width: "100%",
                  boxSizing: "border-box",
                  borderRadius: "10px",
                  border: "1.5px solid #14181F",
                  background: "#FFFFFF",
                  color: "#14181F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Boshqa buyurtma berish
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}