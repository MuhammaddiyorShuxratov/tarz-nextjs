import type { Metadata } from "next";
import Hero from "@/components/savollar/Hero";
import A from "@/components/savollar/A";
import B from "@/components/savollar/B";
import C from "@/components/savollar/C";
import Cta from "@/components/savollar/Cta";

export const metadata: Metadata = { title: "Tarz savollar" };

export default function SavollarPage() {
  return (
    <>
      <Hero />
      <A />
      <B />
      <C />
      <Cta />
    </>
  );
}
