import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Groups } from "@/components/Groups";
import { Classes } from "@/components/Classes";
import { Nutrition } from "@/components/Nutrition";
import { Gallery } from "@/components/Gallery";
import { Documents } from "@/components/Documents";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Groups />
        <Classes />
        <Nutrition />
        <Gallery />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
