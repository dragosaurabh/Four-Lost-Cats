import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "@/components/motion/Reveal";
import { DESIGN_BLOCKS, IMAGES } from "@/data/site";

function Block({ block, index }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const flip = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`relative grid items-center gap-8 md:gap-14 lg:grid-cols-2 ${flip ? "lg:[direction:rtl]" : ""}`}
    >
      <FadeUp className="[direction:ltr]">
        <div className="group relative h-[340px] overflow-hidden rounded-3xl shadow-[0_30px_60px_rgba(27,58,92,0.35)] md:h-[480px]">
          <motion.img
            src={IMAGES[block.img]}
            alt={block.heading}
            style={{ y }}
            className="absolute inset-0 h-[120%] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute left-6 top-5 font-outfit text-7xl font-black text-white/80 mix-blend-overlay md:text-8xl">
            {block.n}
          </span>
        </div>
      </FadeUp>
      <div className="[direction:ltr]">
        <FadeUp>
          <h3 className="font-outfit text-3xl font-bold leading-tight text-brand-charcoal md:text-4xl">
            {block.heading}
          </h3>
        </FadeUp>
        <FadeUp delay={0.08}>
          <p className="mt-5 font-jakarta text-lg leading-relaxed text-brand-charcoal/70">{block.text}</p>
        </FadeUp>
      </div>
    </div>
  );
}

export default function Design() {
  return (
    <section
      id="design"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ background: "linear-gradient(180deg,#2B5A8C 0%, #7f7ea0 34%, #F5A882 70%, #FCCAB4 100%)" }}
    >
      {/* floating paper-lantern dots */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-brand-lantern/40 blur-[2px] animate-floaty"
            style={{
              width: 14 + (i % 3) * 8,
              height: 14 + (i % 3) * 8,
              left: `${(i * 11 + 5) % 95}%`,
              top: `${(i * 17) % 80}%`,
              animationDelay: `${i * 0.6}s`,
              boxShadow: "0 0 24px rgba(255,214,133,0.6)",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-16 max-w-3xl">
          <FadeUp>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-brand-paper">The Space</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="font-outfit text-4xl font-black uppercase leading-[0.95] tracking-tight text-brand-paper md:text-6xl">
              A Space Featured in <span className="font-fraunces italic lowercase">Elle Decor</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-charcoal/80 px-5 py-2.5 shadow-lg">
              <span className="font-inter text-sm font-semibold text-brand-lantern">
                ✨ Featured in ELLE DECOR India
              </span>
            </div>
          </FadeUp>
        </div>

        <div className="space-y-20 md:space-y-28">
          {DESIGN_BLOCKS.map((b, i) => (
            <Block key={b.n} block={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
