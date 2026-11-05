import Link from "next/link";

interface KatalogItem {
  num: string;
  title: string;
  sub: string;
  barLeft: string;
  barWidth: string;
  price: string;
  unit: string;
  href: string;
}

const ITEMS: KatalogItem[] = [
  { num: "01", title: "Santexnik", sub: "Kran, quvur, isitish", barLeft: "25%", barWidth: "21.9%", price: "80 000–150 000", unit: "so’m / dona", href: "/xizmatlar/santexnik" },
  { num: "02", title: "Elektrik", sub: "Rozetka, sim, yoritish", barLeft: "9.4%", barWidth: "9.4%", price: "30 000–60 000", unit: "so’m / dona", href: "/xizmatlar" },
  { num: "03", title: "Kafel ustasi", sub: "Devor va pol kafeli", barLeft: "18.75%", barWidth: "18.75%", price: "60 000–120 000", unit: "so’m / m2", href: "/xizmatlar" },
  { num: "04", title: "Tom yopish", sub: "Tom yopish, ta’mirlash", barLeft: "15.6%", barWidth: "18.75%", price: "50 000–110 000", unit: "so’m / m2", href: "/xizmatlar" },
  { num: "05", title: "Pardozchi", sub: "Shpaklyovka, bo’yoq", barLeft: "7.8%", barWidth: "7.8%", price: "25 000–50 000", unit: "so’m / m2", href: "/xizmatlar" },
  { num: "06", title: "Eshik va deraza", sub: "O’rnatish va sozlash", barLeft: "46.8%", barWidth: "46.8%", price: "150 000–300 000", unit: "so’m / dona", href: "/xizmatlar" },
];

export default function Katalog() {
  return (
    <section style={{ padding: "clamp(48px, 7vw, 72px) 0 clamp(56px, 8vw, 88px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)" }}>
        {/* Table Header (Hidden on Mobile) */}
        <div className="m katalog-header" style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase", color: "#5F6B88" }}>
          <span>№</span>
          <span>Xizmat</span>
          <span>Narx oralig’i (0–320 000 so’m)</span>
          <span>Taxminiy narx</span>
          <span />
        </div>

        {/* Rows List */}
        <div style={{ borderBottom: "1.5px solid #10152B" }}>
          {ITEMS.map((item) => (
            <Link key={item.num} href={item.href} className="katalog-row">
              {/* Top info for mobile / columns for desktop */}
              <span className="m" style={{ fontSize: "14px", fontWeight: "700" }}>
                {item.num}
              </span>

              <div style={{ minWidth: "0" }}>
                <div className="d" style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: "700", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                  {item.title}
                </div>
                <div className="mu" style={{ fontSize: "15px", color: "#5F6B88", marginTop: "4px" }}>
                  {item.sub}
                </div>
              </div>

              {/* Rulers graphic */}
              <div className="katalog-row-ruler" style={{ position: "relative", height: "30px", minWidth: "120px" }}>
                <div style={{ position: "absolute", left: "0", right: "0", top: "20px", height: "8px", backgroundImage: "repeating-linear-gradient(90deg,currentColor 0 1px,transparent 1px 10%)", opacity: ".4" }} />
                <div style={{ position: "absolute", left: "0", right: "0", top: "19px", height: "1.5px", background: "currentColor", opacity: ".5" }} />
                <div style={{ position: "absolute", left: item.barLeft, width: item.barWidth, top: "6px", height: "14px", background: "var(--accent)", border: "1.5px solid currentColor", borderRadius: "3px" }} />
              </div>

              {/* Price */}
              <div style={{ minWidth: "140px" }}>
                <strong className="m" style={{ fontSize: "15px" }}>
                  {item.price}
                </strong>
                <div className="m mu" style={{ fontSize: "12px", color: "#5F6B88", marginTop: "2px" }}>
                  {item.unit}
                </div>
              </div>

              {/* Arrow action button */}
              <span style={{ width: "46px", height: "46px", borderRadius: "50%", background: "var(--accent)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
