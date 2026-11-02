import type { Metadata } from "next";
import Hero from "@/components/xizmatlar/Hero";
import Katalog from "@/components/xizmatlar/Katalog";
import Kalkulyator from "@/components/xizmatlar/Kalkulyator";
import QisqaQadamlar from "@/components/xizmatlar/QisqaQadamlar";
import Cta from "@/components/xizmatlar/Cta";

export const metadata: Metadata = { title: "Tarz xizmatlar" };

export default function XizmatlarPage() {
  return (
    <>
      <Hero />
      <Katalog />
      <Kalkulyator />
      <QisqaQadamlar />
      <Cta />
    </>
  );
}
