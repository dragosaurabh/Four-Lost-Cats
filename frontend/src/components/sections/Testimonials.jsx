import { Star } from "lucide-react";
import { FadeUp, Counter } from "@/components/motion/Reveal";
import { PawIcon } from "@/components/CatIcon";
import { TESTIMONIALS, STATS } from "@/data/site";

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < n ? "fill-brand-gold text-brand-gold" : "text-brand-blue/30"}`}
        />
      ))}
    </div>
  );
}

function TCard({ t }) {
  return (
    <div className="w-[80vw] shrink-0 rounded-3xl glass-light p-6 sm:w-[380px]">
      <Stars n={t.stars} />
      <p className="mt-4 font-jakarta text-base leading-relaxed text-brand-charcoal/80">"{t.text}"</p>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-brand-blue-mid">— {t.src}</p>
    </div>
  );
}

export default function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="relative overflow-hidden bg-brand-blue-soft py-24 md:py-32">
      <PawIcon className="pointer-events-none absolute left-[6%] top-16 h-24 w-24 text-brand-blue/5" />
      <PawIcon className="pointer-events-none absolute right-[10%] bottom-24 h-32 w-32 text-brand-blue/5" />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <FadeUp>
          <h2 className="max-w-3xl font-outfit text-4xl font-black uppercase leading-[0.95] tracking-tight text-brand-charcoal md:text-6xl">
            What <span className="font-fraunces italic lowercase text-brand-peach">Nashik</span> Says
          </h2>
        </FadeUp>
      </div>

      <div className="group relative mt-12 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex animate-ticker gap-6 group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <TCard key={i} t={t} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-6 rounded-3xl bg-brand-charcoal p-8 md:grid-cols-4 md:p-12">
          {STATS.map((s) => (
            <FadeUp key={s.label} className="text-center">
              <div className="font-outfit text-4xl font-black text-brand-peach md:text-5xl">
                <Counter value={s.value} decimals={s.decimals || 0} suffix={s.suffix} />
              </div>
              <p className="mt-2 font-inter text-sm text-brand-paper/70">{s.label}</p>
            </FadeUp>
          ))}
        </div>
        <p className="mt-6 text-center font-inter text-sm font-semibold uppercase tracking-widest text-brand-charcoal/50">
          Featured in ELLE DECOR · 4.1★ Google · 3.9★ Zomato · 4.2★ JustDial
        </p>
      </div>
    </section>
  );
}
