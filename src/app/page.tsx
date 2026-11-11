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
import { MobileSite } from "@/components/mobile/MobileSite";

export default function Home() {
  return (
    <>
      {/* Десктопная версия: от 768px */}
      <div className="hidden md:block">
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
      </div>

      {/* Мобильная версия: до 767px */}
      <div className="md:hidden">
        <MobileSite />
      </div>
    </>
  );
}
