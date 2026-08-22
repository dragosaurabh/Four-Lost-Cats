import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import HeroScene from "@/components/three/HeroScene";
import { MaskLine } from "@/components/motion/Reveal";
import { PawIcon } from "@/components/CatIcon";
import { useSupports3D } from "@/hooks/useMediaQuery";
import { IMAGES, CONTACT } from "@/data/site";
import { scrollToId } from "@/lib/scroll";

export default function Hero({ ready }) {
  const use3D = useSupports3D();

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-brand-blue">
      <div className="absolute inset-0">
        {use3D ? (
          <HeroScene />
        ) : (
          <img
            src={IMAGES.heroInterior}
            alt="Four Lost Cats café interior with glowing paper lanterns"
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* color-block + vignette overlays */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 12% 40%, rgba(27,58,92,0.55), transparent 60%), radial-gradient(60% 80% at 92% 60%, rgba(245,168,130,0.35), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue/30 via-transparent to-brand-blue/85" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center px-5 pb-28 pt-28 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.35em] text-brand-lantern"
        >
          <span className="h-px w-10 bg-brand-lantern/60" /> Nashik · Est. 2019
        </motion.p>

        <h1 className="max-w-5xl font-outfit text-5xl font-black uppercase leading-[0.92] tracking-tight text-brand-paper sm:text-6xl md:text-7xl lg:text-8xl">
          <MaskLine ready={ready}>Where Four Curious</MaskLine>
          <MaskLine ready={ready} delay={0.12}>
            <span className="text-brand-peach">Cats</span> Found{" "}
            <span className="font-fraunces text-brand-lantern lowercase italic" style={{ fontWeight: 500 }}>
              Home.
            </span>
          </MaskLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-xl font-jakarta text-lg leading-relaxed text-brand-paper/85 md:text-xl"
        >
          Nashik's most aesthetic café &amp; event space. Bold colors, artisan coffee, soulful food,
          and a cat or two. Featured in <span className="font-semibold text-brand-paper">ELLE DECOR India</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollToId("#menu")}
            data-testid="hero-menu-btn"
            className="btn-gold rounded-full px-8 py-4 font-inter text-base font-semibold transition-transform duration-300 hover:scale-105"
          >
            Explore the Menu
          </button>
          <button
            onClick={() => scrollToId("#story")}
            data-testid="hero-story-btn"
            className="rounded-full border border-brand-paper/50 px-8 py-4 font-inter text-base font-semibold text-brand-paper transition-colors duration-300 hover:border-brand-peach hover:bg-brand-peach hover:text-brand-charcoal"
          >
            Our Story
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToId("#story")}
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 lg:bottom-8"
        aria-label="Scroll to explore"
      >
        <span className="font-caveat text-lg text-brand-paper/80">Scroll to explore</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <PawIcon className="h-5 w-5 text-brand-lantern" />
        </motion.span>
      </motion.button>
    </section>
  );
}
