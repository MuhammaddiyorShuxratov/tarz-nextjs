import type { Metadata } from "next";
import HeroQorongu from "@/components/ustalar-uchun/HeroQorongu";
import Afzalliklar from "@/components/ustalar-uchun/Afzalliklar";
import QoshilishQadamlari from "@/components/ustalar-uchun/QoshilishQadamlari";
import Yonalishlar from "@/components/ustalar-uchun/Yonalishlar";
import Faq from "@/components/ustalar-uchun/Faq";
import CtaFeruza from "@/components/ustalar-uchun/CtaFeruza";

export const metadata: Metadata = { title: "Ustalar uchun Tarz" };

export default function UstalarUchunPage() {
  return (
    <>
      <HeroQorongu />
      <Afzalliklar />
      <QoshilishQadamlari />
      <Yonalishlar />
      <Faq />
      <CtaFeruza />
    </>
  );
}
