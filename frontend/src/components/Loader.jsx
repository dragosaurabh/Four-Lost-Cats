import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CatIcon } from "@/components/CatIcon";

export default function Loader({ onDone }) {
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const startT = Date.now();
    const dur = 1900;
    const id = setInterval(() => {
      const p = Math.min((Date.now() - startT) / dur, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p >= 1) clearInterval(id);
    }, 40);
    const t1 = setTimeout(() => setGone(true), dur + 350);
    const t2 = setTimeout(() => onDone && onDone(), dur + 1100);
    return () => {
      clearInterval(id);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          data-testid="loading-screen"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-charcoal"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* lantern glow */}
          <motion.div
            className="absolute h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,214,133,0.35), transparent 70%)" }}
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1.6, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
          <div className="relative flex items-end gap-3">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <CatIcon
                  className="h-12 w-12 sm:h-16 sm:w-16"
                  style={{ color: i % 2 === 0 ? "#F5A882" : "#FFD685" }}
                />
              </motion.div>
            ))}
          </div>
          <motion.h2
            className="relative mt-8 font-outfit text-2xl font-black uppercase tracking-[0.35em] text-brand-paper sm:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            Four Lost Cats
          </motion.h2>
          <div className="relative mt-4 font-mono text-sm tracking-widest text-brand-lantern">
            {count}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
