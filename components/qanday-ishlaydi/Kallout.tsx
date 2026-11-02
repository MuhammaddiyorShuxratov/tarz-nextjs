export default function Kallout() {
  return (
    <section style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ background: "#0B5D66", color: "#F2EEE5", borderRadius: "24px", padding: "64px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
          <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span className="m" style={{ fontSize: "13px", letterSpacing: ".1em", textTransform: "uppercase", color: "#CFE3E1", fontWeight: "700" }}>
              Kafolat
            </span>
            <h2 className="d" style={{ margin: "0", fontSize: "52px", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "800" }}>
              Usta kelmasa yoki ish yoqmasa nima bo’ladi?
            </h2>
          </div>
          <p style={{ flex: "1 1 420px", margin: "0", fontSize: "21px", lineHeight: "1.6", color: "#E4EEEC" }}>
            Tarz mijozlar xizmati doim yordamga tayyor. Usta kelmasa, boshqa ishonchli ustani tavsiya qilamiz. Ish sifatsiz chiqsa, masalani usta bilan birga hal qilamiz.
          </p>
        </div>
      </div>
    </section>
  );
}
