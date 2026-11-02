"use client";

import Link from "next/link";
import { useState } from "react";

interface SampleOrder {
  category: string;
  district: string;
  task: string;
  budgetHint: string;
  defaultPrice: string;
  quickPrices: string[];
}

const SAMPLE_ORDERS: SampleOrder[] = [
  {
    category: "Santexnik",
    district: "Chilonzor",
    task: "Kran almashtirish, 1 dona",
    budgetHint: "80 000 — 120 000 so’m",
    defaultPrice: "95 000",
    quickPrices: ["85 000", "95 000", "110 000"],
  },
  {
    category: "Elektrik",
    district: "Yunusobod",
    task: "Lyustra montaj va 2 ta rozetka",
    budgetHint: "40 000 — 70 000 so’m",
    defaultPrice: "50 000",
    quickPrices: ["45 000", "50 000", "65 000"],
  },
  {
    category: "Kafel ustasi",
    district: "Mirzo Ulug’bek",
    task: "Oshxona fartuk kafeli, 8 m²",
    budgetHint: "80 000 — 110 000 so’m/m²",
    defaultPrice: "90 000",
    quickPrices: ["80 000", "90 000", "100 000"],
  },
];

// Format number with spaces
function formatSum(val: string): string {
  const digits = val.replace(/\D/g, "");
  if (!digits) return "";
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function UstalarUchun() {
  const [orderIdx, setOrderIdx] = useState<number>(0);
  const [priceInput, setPriceInput] = useState<string>("95 000");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const currentOrder = SAMPLE_ORDERS[orderIdx];

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setPriceInput(formatSum(raw));
    setIsSubmitted(false);
    setFeedbackMsg(null);
  };

  const handleQuickPrice = (price: string) => {
    setPriceInput(price);
    setIsSubmitted(false);
    setFeedbackMsg(null);
  };

  const handleSwitchOrder = (idx: number) => {
    setOrderIdx(idx);
    setPriceInput(SAMPLE_ORDERS[idx].defaultPrice);
    setIsSubmitted(false);
    setFeedbackMsg(null);
  };

  const handleSubmitOffer = () => {
    if (!priceInput.trim()) {
      setFeedbackMsg("Iltimos, taklif narxini kiriting");
      return;
    }
    setIsSubmitted(true);
    setFeedbackMsg(`✓ Taklifingiz ${currentOrder.district}dagi mijozga yuborildi!`);
  };

  const handleResetOffer = () => {
    setIsSubmitted(false);
    setFeedbackMsg(null);
  };

  return (
    <section style={{ padding: "clamp(48px, 8vw, 96px) 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)" }}>
        <div style={{ background: "#0B5D66", color: "#F2EEE5", borderRadius: "24px", padding: "clamp(24px, 5vw, 64px)", display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 56px)", alignItems: "center" }}>
          
          {/* Left Column: Benefits */}
          <div style={{ flex: "1 1 440px", minWidth: "0", display: "flex", flexDirection: "column", gap: "26px", alignItems: "flex-start" }}>
            <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px", color: "#CFE3E1" }}>
              <span style={{ width: "14px", height: "2px", background: "#CFE3E1" }} />
              05 · Ustalar uchun
            </span>
            
            <h2 className="d" style={{ margin: "0", fontSize: "clamp(32px, 6vw, 60px)", lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "800" }}>
              Mijoz qidirmang. Buyurtmalar o’zi kelsin.
            </h2>
            
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.5", color: "#CFE3E1", maxWidth: "500px" }}>
              Tarz’da bepul ro’yxatdan o’ting va Toshkent bo’yicha tayyor buyurtmalarga o’z narxingizni taklif qiling.
            </p>
            
            <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "17px", fontWeight: "600" }}>
              <li style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                <span className="m" style={{ fontSize: "13px", color: "var(--accent)", fontWeight: "700" }}>
                  01
                </span>
                Mijozlar o’zi topadi
              </li>
              <li style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                <span className="m" style={{ fontSize: "13px", color: "var(--accent)", fontWeight: "700" }}>
                  02
                </span>
                Narxni o’zingiz belgilaysiz
              </li>
              <li style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                <span className="m" style={{ fontSize: "13px", color: "var(--accent)", fontWeight: "700" }}>
                  03
                </span>
                Hujjat bilan tasdiqlangan obro’
              </li>
            </ul>

            <Link href="/ustalar-uchun" className="btn" style={{ background: "var(--accent)", color: "#14181F" }}>
              Usta bo’lib qo’shilish
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          {/* Right Column: Animated & Truly Interactive Work Ticket Card */}
          <div
            className="ticket-anim"
            style={{
              flex: "0 1 420px",
              width: "100%",
              maxWidth: "420px",
              minWidth: "0",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              filter: "drop-shadow(0 18px 28px rgba(0,0,0,.35))",
            }}
          >
            {/* Top part of ticket */}
            <div
              style={{
                background: "#F2EEE5",
                color: "#14181F",
                borderRadius: "16px 16px 0 0",
                padding: "26px 26px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                position: "relative",
              }}
            >
              {/* Live badge & Order switcher pills */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                <span className="m" style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".08em", textTransform: "uppercase", color: "#0B5D66", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span className="live-radar-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)" }} />
                  Yangi buyurtma · Jonli
                </span>

                {/* Sample order switchers */}
                <div style={{ display: "flex", gap: "4px" }}>
                  {SAMPLE_ORDERS.map((ord, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSwitchOrder(i)}
                      style={{
                        background: orderIdx === i ? "#14181F" : "#FFFFFF",
                        color: orderIdx === i ? "#F2EEE5" : "#14181F",
                        border: "1px solid #14181F",
                        borderRadius: "999px",
                        padding: "2px 8px",
                        fontSize: "11px",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: "700",
                        cursor: "pointer",
                        transition: "all .15s ease",
                      }}
                      title={ord.category}
                    >
                      0{i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title & Location */}
              <div>
                <div className="d" style={{ fontSize: "32px", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1.05" }}>
                  {currentOrder.category}
                  <br />
                  <span style={{ color: "var(--accent)" }}>{currentOrder.district}</span>
                </div>
                <div style={{ fontSize: "15px", color: "#5A5F69", marginTop: "6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span>{currentOrder.task}</span>
                </div>
              </div>

              {/* Budget indication */}
              <div className="m" style={{ fontSize: "11px", color: "#5A5F69", background: "#E8E2D5", padding: "4px 8px", borderRadius: "6px", display: "inline-block" }}>
                Mijoz byudjeti: <strong>{currentOrder.budgetHint}</strong>
              </div>

              {/* Stamped Ink Seal if submitted */}
              {isSubmitted && (
                <div
                  className="stamp-anim"
                  style={{
                    position: "absolute",
                    top: "40px",
                    right: "20px",
                    border: "3px solid #0B5D66",
                    color: "#0B5D66",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    fontWeight: "900",
                    fontSize: "14px",
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    background: "rgba(211, 230, 227, 0.85)",
                    pointerEvents: "none",
                  }}
                >
                  ✓ YUBORILDI
                </div>
              )}
            </div>

            {/* Perforated ticket divider with semi-circle cutouts */}
            <div style={{ position: "relative", height: "0", borderTop: "2px dashed #14181F", background: "#F2EEE5" }}>
              <span style={{ position: "absolute", left: "-14px", top: "-15px", width: "28px", height: "28px", borderRadius: "50%", background: "#0B5D66" }} />
              <span style={{ position: "absolute", right: "-14px", top: "-15px", width: "28px", height: "28px", borderRadius: "50%", background: "#0B5D66" }} />
            </div>

            {/* Bottom part of ticket: Truly Functional & Editable So'm Input */}
            <div
              style={{
                background: "#F2EEE5",
                color: "#14181F",
                borderRadius: "0 0 16px 16px",
                padding: "22px 26px 26px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="m" style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".08em", textTransform: "uppercase", color: "#5A5F69" }}>
                  Sizning narxingiz
                </span>
                <span className="m" style={{ fontSize: "11px", color: "var(--accent)", fontWeight: "600" }}>
                  raqam yozing:
                </span>
              </div>

              {/* REAL WORKING EDITABLE SO'M INPUT */}
              <div
                style={{
                  height: "54px",
                  border: "2px solid #14181F",
                  borderRadius: "10px",
                  background: "#FBFAF6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 14px",
                  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.06)",
                  position: "relative",
                }}
              >
                <input
                  type="text"
                  value={priceInput}
                  onChange={handlePriceChange}
                  placeholder="0"
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "#14181F",
                    width: "100%",
                    letterSpacing: "-0.02em",
                  }}
                />
                
                <span className="m" style={{ fontSize: "14px", fontWeight: "700", color: "#5A5F69", marginLeft: "8px", pointerEvents: "none" }}>
                  so’m
                </span>
              </div>

              {/* Quick suggestion price chips */}
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <span className="m" style={{ fontSize: "10px", color: "#5A5F69" }}>Tezkor:</span>
                {currentOrder.quickPrices.map((qp) => (
                  <button
                    key={qp}
                    type="button"
                    onClick={() => handleQuickPrice(qp)}
                    style={{
                      background: priceInput === qp ? "#14181F" : "#FFFFFF",
                      color: priceInput === qp ? "#F2EEE5" : "#14181F",
                      border: "1px solid #14181F",
                      borderRadius: "6px",
                      padding: "2px 8px",
                      fontSize: "11px",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "all .12s ease",
                    }}
                  >
                    {qp}
                  </button>
                ))}
              </div>

              {/* Feedback toast message */}
              {feedbackMsg && (
                <div
                  className="m"
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: isSubmitted ? "#0B5D66" : "var(--accent)",
                    background: isSubmitted ? "#D3E6E3" : "#FEECE6",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    border: isSubmitted ? "1px solid #0B5D66" : "1px solid var(--accent)",
                  }}
                >
                  {feedbackMsg}
                </div>
              )}

              {/* Action Submit CTA Button */}
              {isSubmitted ? (
                <button
                  type="button"
                  onClick={handleResetOffer}
                  className="hb"
                  style={{
                    height: "54px",
                    borderRadius: "10px",
                    background: "#0B5D66",
                    color: "#F2EEE5",
                    border: "1.5px solid #14181F",
                    fontWeight: "700",
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    cursor: "pointer",
                    width: "100%",
                    boxShadow: "0 2px 0 #14181F",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Qabul qilindi · Yana taklif berish</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmitOffer}
                  className="hb"
                  style={{
                    height: "54px",
                    borderRadius: "10px",
                    background: "#14181F",
                    color: "#F2EEE5",
                    border: "1.5px solid #14181F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "16px",
                    cursor: "pointer",
                    boxShadow: "0 2px 0 var(--accent)",
                    transition: "all .15s ease",
                  }}
                >
                  Taklif yuborish
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}