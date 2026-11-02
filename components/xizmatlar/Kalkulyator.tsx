"use client";

import Link from "next/link";
import { useState, Fragment } from "react";

const S = [
  { name: "Santexnik", unit: "dona", min: 80000, max: 150000 },
  { name: "Elektrik", unit: "dona", min: 30000, max: 60000 },
  { name: "Kafel ustasi", unit: "m2", min: 60000, max: 120000 },
  { name: "Tom yopish", unit: "m2", min: 50000, max: 110000 },
  { name: "Pardozchi", unit: "m2", min: 25000, max: 50000 },
  { name: "Eshik va deraza", unit: "dona", min: 150000, max: 300000 },
];
const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export default function Kalkulyator() {
  const [svc, setSvc] = useState(0);
  const [q, setQ] = useState(20);
  const cur = S[svc];
  const on = { height: "46px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #14181F", background: "var(--accent)", color: "#14181F", font: "700 15px Inter Tight,sans-serif" };
  const off = { height: "46px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #14181F", background: "#FBFAF6", color: "#14181F", font: "600 15px Inter Tight,sans-serif" };
  const pills = S.map((s, i) => ({ name: s.name, style: i === svc ? on : off, pick: () => setSvc(i) }));
  const unit = cur.unit;
  const qty = String(q);
  const inc = () => setQ(Math.min(999, q + 1));
  const dec = () => setQ(Math.max(1, q - 1));
  const totalMin = fmt(cur.min * q);
  const totalMax = fmt(cur.max * q);
  const perUnit = "1 " + cur.unit + " uchun " + fmt(cur.min) + "–" + fmt(cur.max) + " so’m. Namunaviy hisob.";
  return (
    <section style={{ background: "#101820", color: "#F2EEE5", padding: "clamp(48px, 8vw, 96px) 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", gap: "clamp(32px, 6vw, 72px)", alignItems: "center" }}>
        <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px", color: "var(--accent)" }}>
            <span style={{ width: "14px", height: "2px", background: "var(--accent)" }} />
            Narx kalkulyatori
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(32px, 6vw, 60px)", lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Ish qancha turishini oldindan bilib oling
          </h2>
          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.5", color: "#A9B0BA", maxWidth: "440px" }}>
            Namunaviy hisob-kitob. Aniq narxni tekshirilgan ustalar buyurtmangizga qarab taklif qiladi.
          </p>
        </div>
        <div style={{ flex: "1 1 540px", minWidth: "0", background: "#F2EEE5", color: "#14181F", borderRadius: "16px", padding: "clamp(20px, 4vw, 34px)", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span className="m" style={{ fontSize: "12px", fontWeight: "500", letterSpacing: ".1em", textTransform: "uppercase", color: "#5A5F69" }}>
              1 · Xizmat turi
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {pills.map((p, i) => (
                <Fragment key={i}>
                  <button type="button" className="pill" onClick={p.pick} style={p.style}>
                    {p.name}
                  </button>
                </Fragment>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span className="m" style={{ fontSize: "12px", fontWeight: "500", letterSpacing: ".1em", textTransform: "uppercase", color: "#5A5F69" }}>
              2 · Hajm (
              {unit}
              )
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <button type="button" aria-label="Kamaytirish" onClick={dec} style={{ width: "52px", height: "52px", borderRadius: "10px", border: "1.5px solid #14181F", background: "#FBFAF6", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14" />
                </svg>
              </button>
              <div className="d" style={{ minWidth: "120px", height: "52px", borderRadius: "10px", border: "1.5px solid #14181F", background: "#FBFAF6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px", fontWeight: "700" }} aria-live="polite">
                {qty}
              </div>
              <button type="button" aria-label="Ko’paytirish" onClick={inc} style={{ width: "52px", height: "52px", borderRadius: "10px", border: "1.5px solid #14181F", background: "#FBFAF6", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              <span className="m" style={{ fontSize: "14px", color: "#5A5F69" }}>
                {unit}
              </span>
            </div>
          </div>
          <div style={{ borderTop: "1.5px dashed #14181F", paddingTop: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span className="m" style={{ fontSize: "12px", fontWeight: "500", letterSpacing: ".1em", textTransform: "uppercase", color: "#5A5F69" }}>
              Taxminiy narx
            </span>
            <div className="d" style={{ fontSize: "clamp(28px, 6vw, 52px)", fontWeight: "800", letterSpacing: "-0.04em", lineHeight: "1" }}>
              {totalMin}
              {" — "}
              {totalMax}
              {" "}
              <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "0" }}>
                so’m
              </span>
            </div>
            <span className="m" style={{ fontSize: "12px", color: "#5A5F69" }}>
              {perUnit}
            </span>
          </div>
          <Link href="/" className="btn" style={{ background: "var(--accent)", color: "#14181F" }}>
            Aniq narxni bilish
          </Link>
        </div>
      </div>
    </section>
  );
}
