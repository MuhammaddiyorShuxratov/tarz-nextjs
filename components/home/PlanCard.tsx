"use client";

import { useState } from "react";

const ROWS = [
  { key: "a", letter: "A", name: "Aziz", rating: "4,6", sub: "hujjat bilan tekshirilgan", price: "120 000", room: "Oshxona: kafel yotqizish" },
  { key: "b", letter: "S", name: "Sardor", rating: "4,8", sub: "yangi taklif", price: "95 000", room: "Hammom: kran almashtirish" },
  { key: "c", letter: "B", name: "Bobur", rating: "4,7", sub: "hujjat bilan tekshirilgan", price: "110 000", room: "Yotoqxona: rozetka o’rnatish" },
];

const PLANS: Record<string, React.ReactNode> = {
  a: (
    <>
      <defs>
        <pattern id="pg" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#10152B" strokeOpacity=".07" />
        </pattern>
        <pattern id="tile-pat" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#10152B" strokeOpacity=".38" strokeWidth="1" />
          <path d="M0 0l3 3M20 20l-3-3" stroke="var(--accent)" strokeWidth="1" strokeOpacity=".55" />
        </pattern>
      </defs>
      <rect width="520" height="340" fill="url(#pg)" />
      <g stroke="#5F6B88" strokeWidth="1" fill="none">
        <path d="M30 20H490M30 14V26M490 14V26" />
      </g>
      <rect x="224" y="12" width="72" height="16" fill="#FFFFFF" />
      <text x="260" y="24" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#5F6B88">
        4,8 m
      </text>
      <g stroke="#10152B" strokeWidth="9" fill="none" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M205 310H490V40H30V310H145" />
        <path d="M260 40V135M260 185V310" />
      </g>
      <rect x="70" y="33" width="90" height="14" fill="#FFFFFF" />
      <g stroke="#10152B" strokeWidth="1.5">
        <path d="M70 37H160M70 43H160M70 34V46M160 34V46" />
      </g>
      <rect x="330" y="33" width="90" height="14" fill="#FFFFFF" />
      <g stroke="#10152B" strokeWidth="1.5">
        <path d="M330 37H420M330 43H420M330 34V46M420 34V46" />
      </g>
      <g stroke="#10152B" fill="none" strokeWidth="1.5">
        <path d="M310 135A50 50 0 0 1 260 185" strokeDasharray="3 3" />
        <path d="M145 250A60 60 0 0 1 205 310" strokeDasharray="3 3" />
      </g>
      <g stroke="#10152B" strokeWidth="3" strokeLinecap="round">
        <path d="M260 135H310M145 310V250" />
      </g>
      <g stroke="#10152B" strokeWidth="1.5" fill="none">
        <rect x="40" y="58" width="56" height="160" />
        <rect x="40" y="58" width="56" height="42" rx="2" />
        <path d="M88 66V92" strokeWidth="2" strokeLinecap="round" />
        <rect x="44" y="108" width="48" height="38" rx="2" />
        <circle cx="56" cy="118" r="4" /><circle cx="80" cy="118" r="4" />
        <circle cx="56" cy="136" r="4" /><circle cx="80" cy="136" r="4" />
        <rect x="44" y="156" width="48" height="36" rx="2" />
        <circle cx="68" cy="174" r="8" />
        <circle cx="82" cy="164" r="2.5" />
        <rect x="310" y="130" width="116" height="70" rx="6" />
        <rect x="325" y="114" width="32" height="10" rx="2" />
        <rect x="375" y="114" width="32" height="10" rx="2" />
        <rect x="325" y="206" width="32" height="10" rx="2" />
        <rect x="375" y="206" width="32" height="10" rx="2" />
        <rect x="446" y="80" width="34" height="120" rx="3" />
        <path d="M446 140H480" />
      </g>
      <rect x="104" y="58" width="146" height="160" fill="var(--accent)" fillOpacity=".12" />
      <rect x="104" y="58" width="146" height="160" fill="url(#tile-pat)" stroke="#10152B" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M174 138 206 90" stroke="#10152B" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      <circle cx="214" cy="78" r="22" fill="none" stroke="var(--accent)" strokeWidth="2" opacity=".55" />
      <circle cx="214" cy="78" r="14" fill="var(--accent)" stroke="#10152B" strokeWidth="2" />
      <text x="214" y="83" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="700" fill="#10152B">
        1
      </text>
      <rect x="318" y="248" width="164" height="30" rx="6" fill="#10152B" />
      <text x="400" y="268" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" fill="#FFFFFF">
        Kafel yotqizish
      </text>
    </>
  ),
  b: (
    <>
      <defs>
        <pattern id="pg" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#10152B" strokeOpacity=".07" />
        </pattern>
      </defs>
      <rect width="520" height="340" fill="url(#pg)" />
      <g stroke="#5F6B88" strokeWidth="1" fill="none">
        <path d="M30 20H490M30 14V26M490 14V26" />
      </g>
      <rect x="224" y="12" width="72" height="16" fill="#FFFFFF" />
      <text x="260" y="24" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#5F6B88">
        5,2 m
      </text>
      <g stroke="#10152B" strokeWidth="9" fill="none" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M205 310H490V40H30V310H145" />
        <path d="M300 40V135M300 185V225H490" />
      </g>
      <rect x="70" y="33" width="100" height="14" fill="#FFFFFF" />
      <g stroke="#10152B" strokeWidth="1.5">
        <path d="M70 37H170M70 43H170M70 34V46M170 34V46" />
      </g>
      <g stroke="#10152B" fill="none" strokeWidth="1.5">
        <path d="M350 135A50 50 0 0 1 300 185" strokeDasharray="3 3" />
        <path d="M145 250A60 60 0 0 1 205 310" strokeDasharray="3 3" />
      </g>
      <g stroke="#10152B" strokeWidth="3" strokeLinecap="round">
        <path d="M300 135H350M145 310V250" />
      </g>
      <g stroke="#10152B" strokeWidth="1.5" fill="none">
        <rect x="318" y="58" width="60" height="130" rx="10" />
        <rect x="326" y="66" width="44" height="114" rx="8" />
        <rect x="420" y="58" width="52" height="36" rx="4" />
        <circle cx="446" cy="76" r="10" />
        <ellipse cx="446" cy="196" rx="14" ry="18" />
        <rect x="434" y="168" width="24" height="12" rx="2" />
        <rect x="40" y="70" width="32" height="150" />
        <circle cx="56" cy="100" r="7" />
        <circle cx="56" cy="130" r="7" />
        <circle cx="190" cy="180" r="34" />
      </g>
      <path d="M446 76 480 52" stroke="#10152B" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      <circle cx="488" cy="46" r="22" fill="none" stroke="var(--accent)" strokeWidth="2" opacity=".55" />
      <circle cx="488" cy="46" r="14" fill="var(--accent)" stroke="#10152B" strokeWidth="2" />
      <text x="488" y="51" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="700" fill="#10152B">
        1
      </text>
      <rect x="318" y="248" width="164" height="30" rx="6" fill="#10152B" />
      <text x="400" y="268" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" fill="#FFFFFF">
        Kran almashtirish
      </text>
      <path d="M446 94V248" stroke="#10152B" strokeWidth="1" strokeDasharray="2 4" opacity=".0" />
    </>
  ),
  c: (
    <>
      <defs>
        <pattern id="pg" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#10152B" strokeOpacity=".07" />
        </pattern>
      </defs>
      <rect width="520" height="340" fill="url(#pg)" />
      <g stroke="#5F6B88" strokeWidth="1" fill="none">
        <path d="M30 20H490M30 14V26M490 14V26" />
      </g>
      <rect x="224" y="12" width="72" height="16" fill="#FFFFFF" />
      <text x="260" y="24" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#5F6B88">
        4,5 m
      </text>
      <g stroke="#10152B" strokeWidth="9" fill="none" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M205 310H490V40H30V310H145" />
        <path d="M240 40V135M240 185V240H490" />
      </g>
      <rect x="330" y="33" width="90" height="14" fill="#FFFFFF" />
      <g stroke="#10152B" strokeWidth="1.5">
        <path d="M330 37H420M330 43H420M330 34V46M420 34V46" />
      </g>
      <g stroke="#10152B" fill="none" strokeWidth="1.5">
        <path d="M290 135A50 50 0 0 1 240 185" strokeDasharray="3 3" />
        <path d="M145 250A60 60 0 0 1 205 310" strokeDasharray="3 3" />
      </g>
      <g stroke="#10152B" strokeWidth="3" strokeLinecap="round">
        <path d="M240 135H290M145 310V250" />
      </g>
      <g stroke="#10152B" strokeWidth="1.5" fill="none">
        <rect x="40" y="60" width="32" height="150" />
        <path d="M40 135H72" />
        <rect x="66" y="94" width="3" height="14" />
        <rect x="66" y="162" width="3" height="14" />
        <rect x="110" y="60" width="90" height="44" rx="4" />
        <rect x="135" y="68" width="40" height="16" rx="2" />
        <circle cx="155" cy="124" r="12" />
        <rect x="296" y="60" width="130" height="126" rx="6" />
        <rect x="306" y="70" width="48" height="26" rx="4" />
        <rect x="368" y="70" width="48" height="26" rx="4" />
        <path d="M296 122H426M296 130H426" />
        <rect x="262" y="60" width="28" height="28" rx="3" />
        <circle cx="276" cy="74" r="6" />
        <rect x="432" y="60" width="28" height="28" rx="3" />
        <circle cx="446" cy="74" r="6" />
        <circle cx="160" cy="200" r="28" />
      </g>
      <path d="M485 52V200" stroke="var(--accent)" strokeWidth="1.8" strokeDasharray="4 3" fill="none" />
      <rect x="478" y="96" width="10" height="18" rx="2" fill="var(--accent)" stroke="#10152B" strokeWidth="1.5" />
      <circle cx="483" cy="101" r="1.5" fill="#10152B" />
      <circle cx="483" cy="109" r="1.5" fill="#10152B" />
      <path d="M478 105 448 135" stroke="#10152B" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      <circle cx="436" cy="145" r="22" fill="none" stroke="var(--accent)" strokeWidth="2" opacity=".55" />
      <circle cx="436" cy="145" r="14" fill="var(--accent)" stroke="#10152B" strokeWidth="2" />
      <text x="436" y="150" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="700" fill="#10152B">
        1
      </text>
      <rect x="318" y="248" width="164" height="30" rx="6" fill="#10152B" />
      <text x="400" y="268" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" fill="#FFFFFF">
        Rozetka o’rnatish
      </text>
    </>
  ),
};

