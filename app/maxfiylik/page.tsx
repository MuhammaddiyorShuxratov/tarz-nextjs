import type { Metadata } from "next";
import LegalDocument, { type LegalSection } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Maxfiylik siyosati — Tarz",
  description:
    "Tarz platformasida foydalanuvchilar va ustalarning shaxsiy ma’lumotlarini yig’ish, saqlash va himoya qilish tartibi.",
};

const SECTIONS: LegalSection[] = [
  {
    num: "01 · Umumiy qoidalar",
    title: "Qanday ma’lumotlar yig’iladi",
    paragraphs: [
      "Tarz platformasi va @tarz_usta_bot Telegram boti orqali buyurtma berishda yoki usta sifatida ro’yxatdan o’tishda faqat xizmat ko’rsatish uchun zarur bo’lgan ma’lumotlar so’raladi.",
    ],
    items: [
      "Ism va Telegram foydalanuvchi nomi (username) hamda Telegram ID.",
      "Aloqa uchun telefon raqami va buyurtma bajariladigan tuman/manzil.",
      "Buyurtma tavsifi, ish hajmi, biriktirilgan suratlar va narx takliflari.",
      "Ustalar uchun: ixtisoslik yo’nalishi, ish tajribasi va shaxsni tasdiqlovchi ma’lumotlar.",
    ],
  },
  {
    num: "02 · Foydalanish maqsadi",
    title: "Ma’lumotlar nima uchun ishlatiladi",
    paragraphs: [
      "Yig’ilgan ma’lumotlar uchinchi shaxslarga sotilmaydi va reklama maqsadlarida tarqatilmaydi. Ma’lumotlardan faqat quyidagi maqsadlarda foydalaniladi:",
    ],
    items: [
      "Mijoz buyurtmasini Toshkentdagi mos ustalarga yetkazish va narx takliflarini olish.",
      "Mijoz usta taklifini tanlagandan so’ng tomonlar o’rtasida bog’lanishni ta’minlash.",
      "Xizmat sifatini nazorat qilish, nizoli holatlarni hal etish va texnik yordam ko’rsatish.",
    ],
  },
  {
    num: "03 · Saqlash va himoya",
    title: "Ma’lumotlar xavfsizligi",
    paragraphs: [
      "Mijozning telefon raqami va aniq manzili barcha ustalarga ochiq ko’rsatilmaydi. Kontaktlar faqat mijoz aniq bir ustani tanlab tasdiqlagandan keyingina o’sha ustaga taqdim etiladi.",
      "Ma’lumotlar shifrlangan aloqa kanallari orqali uzatiladi va ruxsatsiz kirishdan himoyalangan serverlarda saqlanadi.",
    ],
  },
  {
    num: "04 · Foydalanuvchi huquqlari",
    title: "Ma’lumotlarni o’zgartirish yoki o’chirish",
    paragraphs: [
      "Siz istalgan vaqtda o’z shaxsiy ma’lumotlaringizni yangilash, ulardan foydalanishni cheklash yoki hisobingizni to’liq o’chirishni so’rashingiz mumkin.",
      "Buning uchun @tarz_usta_bot orqali qo’llab-quvvatlash bo’limiga yoki info@tarz.uz elektron manziliga murojaat qiling.",
    ],
  },
  {
    num: "05 · Aloqa va operator",
    title: "Ma’lumotlar operatori",
    paragraphs: [
      "Tarz platformasi Steppe Venture Builders tomonidan ishlab chiqiladi va boshqariladi. Manzil: Toshkent sh., Chilonzor tumani, Bunyodkor shoh ko’chasi, 15. Telefon: +998 71 200 12 34.",
    ],
  },
];

export default function MaxfiylikPage() {
  return (
    <LegalDocument
      breadcrumb="Maxfiylik siyosati"
      badge="Huquqiy hujjat"
      title="Maxfiylik siyosati"
      updatedAt="2026"
      lead="Tarz foydalanuvchilari va ustalarning shaxsiy ma’lumotlarini qanday yig’ishi, himoya qilishi va ishlatishi haqida aniq va tushunarli tartib."
      sections={SECTIONS}
    />
  );
}
