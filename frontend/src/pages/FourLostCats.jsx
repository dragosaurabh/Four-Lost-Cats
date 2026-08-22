import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import MobileCTABar from "@/components/MobileCTABar";
import PawCursor from "@/components/PawCursor";
import Hero from "@/components/sections/Hero";
import Origin from "@/components/sections/Origin";
import Design from "@/components/sections/Design";
import Menu from "@/components/sections/Menu";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Visit from "@/components/sections/Visit";
import InstagramFeed from "@/components/sections/Instagram";
import Footer from "@/components/Footer";

export default function FourLostCats() {
  const skipIntro = typeof window !== "undefined" && window.location.search.includes("nointro");
  const [ready, setReady] = useState(skipIntro);

  useEffect(() => {
    if (window.__lenis) {
      if (ready) window.__lenis.start();
      else window.__lenis.stop();
    }
    document.body.style.overflow = ready ? "" : "hidden";
  }, [ready]);

  return (
    <main className="relative">
      {!skipIntro && <Loader onDone={() => setReady(true)} />}
      <Navbar />
      <Hero ready={ready} />
      <Origin />
      <Design />
      <Menu />
      <Events />
      <Gallery />
      <Testimonials />
      <Visit />
      <InstagramFeed />
      <Footer />
      <MobileCTABar />
      <PawCursor />
    </main>
  );
}