export default function PlanCard() {
  const [sel, setSel] = useState("b");
  const cur = ROWS.find((r) => r.key === sel) ?? ROWS[1];

  return (
    <div style={{ flex: "0 1 500px", width: "100%", maxWidth: "500px", minWidth: "0", background: "#FFFFFF", border: "1.5px solid #10152B", borderRadius: "14px", boxShadow: "clamp(6px, 2vw, 10px) clamp(6px, 2vw, 10px) 0 var(--accent)", overflow: "hidden" }}>
      <div className="m" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", borderBottom: "1.5px solid #10152B", fontSize: "12px", fontWeight: "500", letterSpacing: ".06em", textTransform: "uppercase" }}>
        <span>Buyurtma · namuna</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2E5BFF" }} />
          3 ta taklif
        </span>
      </div>
      <div style={{ padding: "14px 14px 4px" }}>
        <svg key={sel} className="plan" viewBox="0 0 520 340" width="100%" role="img" aria-label={"Xona rejasi — " + cur.name + ": " + cur.room}>
          {PLANS[sel]}
        </svg>
      </div>
      <div style={{ padding: "4px 14px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {ROWS.map((r) => {
          const on = r.key === sel;
          return (
            <button
              key={r.key}
              type="button"
              className="opt"
              aria-pressed={on}
              onClick={() => setSel(r.key)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "10px 12px",
                border: on ? "1.5px solid #10152B" : "1px solid #E2E8F0",
                borderRadius: "10px",
                background: on ? "#EBF1FF" : "transparent",
                font: "inherit",
                color: "inherit",
                textAlign: "left",
                width: "100%",
                cursor: "pointer",
                outline: "none",
              }}
            >
              <span
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "#10152B",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                  fontSize: "14px",
                  flexShrink: 0,
                }}
              >
                {r.letter}
              </span>
              <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <strong style={{ fontSize: "15px" }}>{r.name} · {r.rating} ★</strong>
                <span className="m" style={{ fontSize: "11px", color: on ? "#10152B" : "#5F6B88" }}>{r.sub}</span>
              </span>
              <strong className="m" style={{ fontSize: "14px" }}>{r.price}</strong>
            </button>
          );
        })}
      </div>
    </div>
  );
}
