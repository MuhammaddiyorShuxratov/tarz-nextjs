import Link from "next/link";

export default function BoshqaXizmatlar() {
  return (
    <section style={{ padding: "0 0 96px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: "24px" }}>
        <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "14px", height: "2px", background: "#14181F" }} />
          Boshqa xizmatlar
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Link href="/xizmatlar" className="chip" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid #14181F", fontWeight: "600", fontSize: "16px", background: "#FBFAF6" }}>
            Elektrik
          </Link>
          <Link href="/xizmatlar" className="chip" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid #14181F", fontWeight: "600", fontSize: "16px", background: "#FBFAF6" }}>
            Kafel ustasi
          </Link>
          <Link href="/xizmatlar" className="chip" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid #14181F", fontWeight: "600", fontSize: "16px", background: "#FBFAF6" }}>
            Tom yopish
          </Link>
          <Link href="/xizmatlar" className="chip" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid #14181F", fontWeight: "600", fontSize: "16px", background: "#FBFAF6" }}>
            Pardozchi
          </Link>
          <Link href="/xizmatlar" className="chip" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid #14181F", fontWeight: "600", fontSize: "16px", background: "#FBFAF6" }}>
            Eshik va deraza
          </Link>
          <Link href="/qanday-ishlaydi" className="chip" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1.5px dashed #14181F", fontWeight: "600", fontSize: "16px" }}>
            Tarz qanday ishlaydi?
          </Link>
          <Link href="/ustalar-uchun" className="chip" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1.5px dashed #14181F", fontWeight: "600", fontSize: "16px" }}>
            Ustalar uchun
          </Link>
        </div>
        <p className="m" style={{ margin: "8px 0 0", fontSize: "13px", color: "#5A5F69" }}>
          Oxirgi yangilanish: 29-oktabr, 2026
        </p>
      </div>
    </section>
  );
}
