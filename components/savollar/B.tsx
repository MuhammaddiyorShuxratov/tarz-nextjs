export default function B() {
  return (
    <section id="b" style={{ padding: "clamp(32px, 6vw, 48px) 0 40px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", gap: "clamp(28px, 4vw, 64px)", alignItems: "flex-start" }}>
        <div className="sticky-desktop" style={{ flex: "1 1 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px", position: "sticky", top: "100px", alignSelf: "flex-start" }}>
          <span className="d" style={{ fontSize: "clamp(64px, 12vw, 120px)", lineHeight: ".8", fontWeight: "800", letterSpacing: "-0.06em", color: "transparent", WebkitTextStroke: "2px #14181F" }}>
            B
          </span>
          <h2 className="d" style={{ margin: "0", fontSize: "clamp(28px, 5vw, 40px)", lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "800" }}>
            Ishonch va xavfsizlik
          </h2>
          <span className="m" style={{ fontSize: "13px", color: "#5A5F69" }}>
            4 ta savol
          </span>
        </div>
        <div style={{ flex: "2 1 640px", minWidth: "0", display: "flex", flexDirection: "column", borderBottom: "1.5px solid #14181F" }}>
          <details open className="q">
            <summary>
              <span className="n">
                09
              </span>
              <h3>
                Ustalar qanday tekshiriladi?
              </h3>
              <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p>
              Har bir usta ro’yxatdan o’tishda shaxsini tasdiqlovchi hujjatlarini topshiradi. Tekshiruvdan o’tmagan usta buyurtma qabul qila olmaydi. Mijozlar bahosi va sharhi usta profilida ochiq ko’rinadi.
            </p>
          </details>
          <details className="q">
            <summary>
              <span className="n">
                10
              </span>
              <h3>
                Usta kelmasa yoki ish sifatsiz bo’lsa nima qilaman?
              </h3>
              <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p>
              Tarz mijozlar xizmatiga yozing. Usta kelmasa, boshqa ishonchli ustani tavsiya qilamiz. Ish sifatsiz chiqsa, masalani usta bilan birga hal qilamiz. Tajribangizni sharhda ham qoldirishingiz mumkin.
            </p>
          </details>
          <details className="q">
            <summary>
              <span className="n">
                11
              </span>
              <h3>
                Sharhlar haqiqiymi?
              </h3>
              <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p>
              Ha. Sharhni faqat buyurtmasi bajarilgan mijoz qoldiradi. Sharh mijoz ismi, tumani, xizmat turi va bahosi bilan chiqadi. Tarz o’z sharhlarini yozmaydi.
            </p>
          </details>
          <details className="q">
            <summary>
              <span className="n">
                12
              </span>
              <h3>
                Tarz ishonchlimi?
              </h3>
              <svg className="chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14181F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p>
              Tarz ustalarni hujjat bilan tekshiradi, narxni oldindan ko’rsatadi va faqat haqiqiy sharhlarni chiqaradi. Muammo bo’lsa, mijozlar xizmati yordam beradi. Aloqa ma’lumotlari sahifa pastida turibdi.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
