export default function Afzalliklar() {
  return (
    <section style={{ padding: "clamp(48px, 8vw, 96px) 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: "clamp(28px, 4vw, 48px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "14px", height: "2px", background: "#14181F" }} />
            01 · Afzalliklar
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(32px, 6vw, 60px)", lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Nega ustalar Tarz’ni tanlaydi?
          </h2>
        </div>
        <div className="responsive-grid-3">
          <div style={{ background: "#FBFAF6", border: "1.5px solid #14181F", borderRadius: "14px", padding: "34px", display: "flex", flexDirection: "column", gap: "18px", minHeight: "320px" }}>
            <span className="d" style={{ fontSize: "120px", lineHeight: ".8", fontWeight: "800", letterSpacing: "-0.06em", color: "transparent", WebkitTextStroke: "1.5px #14181F" }}>
              01
            </span>
            <div style={{ marginTop: "auto" }}>
              <h3 className="d" style={{ margin: "0", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.03em", lineHeight: "1.05" }}>
                Mijozlar o’zi topadi
              </h3>
              <p style={{ margin: "10px 0 0", fontSize: "18px", lineHeight: "1.5", color: "#5A5F69" }}>
                Tayyor buyurtmalar to’g’ridan-to’g’ri sizga keladi.
              </p>
            </div>
          </div>
          <div style={{ background: "var(--accent)", border: "1.5px solid #14181F", borderRadius: "14px", padding: "34px", display: "flex", flexDirection: "column", gap: "18px", minHeight: "320px" }}>
            <span className="d" style={{ fontSize: "120px", lineHeight: ".8", fontWeight: "800", letterSpacing: "-0.06em", color: "transparent", WebkitTextStroke: "1.5px #14181F" }}>
              02
            </span>
            <div style={{ marginTop: "auto" }}>
              <h3 className="d" style={{ margin: "0", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.03em", lineHeight: "1.05" }}>
                Narxni o’zingiz belgilaysiz
              </h3>
              <p style={{ margin: "10px 0 0", fontSize: "18px", lineHeight: "1.5", color: "#14181F" }}>
                Yashirin komissiya va qat’iy majburiyat yo’q.
              </p>
            </div>
          </div>
          <div style={{ background: "#FBFAF6", border: "1.5px solid #14181F", borderRadius: "14px", padding: "34px", display: "flex", flexDirection: "column", gap: "18px", minHeight: "320px" }}>
            <span className="d" style={{ fontSize: "120px", lineHeight: ".8", fontWeight: "800", letterSpacing: "-0.06em", color: "transparent", WebkitTextStroke: "1.5px #14181F" }}>
              03
            </span>
            <div style={{ marginTop: "auto" }}>
              <h3 className="d" style={{ margin: "0", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.03em", lineHeight: "1.05" }}>
                Obro’ orttirasiz
              </h3>
              <p style={{ margin: "10px 0 0", fontSize: "18px", lineHeight: "1.5", color: "#5A5F69" }}>
                Reyting va sharhlar qimmatroq buyurtma olib keladi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
