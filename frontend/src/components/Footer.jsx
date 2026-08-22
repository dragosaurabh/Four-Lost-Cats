import { useState } from "react";
import { motion } from "framer-motion";
import { CatIcon } from "@/components/CatIcon";
import Marquee from "@/components/Marquee";
import { NAV_LINKS, CONTACT } from "@/data/site";
import { scrollToId } from "@/lib/scroll";

const marqueeItems = [
  "COME FOR THE COFFEE",
  "STAY FOR THE CATS",
  "SIT UNDER THE LANTERNS",
  "THE PEACH LEVEL HITS DIFFERENT",
  "NASHIK'S MOST PHOTOGENIC LIVING ROOM",
];

export default function Footer() {
  const [hover, setHover] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-brand-charcoal">
      <div className="border-y border-white/10 py-6">
        <Marquee
          items={marqueeItems}
          textClass="font-outfit text-3xl font-black uppercase text-outline text-brand-peach md:text-5xl"
        />
      </div>

      {/* cat easter egg strip */}
      <div
        className="relative h-16 cursor-pointer"
        onMouseEnter={() => setHover(true)}
        data-testid="cat-easter-egg"
      >
        <motion.div
          className="absolute bottom-2"
          initial={{ x: "-10%" }}
          animate={hover ? { x: "100vw" } : { x: "-10%" }}
          transition={{ duration: 4, ease: "linear" }}
          onAnimationComplete={() => setHover(false)}
        >
          <CatIcon className="h-12 w-12 text-brand-peach/70" />
        </motion.div>
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-caveat text-lg text-brand-paper/30">
          psst… hover here 🐾
        </span>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <CatIcon className="h-7 w-7 text-brand-peach" />
              <span className="font-outfit text-lg font-extrabold uppercase tracking-tight text-brand-paper">
                Four Lost Cats
              </span>
            </div>
            <p className="mt-3 font-caveat text-xl text-brand-lantern">The Coolest Café in Town 🐱</p>
            <p className="mt-4 max-w-xs font-jakarta text-sm leading-relaxed text-brand-paper/60">
              Nashik's most aesthetic, cat-friendly café &amp; event space. Bold colors, artisan coffee,
              soulful food — and yes, real cats.
            </p>
          </div>

          <div>
            <h3 className="font-inter text-sm font-semibold uppercase tracking-widest text-brand-paper/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(l.href);
                    }}
                    className="link-underline font-jakarta text-sm text-brand-paper/75 hover:text-brand-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-inter text-sm font-semibold uppercase tracking-widest text-brand-paper/50">
              Connect
            </h3>
            <ul className="mt-4 space-y-2.5 font-jakarta text-sm text-brand-paper/75">
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-brand-paper">{CONTACT.phone}</a>
              </li>
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-paper">
                  {CONTACT.instagramHandle}
                </a>
              </li>
              <li>
                <a href={CONTACT.zomato} target="_blank" rel="noopener noreferrer" className="hover:text-brand-paper">
                  View on Zomato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-inter text-sm font-semibold uppercase tracking-widest text-brand-paper/50">
              Hours
            </h3>
            <p className="mt-4 font-jakarta text-sm text-brand-paper/75">Open Every Day</p>
            <p className="font-outfit text-lg font-bold text-brand-peach">9:30 AM – 11:00 PM</p>
            <p className="mt-2 font-caveat text-lg text-brand-paper/50">
              We never close. The cats won't allow it.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 md:flex-row">
          <p className="font-jakarta text-xs text-brand-paper/50">
            © 2025 Four Lost Cats, Nashik. All Rights Reserved.
          </p>
          <p className="font-jakarta text-xs text-brand-paper/50">
            Website crafted with 🐱 by{" "}
            <a href="https://ready2up.com" target="_blank" rel="noopener noreferrer" className="text-brand-peach hover:underline">
              Ready2Up
            </a>{" "}
            · Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
