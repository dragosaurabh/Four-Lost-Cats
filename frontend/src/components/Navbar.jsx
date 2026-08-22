import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/data/site";
import { scrollToId } from "@/lib/scroll";
import { CatIcon } from "@/components/CatIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(href);
  };

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,box-shadow,padding] duration-500 ${
          scrolled ? "glass-dark py-3 shadow-[0_10px_40px_rgba(10,14,26,0.35)]" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8">
          <a
            href="#home"
            onClick={(e) => go(e, "#home")}
            data-testid="logo-link"
            className="group flex items-center gap-2.5"
          >
            <CatIcon className="h-7 w-7 text-brand-peach transition-transform duration-300 group-hover:-rotate-6" />
            <span className="font-outfit text-lg font-extrabold uppercase leading-none tracking-tight text-brand-paper sm:text-xl">
              Four Lost Cats
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="link-underline font-inter text-sm font-medium text-brand-paper/85 transition-colors duration-300 hover:text-brand-paper"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden font-caveat text-xl text-brand-lantern xl:block">
              The Coolest Café in Town
            </span>
            <a
              href={CONTACT.phoneHref}
              data-testid="reserve-btn"
              className="btn-gold hidden rounded-full px-5 py-2.5 font-inter text-sm font-semibold transition-transform duration-300 hover:scale-105 sm:inline-block"
            >
              🐱 Reserve a Table
            </a>
            <button
              onClick={() => setOpen(true)}
              data-testid="mobile-menu-open"
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-brand-paper lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            className="fixed inset-0 z-[110] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0" style={{ background: "linear-gradient(160deg,#1B3A5C,#2B5A8C 45%,#F5A882)" }} />
            <div className="relative flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="font-outfit text-lg font-extrabold uppercase tracking-tight text-brand-paper">
                  Four Lost Cats
                </span>
                <button
                  onClick={() => setOpen(false)}
                  data-testid="mobile-menu-close"
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full glass-dark text-brand-paper"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="mt-10 flex flex-1 flex-col justify-center gap-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => go(e, l.href)}
                    data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="font-outfit text-4xl font-black uppercase tracking-tight text-brand-paper/90 hover:text-brand-lantern"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href={CONTACT.phoneHref}
                className="btn-gold mt-6 rounded-full py-4 text-center font-inter text-base font-semibold"
              >
                🐱 Reserve a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
