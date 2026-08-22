import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeUp } from "@/components/motion/Reveal";
import { GALLERY, IMAGES } from "@/data/site";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function Card({ item, i }) {
  return (
    <div
      className="group relative h-[62vh] w-[78vw] shrink-0 overflow-hidden rounded-3xl sm:w-[52vw] lg:w-[36vw]"
      style={{ marginTop: i % 2 ? "3rem" : 0 }}
    >
      <img
        src={IMAGES[item.img]}
        alt={item.caption}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent" />
      <span className="absolute bottom-5 left-5 font-caveat text-2xl text-brand-paper">{item.caption}</span>
    </div>
  );
}

export default function Gallery() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-74%"]);

  const header = (
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
      <FadeUp>
        <h2 className="font-outfit text-4xl font-black uppercase tracking-tight text-brand-paper md:text-6xl">
          Step Inside
        </h2>
      </FadeUp>
      <FadeUp delay={0.06}>
        <p className="mt-3 font-caveat text-2xl text-brand-lantern">No reservations needed for a sneak peek 🐱</p>
      </FadeUp>
    </div>
  );

  if (isMobile) {
    return (
      <section id="gallery" className="bg-brand-charcoal py-24">
        {header}
        <div className="mt-10 grid grid-cols-2 gap-3 px-5">
          {GALLERY.map((item) => (
            <div key={item.img} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img src={IMAGES[item.img]} alt={item.caption} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent" />
              <span className="absolute bottom-2 left-2 font-caveat text-base text-brand-paper">{item.caption}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="bg-brand-charcoal">
      <div className="pt-24">{header}</div>
      <div ref={targetRef} className="relative h-[280vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-7 pl-8 pr-[20vw]">
            {GALLERY.map((item, i) => (
              <Card key={item.img} item={item} i={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
