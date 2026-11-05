import Link from "next/link";

export default function Faq() {
  return (
    <section style={{ padding: "0 0 clamp(48px, 8vw, 96px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", gap: "clamp(32px, 6vw, 72px)", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px", position: "sticky", top: "100px", alignSelf: "flex-start" }}>
          <span className="m" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "14px", height: "2px", background: "#10152B" }} />
            04 · Savollar
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(30px, 6vw, 52px)", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Ustalar savollari
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
                Qanday qilib Tarz’da usta bo’laman?
              </h3>
              <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p style={{ margin: "14px 0 0 52px", fontSize: "18px", lineHeight: "1.6", color: "#5F6B88", maxWidth: "640px" }}>
              “Usta bo’lib qo’shilish” tugmasini bosing. Telegram’da ro’yxatdan o’tish oynasi ochiladi. Xizmat turini tanlab, shaxsingizni tasdiqlovchi hujjatlarni topshirasiz. Tekshiruvdan o’tgach, buyurtmalarga narx taklif qila boshlaysiz.
            </p>
          </details>
          <details style={{ borderTop: "1.5px solid #10152B", padding: "26px 0" }}>
            <summary style={{ display: "flex", gap: "22px", alignItems: "center" }}>
              <span className="m" style={{ fontSize: "13px", minWidth: "30px" }}>
                02
              </span>
              <h3 className="d" style={{ margin: "0", fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", flex: "1" }}>
                Ustalar Tarz’ga pul to’laydimi?
              </h3>
              <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p style={{ margin: "14px 0 0 52px", fontSize: "18px", lineHeight: "1.6", color: "#5F6B88", maxWidth: "640px" }}>
              Ro’yxatdan o’tish bepul. Qat’iy majburiyat va yashirin komissiya yo’q. Narxni o’zingiz belgilaysiz. Shartlar o’zgarsa, bu sahifada oldindan yozib qo’yamiz.
            </p>
          </details>
          <details style={{ borderTop: "1.5px solid #10152B", padding: "26px 0" }}>
            <summary style={{ display: "flex", gap: "22px", alignItems: "center" }}>
              <span className="m" style={{ fontSize: "13px", minWidth: "30px" }}>
                03
              </span>
              <h3 className="d" style={{ margin: "0", fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", flex: "1" }}>
                Narxni o’zim belgilaymanmi?
              </h3>
              <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p style={{ margin: "14px 0 0 52px", fontSize: "18px", lineHeight: "1.6", color: "#5F6B88", maxWidth: "640px" }}>
              Ha. Har bir buyurtmaga o’z narxingizni yozasiz. Mijoz bir nechta taklifni solishtiradi. Narx, reyting va sharhlar birga ko’rinadi, shuning uchun halol narx va sifatli ish ko’proq buyurtma olib keladi.
            </p>
          </details>
          <details style={{ borderTop: "1.5px solid #10152B", padding: "26px 0" }}>
            <summary style={{ display: "flex", gap: "22px", alignItems: "center" }}>
              <span className="m" style={{ fontSize: "13px", minWidth: "30px" }}>
                04
              </span>
              <h3 className="d" style={{ margin: "0", fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", flex: "1" }}>
                Buyurtmalar qanday keladi?
              </h3>
              <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p style={{ margin: "14px 0 0 52px", fontSize: "18px", lineHeight: "1.6", color: "#5F6B88", maxWidth: "640px" }}>
              Mijoz buyurtma qoldirsa, shu xizmat va tuman bo’yicha ustalar xabar oladi. Siz o’z narxingizni taklif qilasiz. Mijoz sizni tanlasa, u bilan bog’lanib, ish vaqtini kelishasiz.
            </p>
          </details>
          <details style={{ borderTop: "1.5px solid #10152B", padding: "26px 0" }}>
            <summary style={{ display: "flex", gap: "22px", alignItems: "center" }}>
              <span className="m" style={{ fontSize: "13px", minWidth: "30px" }}>
                05
              </span>
              <h3 className="d" style={{ margin: "0", fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", flex: "1" }}>
                Ustalar qanday tekshiriladi?
              </h3>
              <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10152B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p style={{ margin: "14px 0 0 52px", fontSize: "18px", lineHeight: "1.6", color: "#5F6B88", maxWidth: "640px" }}>
              Har bir usta ro’yxatdan o’tishda shaxsini tasdiqlovchi hujjatlarini topshiradi. Tekshiruvdan o’tmagan usta buyurtma qabul qila olmaydi. Mijozlar bahosi va sharhi usta profilida ochiq ko’rinadi.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
