import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export const MaskLine = ({ children, delay = 0, ready = true, className = "" }) => (
  <span className="block overflow-hidden pb-[0.09em]">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "115%" }}
      animate={ready ? { y: "0%" } : { y: "115%" }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

export const FadeUp = ({ children, delay = 0, y = 42, className = "", amount = 0.25 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount }}
    transition={{ duration: 0.85, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

export const TiltCard = ({ children, className = "", intensity = 8, ...props }) => {
  const ref = useRef();
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * intensity}deg) rotateX(${-py * intensity}deg) translateY(-8px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`tilt-card ${className}`} {...props}>
      {children}
    </div>
  );
};

const easeOutCubic = (p) => 1 - Math.pow(1 - p, 3);

export const Counter = ({ value, decimals = 0, suffix = "", duration = 1700 }) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start;
    let raf;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      setN(value * easeOutCubic(p));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
};
