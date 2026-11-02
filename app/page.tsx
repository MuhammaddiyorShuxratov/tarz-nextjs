import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import Xizmatlar from "@/components/home/Xizmatlar";
import QandayIshlaydi from "@/components/home/QandayIshlaydi";
import NegaTarz from "@/components/home/NegaTarz";
import Sharhlar from "@/components/home/Sharhlar";
import UstalarUchun from "@/components/home/UstalarUchun";
import Faq from "@/components/home/Faq";
import YakuniyCta from "@/components/home/YakuniyCta";

export const metadata: Metadata = { title: "Tarz bosh sahifa" };

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Xizmatlar />
      <QandayIshlaydi />
      <NegaTarz />
      <Sharhlar />
      <UstalarUchun />
      <Faq />
      <YakuniyCta />
    </>
  );
}
