import Link from "next/link";

export default function Faq() {
  return (
    <section style={{ padding: "0 0 clamp(48px, 8vw, 96px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", gap: "clamp(32px, 6vw, 72px)", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px", position: "sticky", top: "100px", alignSelf: "flex-start" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "14px", height: "2px", background: "#10152B" }} />
            Savollar
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(30px, 6vw, 52px)", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Qisqa javoblar
          </h2>
          <Link href="/savollar" style={{ fontWeight: "700", fontSize: "16px", display: "inline-flex", alignItems: "center", gap: "8px", borderBottom: "2px solid var(--accent)", paddingBottom: "4px", alignSelf: "flex-start" }}>
            Barcha savollar
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
        <div style={{ flex: "2 1 600px", minWidth: "0", display: "flex", flexDirection: "column", borderBottom: "1.5px solid #10152B" }}>
          <details open style={{ borderTop: "1.5px solid #10152B", padding: "26px 0" }}>
            <summary style={{ display: "flex", gap: "22px", alignItems: "center" }}>
              <span className="m" style={{ fontSize: "13px", minWidth: "30px" }}>
                01
              </span>
              <h3 className="d" style={{ margin: "0", fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", flex: "1" }}>
                Tarz qanday ishlaydi?
              </h3>
              <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p style={{ margin: "14px 0 0 52px", fontSize: "18px", lineHeight: "1.6", color: "#5F6B88", maxWidth: "640px" }}>
              Uch qadam bor. Avval Telegram’da ishingizni 2 daqiqada yozasiz. Keyin tekshirilgan ustalar narx taklif qiladi. Oxirida narxi va sharhiga qarab eng yaxshisini tanlaysiz. Alohida ilova yuklash shart emas.
            </p>
          </details>
          <details style={{ borderTop: "1.5px solid #10152B", padding: "26px 0" }}>
            <summary style={{ display: "flex", gap: "22px", alignItems: "center" }}>
              <span className="m" style={{ fontSize: "13px", minWidth: "30px" }}>
                02
              </span>
              <h3 className="d" style={{ margin: "0", fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", flex: "1" }}>
                Usta qancha vaqtda topiladi?
              </h3>
              <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p style={{ margin: "14px 0 0 52px", fontSize: "18px", lineHeight: "1.6", color: "#5F6B88", maxWidth: "640px" }}>
              Birinchi takliflar odatda 10–30 daqiqada keladi. Shoshilinch ishda usta 2 soat ichida yetib borishi mumkin. Aniq vaqt tumaningizga va ustaning bandligiga bog’liq.
            </p>
          </details>
          <details style={{ borderTop: "1.5px solid #10152B", padding: "26px 0" }}>
            <summary style={{ display: "flex", gap: "22px", alignItems: "center" }}>
              <span className="m" style={{ fontSize: "13px", minWidth: "30px" }}>
                03
              </span>
              <h3 className="d" style={{ margin: "0", fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", flex: "1" }}>
                Tarz mijozlar uchun pullikmi?
              </h3>
              <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p style={{ margin: "14px 0 0 52px", fontSize: "18px", lineHeight: "1.6", color: "#5F6B88", maxWidth: "640px" }}>
              Yo’q, Tarz mijoz uchun bepul. Buyurtma qoldirasiz, tekshirilgan ustalar narx taklif qiladi. Takliflarni solishtirib, ma’qulini o’zingiz tanlaysiz.
            </p>
          </details>
          <details style={{ borderTop: "1.5px solid #10152B", padding: "26px 0" }}>
            <summary style={{ display: "flex", gap: "22px", alignItems: "center" }}>
              <span className="m" style={{ fontSize: "13px", minWidth: "30px" }}>
                04
              </span>
              <h3 className="d" style={{ margin: "0", fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", flex: "1" }}>
                Ilova yuklash kerakmi?
              </h3>
              <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p style={{ margin: "14px 0 0 52px", fontSize: "18px", lineHeight: "1.6", color: "#5F6B88", maxWidth: "640px" }}>
              Yo’q. Tarz Telegram ichida ochiladi, alohida ilova yuklash shart emas. “Usta topish” tugmasini bosasiz, buyurtma oynasi ochiladi.
            </p>
          </details>
          <details style={{ borderTop: "1.5px solid #10152B", padding: "26px 0" }}>
            <summary style={{ display: "flex", gap: "22px", alignItems: "center" }}>
              <span className="m" style={{ fontSize: "13px", minWidth: "30px" }}>
                05
              </span>
              <h3 className="d" style={{ margin: "0", fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", flex: "1" }}>
                Usta kelmasa yoki ish sifatsiz bo’lsa nima qilaman?
              </h3>
              <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p style={{ margin: "14px 0 0 52px", fontSize: "18px", lineHeight: "1.6", color: "#5F6B88", maxWidth: "640px" }}>
              Tarz mijozlar xizmatiga yozing. Usta kelmasa, boshqa ishonchli ustani tavsiya qilamiz. Ish sifatsiz chiqsa, masalani usta bilan birga hal qilamiz.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
