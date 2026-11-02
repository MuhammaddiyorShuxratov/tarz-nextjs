import Link from "next/link";

export default function CtaFeruza() {
  return (
    <section style={{ background: "#0B5D66", color: "#F2EEE5", borderTop: "1px solid #14181F" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(48px, 8vw, 104px) clamp(16px, 4vw, 40px)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "clamp(20px, 4vw, 30px)" }}>
        <h2 className="d" style={{ margin: "0", fontSize: "clamp(32px, 7vw, 84px)", lineHeight: ".98", letterSpacing: "-0.04em", fontWeight: "800", maxWidth: "960px" }}>
          {"Mijoz qidirmang. "}
          <span style={{ color: "var(--accent)" }}>
            Buyurtmalar
          </span>
          {" o’zi kelsin."}
        </h2>
        <p style={{ margin: "0", fontSize: "21px", lineHeight: "1.5", color: "#CFE3E1", maxWidth: "540px" }}>
          Bepul ro’yxatdan o’ting va birinchi buyurtmaga narx taklif qiling.
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#" className="btn" style={{ background: "var(--accent)", color: "#14181F", height: "64px", padding: "0 36px", fontSize: "19px" }}>
            Usta bo’lib qo’shilish
          </a>
          <Link href="/" className="btn" style={{ border: "1.5px solid rgba(242,238,229,.45)", color: "#F2EEE5", height: "64px", padding: "0 36px", fontSize: "19px" }}>
            Usta topish
          </Link>
        </div>
        <p className="m" style={{ margin: "0", fontSize: "13px", color: "#CFE3E1" }}>
          Oxirgi yangilanish: 29-oktabr, 2026
        </p>
      </div>
    </section>
  );
}
