import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "@/components/motion/Reveal";
import { CatIcon, FloatingCats } from "@/components/CatIcon";
import { IMAGES } from "@/data/site";
import { scrollToId } from "@/lib/scroll";

export default function Origin() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="story" ref={ref} className="relative overflow-hidden bg-brand-charcoal py-24 md:py-36">
      <FloatingCats />
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[55%_45%] lg:gap-16">
        <FadeUp className="relative overflow-hidden rounded-3xl">
          <div className="relative h-[420px] overflow-hidden rounded-3xl md:h-[600px]">
            <motion.img
              src={IMAGES.heroInterior}
              alt="Blue-toned ground floor of Four Lost Cats with glowing paper lanterns"
              style={{ y }}
              className="absolute inset-0 h-[120%] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-5 left-5 rounded-2xl glass-dark px-5 py-3">
            <span className="font-caveat text-2xl text-brand-lantern">Featured in ELLE DECOR ✨</span>
          </div>
        </FadeUp>

        <div>
          <FadeUp>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-brand-gold">Est. Nashik</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="font-fraunces text-4xl italic leading-tight text-brand-paper md:text-5xl">
              We Didn't Plan a Café. We Built a Feeling.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-6 space-y-4 font-jakarta text-base leading-relaxed text-brand-paper/75">
              <p>
                Four friends. Four cat lovers. One shared dream — to create a space in Nashik that felt
                like coming home. Not just another café, but a sanctuary of color, warmth, and the quiet
                company of cats.
              </p>
              <p>
                Designed by the visionary architects at <span className="text-brand-paper">LADLAB</span>{" "}
                (Saniya Jejani &amp; Sagar Lohar), our space is a bold statement in color blocking — a
                calming blue ground floor, a warm peachy mezzanine, and a ceiling draped in ethereal white
                paper lanterns that makes you look up and breathe.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <blockquote className="mt-8 border-l-2 border-brand-peach pl-5">
              <p className="font-caveat text-2xl leading-snug text-brand-peach md:text-3xl">
                "We named ourselves after the four lost cats we once were — searching for a place that felt
                right. We built it instead." 🐱
              </p>
            </blockquote>
          </FadeUp>
          <FadeUp delay={0.2}>
            <button
              onClick={() => scrollToId("#design")}
              data-testid="origin-more-btn"
              className="link-underline mt-8 inline-flex items-center gap-2 font-inter text-sm font-semibold text-brand-peach"
            >
              Read the Full Story
              <span aria-hidden>→</span>
            </button>
          </FadeUp>
          <CatIcon className="mt-10 h-14 w-14 text-brand-paper/15" />
        </div>
      </div>
    </section>
  );
}
