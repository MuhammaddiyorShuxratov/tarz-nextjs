export default function NarxJadvali() {
  return (
    <section style={{ background: "#E8E3D6", borderTop: "1.5px solid #14181F", borderBottom: "1.5px solid #14181F", padding: "clamp(48px, 8vw, 88px) 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: "clamp(24px, 4vw, 40px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "14px", height: "2px", background: "#14181F" }} />
            02 · Narx
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(30px, 6vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Santexnik xizmati narxi qancha?
          </h2>
          <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.5", color: "#5A5F69" }}>
            Taxminiy narx 1 dona uchun 80 000–150 000 so’m. Aniq narx ish hajmiga va materialga bog’liq.
          </p>
        </div>
        <div style={{ background: "#FBFAF6", border: "1.5px solid #14181F", borderRadius: "14px", overflow: "hidden", overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "17px" }}>
            <caption style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
              Santexnik xizmati narxlari, 29-oktabr, 2026 holatiga
            </caption>
            <thead>
              <tr className="m" style={{ background: "#14181F", color: "#F2EEE5", fontSize: "12px", letterSpacing: ".1em", textTransform: "uppercase", textAlign: "left" }}>
                <th scope="col" style={{ padding: "18px 28px", fontWeight: "500", textAlign: "left" }}>
                  Ish turi
                </th>
                <th scope="col" style={{ padding: "18px 28px", fontWeight: "500", textAlign: "left" }}>
                  O’lchov
                </th>
                <th scope="col" style={{ padding: "18px 28px", fontWeight: "500", textAlign: "left" }}>
                  Taxminiy narx (so’m)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" style={{ padding: "22px 28px", textAlign: "left", fontWeight: "700", borderBottom: "1px solid #D6D0C0" }}>
                  Santexnik: umumiy oraliq
                </th>
                <td className="m" style={{ padding: "22px 28px", borderBottom: "1px solid #D6D0C0" }}>
                  dona
                </td>
                <td className="m" style={{ padding: "22px 28px", borderBottom: "1px solid #D6D0C0", fontWeight: "700" }}>
                  <span style={{ background: "var(--accent)", padding: "3px 10px", borderRadius: "4px" }}>
                    80 000–150 000
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row" style={{ padding: "22px 28px", textAlign: "left", fontWeight: "700", borderBottom: "1px solid #D6D0C0", color: "#5A5F69" }}>
                  [Ish turi 1]
                </th>
                <td className="m" style={{ padding: "22px 28px", borderBottom: "1px solid #D6D0C0", color: "#5A5F69" }}>
                  dona
                </td>
                <td className="m" style={{ padding: "22px 28px", borderBottom: "1px solid #D6D0C0", color: "#5A5F69" }}>
                  [000 000–000 000]
                </td>
              </tr>
              <tr>
                <th scope="row" style={{ padding: "22px 28px", textAlign: "left", fontWeight: "700", borderBottom: "1px solid #D6D0C0", color: "#5A5F69" }}>
                  [Ish turi 2]
                </th>
                <td className="m" style={{ padding: "22px 28px", borderBottom: "1px solid #D6D0C0", color: "#5A5F69" }}>
                  dona
                </td>
                <td className="m" style={{ padding: "22px 28px", borderBottom: "1px solid #D6D0C0", color: "#5A5F69" }}>
                  [000 000–000 000]
                </td>
              </tr>
              <tr>
                <th scope="row" style={{ padding: "22px 28px", textAlign: "left", fontWeight: "700", color: "#5A5F69" }}>
                  [Ish turi 3]
                </th>
                <td className="m" style={{ padding: "22px 28px", color: "#5A5F69" }}>
                  dona
                </td>
                <td className="m" style={{ padding: "22px 28px", color: "#5A5F69" }}>
                  [000 000–000 000]
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="m" style={{ margin: "0", fontSize: "13px", lineHeight: "1.6", color: "#5A5F69" }}>
          Narxlar taxminiy. Yangilangan sana: 29-oktabr, 2026. Aniq narxni bilish uchun Tarz’da bepul buyurtma qoldiring.
        </p>
      </div>
    </section>
  );
}
