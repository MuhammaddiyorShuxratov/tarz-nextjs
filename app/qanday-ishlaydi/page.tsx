import type { Metadata } from "next";
import HeroOlchovChizgichi from "@/components/qanday-ishlaydi/HeroOlchovChizgichi";
import Qadamlar from "@/components/qanday-ishlaydi/Qadamlar";
import Ishonch from "@/components/qanday-ishlaydi/Ishonch";
import Kallout from "@/components/qanday-ishlaydi/Kallout";
import Faq from "@/components/qanday-ishlaydi/Faq";
import Cta from "@/components/qanday-ishlaydi/Cta";

export const metadata: Metadata = { title: "Tarz qanday ishlaydi?" };

export default function QandayIshlaydiPage() {
  return (
    <>
      <HeroOlchovChizgichi />
      <Qadamlar />
      <Ishonch />
      <Kallout />
      <Faq />
      <Cta />
    </>
  );
}
