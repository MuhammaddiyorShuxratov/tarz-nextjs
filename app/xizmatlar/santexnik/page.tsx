import type { Metadata } from "next";
import Hero from "@/components/santexnik/Hero";
import Ishlar from "@/components/santexnik/Ishlar";
import NarxJadvali from "@/components/santexnik/NarxJadvali";
import Qadamlar from "@/components/santexnik/Qadamlar";
import Faq from "@/components/santexnik/Faq";
import BoshqaXizmatlar from "@/components/santexnik/BoshqaXizmatlar";
import Cta from "@/components/santexnik/Cta";

export const metadata: Metadata = { title: "Santexnik ustasi Toshkentda" };

export default function SantexnikPage() {
  return (
    <>
      <Hero />
      <Ishlar />
      <NarxJadvali />
      <Qadamlar />
      <Faq />
      <BoshqaXizmatlar />
      <Cta />
    </>
  );
}
