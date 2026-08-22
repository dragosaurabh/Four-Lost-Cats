import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, TiltCard } from "@/components/motion/Reveal";
import { MENU, IMAGES, CONTACT } from "@/data/site";

const CATS = Object.keys(MENU);

export default function Menu() {
  const [active, setActive] = useState(CATS[0]);
  const cat = MENU[active];

  return (
    <section id="menu" className="relative bg-brand-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <FadeUp>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-brand-gold">What We Serve</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="font-outfit text-4xl font-black uppercase leading-[0.95] tracking-tight text-brand-charcoal md:text-6xl">
              Coffee, Crafted.{" "}
              <span className="font-fraunces italic lowercase text-brand-peach">Food, with soul.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-5 font-jakarta text-lg text-brand-charcoal/70">
              From specialty brews to comfort food — our menu is a love letter to flavors done right.
            </p>
          </FadeUp>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="no-scrollbar sticky top-16 z-30 -mx-5 mb-12 flex gap-2 overflow-x-auto px-5 py-3 sm:mx-0 sm:px-0"
        >
          {CATS.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              data-testid={`menu-tab-${c.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className={`relative whitespace-nowrap rounded-full px-5 py-2.5 font-inter text-sm font-semibold transition-colors duration-300 ${
                active === c ? "text-brand-cream" : "text-brand-charcoal/70 hover:text-brand-charcoal"
              }`}
            >
              {active === c && (
                <motion.span
                  layoutId="menu-pill"
                  className="absolute inset-0 rounded-full bg-brand-charcoal"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative">
                {MENU[c].icon} {c}
              </span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <div role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {cat.items.map((item) => (
                <TiltCard
                  key={item.name}
                  data-testid={`menu-item-${item.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className={`glass-light overflow-hidden rounded-3xl ${
                    item.badge ? "ring-1 ring-brand-gold/60" : ""
                  }`}
                >
                  {item.img && (
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={IMAGES[item.img]}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      {item.badge && (
                        <span className="absolute right-3 top-3 rounded-full bg-brand-charcoal/85 px-3 py-1 font-inter text-xs font-semibold text-brand-lantern">
                          {item.badge === "Staff Pick" ? "Staff Pick 🐱" : "Most Loved ❤️"}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-mono text-base font-medium text-brand-charcoal">{item.name}</h3>
                      <span className="shrink-0 font-outfit text-lg font-bold text-brand-gold">₹{item.price}</span>
                    </div>
                    <p className="mt-2 font-jakarta text-sm leading-relaxed text-brand-charcoal/60">{item.desc}</p>
                    {item.badge && !item.img && (
                      <span className="mt-3 inline-block rounded-full bg-brand-gold/15 px-3 py-1 font-inter text-xs font-semibold text-brand-espresso">
                        {item.badge === "Staff Pick" ? "Staff Pick 🐱" : "Most Loved ❤️"}
                      </span>
                    )}
                  </div>
                </TiltCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-12 text-center font-caveat text-lg text-brand-charcoal/60">
          Prices may vary seasonally. For the latest menu, visit us or check our Instagram{" "}
          <a href={CONTACT.instagram} className="text-brand-peach underline" target="_blank" rel="noopener noreferrer">
            @fourlostcats
          </a>{" "}
          🐱
        </p>
      </div>
    </section>
  );
}
