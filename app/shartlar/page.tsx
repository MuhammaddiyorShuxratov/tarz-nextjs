import type { Metadata } from "next";
import LegalDocument, { type LegalSection } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Foydalanish shartlari — Tarz",
  description:
    "Tarz platformasidan mijozlar va ustalar tomonidan foydalanish qoidalari hamda tomonlarning majburiyatlari.",
};

const SECTIONS: LegalSection[] = [
  {
    num: "01 · Platforma vazifasi",
    title: "Tarz qanday xizmat ko’rsatadi",
    paragraphs: [
      "Tarz — Toshkent shahridagi mijozlarni qurilish, ta’mirlash va maishiy xizmat ko’rsatuvchi mustaqil ustalar bilan Telegram orqali bog’lovchi axborot platformasi.",
      "Tarz buyurtmalarni qabul qilish, ustalardan narx takliflarini yig’ish va mijozga qulay tanlov imkoniyatini yaratish funksiyasini bajaradi. Ishning bevosita bajarilishi tanlangan usta tomonidan amalga oshiriladi.",
    ],
  },
  {
    num: "02 · Mijoz majburiyatlari",
    title: "Buyurtma berish tartibi",
    paragraphs: [
      "Mijoz buyurtma qoldirishda ish turi, hajmi va tuman haqida haqqoniy ma’lumot kiritishi lozim. Noto’g’ri yoki chalg’ituvchi ma’lumot berilganda usta narxni qayta ko’rib chiqish huquqiga ega.",
    ],
    items: [
      "Buyurtma berish mijoz uchun bepul va majburiyat yuklamaydi.",
      "Kelishilgan vaqtda usta bilan aloqada bo’lish va ish joyiga kirish imkonini ta’minlash.",
      "Ish yakunlangach, sifatini tekshirish va kelishilgan to’lovni amalga oshirish.",
    ],
  },
  {
    num: "03 · Usta majburiyatlari",
    title: "Ustalar uchun qoidalar",
    paragraphs: [
      "Platformada ro’yxatdan o’tgan ustalar o’z malakasi, tajribasi va shaxsiy ma’lumotlarini to’g’ri ko’rsatishi shart.",
    ],
    items: [
      "Taklif qilingan narx va muddatga amal qilish, kelishuvsiz qo’shimcha to’lov talab qilmaslik.",
      "Ishni xavfsizlik qoidalari va sifat talablariga muvofiq bajarish.",
      "Mijozning shaxsiy ma’lumotlari va xonadon daxlsizligini hurmat qilish.",
    ],
  },
  {
    num: "04 · To’lov va kafolat",
    title: "Hisob-kitob va nizolar",
    paragraphs: [
      "Xizmat haqi mijoz va usta o’rtasida kelishilgan narx asosida bevosita to’lanadi. Saytda ko’rsatilgan narxlar taxminiy bo’lib, yakuniy summa ish murakkabligi va materialga qarab belgilanadi.",
      "Nizoli holatlar yuzaga kelganda, tomonlar @tarz_usta_bot yoki +998 71 200 12 34 orqali qo’llab-quvvatlash xizmatiga murojaat qilishlari mumkin.",
    ],
  },
  {
    num: "05 · O’zgartirishlar",
    title: "Shartlarning yangilanishi",
    paragraphs: [
      "Tarz ushbu foydalanish shartlarini vaqti-vaqti bilan yangilash huquqiga ega. Yangilangan shartlar saytda e’lon qilingan kundan boshlab kuchga kiradi.",
    ],
  },
];

export default function ShartlarPage() {
  return (
    <LegalDocument
      breadcrumb="Foydalanish shartlari"
      badge="Ommaviy oferta"
      title="Foydalanish shartlari"
      updatedAt="2026"
      lead="Tarz xizmatidan foydalanishda mijozlar va ustalar amal qiladigan asosiy qoidalar, huquq va majburiyatlar."
      sections={SECTIONS}
    />
  );
}
