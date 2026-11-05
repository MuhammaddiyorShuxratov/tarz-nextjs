export default function QoshilishQadamlari() {
  return (
    <section style={{ background: "#F4F7FD", borderTop: "1.5px solid #10152B", borderBottom: "1.5px solid #10152B", padding: "clamp(48px, 8vw, 96px) 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: "clamp(32px, 5vw, 64px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "14px", height: "2px", background: "#10152B" }} />
            02 · Shartlar
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(32px, 6vw, 60px)", lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Qanday qo’shilaman?
          </h2>
          <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.5", color: "#5F6B88" }}>
            To’rt qadam. Ro’yxatdan o’tish bepul.
          </p>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "28px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px", position: "relative" }}>
              <span className="d" style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#10152B", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "22px" }}>
                1
              </span>
              <div>
                <h3 className="d" style={{ margin: "0", fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                  Ro’yxatdan o’ting
                </h3>
                <p style={{ margin: "8px 0 0", fontSize: "17px", lineHeight: "1.5", color: "#5F6B88" }}>
                  Telegram’da “Usta bo’lib qo’shilish” tugmasini bosing.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px", position: "relative" }}>
              <span className="d" style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#10152B", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "22px" }}>
                2
              </span>
              <div>
                <h3 className="d" style={{ margin: "0", fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                  Hujjatlarni topshiring
                </h3>
                <p style={{ margin: "8px 0 0", fontSize: "17px", lineHeight: "1.5", color: "#5F6B88" }}>
                  Shaxsingizni tasdiqlovchi hujjatlar tekshiriladi.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px", position: "relative" }}>
              <span className="d" style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#10152B", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "22px" }}>
                3
              </span>
              <div>
                <h3 className="d" style={{ margin: "0", fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                  Narx taklif qiling
                </h3>
                <p style={{ margin: "8px 0 0", fontSize: "17px", lineHeight: "1.5", color: "#5F6B88" }}>
                  Buyurtmalarga o’z narxingizni yozasiz.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px", position: "relative" }}>
              <span className="d" style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--accent)", color: "#10152B", border: "2px solid #10152B", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "22px" }}>
                4
              </span>
              <div>
                <h3 className="d" style={{ margin: "0", fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                  Ish qiling, sharh oling
                </h3>
                <p style={{ margin: "8px 0 0", fontSize: "17px", lineHeight: "1.5", color: "#5F6B88" }}>
                  Mijoz sizni tanlasa, ishni bajarasiz va baho olasiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
