"use client";

import { useState } from "react";

type FilterCategory = "barchasi" | "santexnik" | "elektrik" | "kafel" | "tamir";

interface SubTask {
  name: string;
  price: number;
}

interface ServiceData {
  id: string;
  category: "santexnik" | "elektrik" | "kafel" | "tamir";
  num: string;
  title: string;
  sub: string;
  unit: string;
  minPrice: number;
  midPrice: number;
  maxPrice: number;
  rangeLeft: number;
  rangeWidth: number;
  subTasks: SubTask[];
  icon: React.ReactNode;
}

const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const SERVICES_DATA: ServiceData[] = [
  {
    id: "santexnik",
    category: "santexnik",
    num: "01",
    title: "Santexnik",
    sub: "Kran, quvur, isitish va kanalizatsiya",
    unit: "dona",
    minPrice: 80000,
    midPrice: 115000,
    maxPrice: 150000,
    rangeLeft: 22,
    rangeWidth: 32,
    subTasks: [
      { name: "Kran / mikser sozlash", price: 80000 },
      { name: "Quvur va sifon montaji", price: 115000 },
      { name: "Isitish va suv tarmog’i", price: 150000 },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />
      </svg>
    ),
  },
  {
    id: "elektrik",
    category: "elektrik",
    num: "02",
    title: "Elektrik",
    sub: "Rozetka, lyustra, shit va sim tortish",
    unit: "dona",
    minPrice: 30000,
    midPrice: 45000,
    maxPrice: 60000,
    rangeLeft: 10,
    rangeWidth: 26,
    subTasks: [
      { name: "Rozetka va viklyuchatel", price: 30000 },
      { name: "Lyustra va bra o’rnatish", price: 45000 },
      { name: "Avtomat va elektr shit", price: 60000 },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
      </svg>
    ),
  },
  {
    id: "kafel",
    category: "kafel",
    num: "03",
    title: "Kafel ustasi",
    sub: "Hammom, oshxona, devor va pol kafeli",
    unit: "m²",
    minPrice: 60000,
    midPrice: 90000,
    maxPrice: 120000,
    rangeLeft: 24,
    rangeWidth: 34,
    subTasks: [
      { name: "Oddiy pol kafeli", price: 60000 },
      { name: "Hammom devor kafeli", price: 90000 },
      { name: "Oshxona fartuk va mozaika", price: 120000 },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="3" width="8" height="8" rx="1" />
        <rect x="3" y="13" width="8" height="8" rx="1" />
        <rect x="13" y="13" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    id: "tom-yopish",
    category: "tamir",
    num: "04",
    title: "Tom yopish",
    sub: "Profnastil, chortoq va gidroizolyatsiya",
    unit: "m²",
    minPrice: 50000,
    midPrice: 80000,
    maxPrice: 110000,
    rangeLeft: 18,
    rangeWidth: 32,
    subTasks: [
      { name: "Tom ta’mirlash va yamoq", price: 50000 },
      { name: "Profnastil va chortoq", price: 80000 },
      { name: "To’liq tom va izolyatsiya", price: 110000 },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12 12 4l9 8M6 10v10h12V10" />
      </svg>
    ),
  },
  {
    id: "pardozchi",
    category: "tamir",
    num: "05",
    title: "Pardozchi",
    sub: "Shpaklyovka, bo’yoq, gipsokarton",
    unit: "m²",
    minPrice: 25000,
    midPrice: 38000,
    maxPrice: 50000,
    rangeLeft: 8,
    rangeWidth: 26,
    subTasks: [
      { name: "Devor bo’yash (emulsiya)", price: 25000 },
      { name: "Shpaklyovka (2 qavat)", price: 38000 },
      { name: "Gipsokarton va tekislash", price: 50000 },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="15" height="6" rx="1" />
        <path d="M18 6h3v6H11v3" />
        <rect x="9" y="15" width="4" height="6" rx="1" />
      </svg>
    ),
  },
  {
    id: "eshik-deraza",
    category: "tamir",
    num: "06",
    title: "Eshik va deraza",
    sub: "O’rnatish, qulf sozlash, plastmassa",
    unit: "dona",
    minPrice: 150000,
    midPrice: 220000,
    maxPrice: 300000,
    rangeLeft: 46,
    rangeWidth: 40,
    subTasks: [
      { name: "Qulf va tutqich sozlash", price: 150000 },
      { name: "MDF / Yog’och eshik montaj", price: 220000 },
      { name: "Plastik deraza o’rnatish", price: 300000 },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="1" />
        <circle cx="15" cy="12" r="1.5" fill="#14181F" />
      </svg>
    ),
  },
];

function InteractivePriceRuler({
  left,
  width,
  activeTier,
  onSelectTier,
}: {
  left: number;
  width: number;
  activeTier: 0 | 1 | 2;
  onSelectTier: (tier: 0 | 1 | 2) => void;
}) {
  const ticks = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300];
  
  // Calculate dynamic bar position based on active tier
  const tierWidths = [width * 0.6, width, width * 1.35];
  const currentWidth = tierWidths[activeTier] ?? width;
  const barLeft = (300 * left) / 100;
  const barWidth = Math.min(290 - barLeft, (300 * currentWidth) / 100);

  return (
    <div style={{ position: "relative" }}>
      <svg
        width="100%"
        height="26"
        viewBox="0 0 300 26"
        preserveAspectRatio="none"
        style={{ overflow: "visible", display: "block", cursor: "pointer" }}
      >
        {/* Precision ruler baseline */}
        <line x1="0" y1="13" x2="300" y2="13" stroke="#14181F" strokeWidth="1.5" strokeOpacity="0.25" strokeLinecap="round" />
        
        {/* Tick marks */}
        {ticks.map((x, i) => {
          const isMajor = i % 3 === 0;
          const h = isMajor ? 10 : 5;
          return (
            <line
              key={i}
              x1={x}
              y1={13 - h / 2}
              x2={x}
              y2={13 + h / 2}
              stroke="#14181F"
              strokeWidth={isMajor ? 1.4 : 1}
              strokeOpacity={isMajor ? 0.45 : 0.25}
            />
          );
        })}

        {/* Dynamic price indicator bar */}
        <rect
          className="service-ruler-bar"
          x={barLeft}
          y="4"
          width={barWidth}
          height="18"
          rx="4"
          fill="var(--accent)"
          stroke="#14181F"
          strokeWidth="1.5"
          style={{ transition: "all .25s cubic-bezier(.16,1,.3,1)" }}
        />

        {/* Grip dots */}
        <circle cx={barLeft + barWidth / 2 - 4} cy="13" r="1.8" fill="#14181F" />
        <circle cx={barLeft + barWidth / 2 + 4} cy="13" r="1.8" fill="#14181F" />
      </svg>

      {/* 3 Interactive Tier Clickers */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
        {(["Kichik ish", "O’rtacha", "Katta montaj"] as const).map((label, idx) => {
          const on = activeTier === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectTier(idx as 0 | 1 | 2);
              }}
              style={{
                background: on ? "#14181F" : "transparent",
                color: on ? "#F2EEE5" : "#5A5F69",
                border: "none",
                borderRadius: "4px",
                padding: "2px 6px",
                fontSize: "10px",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: on ? "700" : "500",
                cursor: "pointer",
                transition: "all .15s ease",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Xizmatlar() {
  const [filter, setFilter] = useState<FilterCategory>("barchasi");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("santexnik");
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<Record<string, number>>({
    santexnik: 0,
    elektrik: 0,
    kafel: 0,
    "tom-yopish": 0,
    pardozchi: 0,
    "eshik-deraza": 0,
  });
  const [quantities, setQuantities] = useState<Record<string, number>>({
    santexnik: 1,
    elektrik: 1,
    kafel: 15,
    "tom-yopish": 25,
    pardozchi: 30,
    "eshik-deraza": 1,
  });
  const [activeTiers, setActiveTiers] = useState<Record<string, 0 | 1 | 2>>({
    santexnik: 1,
    elektrik: 1,
    kafel: 1,
    "tom-yopish": 1,
    pardozchi: 1,
    "eshik-deraza": 1,
  });

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (filter === "barchasi") return true;
    return s.category === filter;
  });

  const handleCardClick = (id: string) => {
    setSelectedServiceId(id);
  };

  const handleSelectSubTask = (serviceId: string, idx: number, tier: 0 | 1 | 2) => {
    setSelectedTaskIndex((prev) => ({ ...prev, [serviceId]: idx }));
    setActiveTiers((prev) => ({ ...prev, [serviceId]: tier }));
  };

  const handleQtyChange = (serviceId: string, delta: number) => {
    setQuantities((prev) => {
      const cur = prev[serviceId] ?? 1;
      return { ...prev, [serviceId]: Math.max(1, cur + delta) };
    });
  };

  const handleTransferToOrder = (service: ServiceData) => {
    // Scroll to QandayIshlaydi section
    const target = document.getElementById("qanday-ishlaydi");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // Determine category key
    const catKey = service.id === "santexnik" ? "santexnik" : service.id === "elektrik" ? "elektrik" : "kafel";
    const taskIdx = selectedTaskIndex[service.id] ?? 0;
    const task = service.subTasks[taskIdx];
    const qty = quantities[service.id] ?? 1;
    const taskText = `${task.name} (${qty} ${service.unit})`;

    // Dispatch event to QandayIshlaydi
    window.dispatchEvent(
      new CustomEvent("tarz:select-service", {
        detail: {
          category: catKey,
          text: taskText,
        },
      })
    );
  };

  return (
    <section id="xizmatlar" style={{ padding: "clamp(48px, 8vw, 96px) 0 clamp(40px, 7vw, 88px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: "clamp(24px, 4vw, 40px)" }}>
        
        {/* Section Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "680px" }}>
            <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px", color: "#14181F" }}>
              <span style={{ width: "14px", height: "2px", background: "#14181F" }} />
              01 · Xizmatlar
            </span>
            <h2 className="d" style={{ margin: "0", fontSize: "clamp(32px, 7vw, 64px)", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "800" }}>
              Qaysi usta kerak?
            </h2>
            <p style={{ margin: "0", fontSize: "clamp(16px, 2.5vw, 19px)", lineHeight: "1.5", color: "#5A5F69" }}>
              Ish turini tanlang. Chizg’ichni bosib yoki pastdagi ishlarni tanlab taxminiy narxni hisoblang.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", overflowX: "auto", maxWidth: "100%", paddingBottom: "4px" }}>
            {[
              {
                key: "barchasi",
                label: "Barchasi (6)",
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                ),
              },
              {
                key: "santexnik",
                label: "Santexnika",
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />
                  </svg>
                ),
              },
              {
                key: "elektrik",
                label: "Elektr",
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
                  </svg>
                ),
              },
              {
                key: "kafel",
                label: "Kafel",
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                ),
              },
              {
                key: "tamir",
                label: "Ta’mirlash",
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12 12 4l9 8M6 10v10h12V10" />
                  </svg>
                ),
              },
            ].map((tab) => {
              const active = filter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setFilter(tab.key as FilterCategory)}
                  style={{
                    background: active ? "#14181F" : "#FBFAF6",
                    color: active ? "#F2EEE5" : "#14181F",
                    border: "1.5px solid #14181F",
                    borderRadius: "999px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: "700",
                    fontFamily: "'JetBrains Mono', monospace",
                    cursor: "pointer",
                    transition: "all .15s ease",
                    boxShadow: active ? "0 2px 0 var(--accent)" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center" }}>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 6 Real Interactive Service Cards Grid ── */}
        <div className="responsive-grid-3">
          {filteredServices.map((s) => {
            const isSelected = selectedServiceId === s.id;
            const currentTier = activeTiers[s.id] ?? 1;
            const currentTaskIdx = selectedTaskIndex[s.id] ?? 0;
            const currentTask = s.subTasks[currentTaskIdx];
            const qty = quantities[s.id] ?? 1;
            const calculatedTotal = currentTask.price * qty;

            return (
              <div
                key={s.id}
                onClick={() => handleCardClick(s.id)}
                className="service-card"
                style={{
                  cursor: "pointer",
                  borderColor: isSelected ? "#14181F" : "#14181F",
                  boxShadow: isSelected
                    ? "6px 6px 0 var(--accent), 0 0 16px rgba(255, 90, 31, 0.2)"
                    : "4px 4px 0 #14181F",
                  background: isSelected ? "#FFFFFF" : "#FBFAF6",
                  position: "relative",
                  gap: "16px",
                }}
              >
                {/* Top bar: Number, Icon, and Active Selection Badge */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className="m" style={{ fontSize: "13px", fontWeight: "700", color: "#5A5F69" }}>
                      {s.num}
                    </span>
                    {isSelected && (
                      <span className="m" style={{ fontSize: "10px", fontWeight: "800", color: "#0B5D66", background: "#D3E6E3", padding: "2px 8px", borderRadius: "999px" }}>
                        ✓ TANLANDI
                      </span>
                    )}
                  </div>
                  <div className="service-icon" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {s.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <div className="d" style={{ fontSize: "30px", fontWeight: "800", letterSpacing: "-0.03em", color: "#14181F" }}>
                    {s.title}
                  </div>
                  <div style={{ fontSize: "14px", color: "#5A5F69", marginTop: "2px" }}>
                    {s.sub}
                  </div>
                </div>

                {/* Interactive Dynamic Price Ruler */}
                <div>
                  <InteractivePriceRuler
                    left={s.rangeLeft}
                    width={s.rangeWidth}
                    activeTier={currentTier}
                    onSelectTier={(tier) => {
                      setActiveTiers((prev) => ({ ...prev, [s.id]: tier }));
                      setSelectedTaskIndex((prev) => ({ ...prev, [s.id]: tier }));
                    }}
                  />
                </div>

                {/* Sub-services clickable chips */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span className="m" style={{ fontSize: "11px", fontWeight: "700", color: "#5A5F69", textTransform: "uppercase", letterSpacing: ".06em" }}>
                    Mashhur ishlar:
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    {s.subTasks.map((task, tIdx) => {
                      const on = currentTaskIdx === tIdx;
                      return (
                        <button
                          key={tIdx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectSubTask(s.id, tIdx, tIdx as 0 | 1 | 2);
                          }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "6px 10px",
                            borderRadius: "8px",
                            border: on ? "1.5px solid #14181F" : "1px solid #E2DCCF",
                            background: on ? "#D3E6E3" : "#FBFAF6",
                            fontSize: "12px",
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "all .12s ease",
                          }}
                        >
                          <span style={{ fontWeight: on ? "700" : "500", color: "#14181F" }}>
                            {on ? "● " : "○ "} {task.name}
                          </span>
                          <strong className="m" style={{ fontSize: "11px", color: on ? "#0B5D66" : "#5A5F69" }}>
                            {fmt(task.price)} so’m
                          </strong>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quantity and Dynamic Price Calculator row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "#F5F1E8",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    border: "1px solid #E2DCCF",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className="m" style={{ fontSize: "11px", color: "#5A5F69" }}>Hajm:</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQtyChange(s.id, -1);
                      }}
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "6px",
                        border: "1px solid #14181F",
                        background: "#FFFFFF",
                        cursor: "pointer",
                        fontWeight: "700",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      -
                    </button>
                    <span className="m" style={{ fontSize: "13px", fontWeight: "700", minWidth: "32px", textAlign: "center" }}>
                      {qty} {s.unit}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQtyChange(s.id, 1);
                      }}
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "6px",
                        border: "1px solid #14181F",
                        background: "#FFFFFF",
                        cursor: "pointer",
                        fontWeight: "700",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* Calculated sum */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    <span className="m" style={{ fontSize: "10px", color: "#5A5F69" }}>Taxminiy jami:</span>
                    <strong className="m" style={{ fontSize: "14px", color: "#0B5D66", fontWeight: "800" }}>
                      {fmt(calculatedTotal)} so’m
                    </strong>
                  </div>
                </div>

                {/* Direct Action: Transfer to 2-Hour Order Flow */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTransferToOrder(s);
                  }}
                  className="hb"
                  style={{
                    height: "42px",
                    borderRadius: "10px",
                    background: isSelected ? "var(--accent)" : "#14181F",
                    color: isSelected ? "#14181F" : "#F2EEE5",
                    border: "1.5px solid #14181F",
                    fontWeight: "700",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    cursor: "pointer",
                    width: "100%",
                    boxShadow: "0 2px 0 #14181F",
                    transition: "all .15s ease",
                  }}
                >
                  <span>2 soatda usta chaqirish</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}