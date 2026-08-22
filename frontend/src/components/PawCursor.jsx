import { useEffect, useRef, useState } from "react";
import { PawIcon } from "@/components/CatIcon";

export default function PawCursor() {
  const [paws, setPaws] = useState([]);
  const state = useRef({ lastX: null, lastY: null, side: 1, id: 0 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduce) return;

    const onMove = (e) => {
      const s = state.current;
      if (s.lastX == null) {
        s.lastX = e.clientX;
        s.lastY = e.clientY;
        return;
      }
      const dx = e.clientX - s.lastX;
      const dy = e.clientY - s.lastY;
      const dist = Math.hypot(dx, dy);
      if (dist < 46) return;

      const angle = Math.atan2(dy, dx);
      const off = 11 * s.side; // alternate left/right footprints
      const px = e.clientX + Math.cos(angle + Math.PI / 2) * off;
      const py = e.clientY + Math.sin(angle + Math.PI / 2) * off;
      const rot = (angle * 180) / Math.PI + 90;
      const id = s.id++;

      s.side *= -1;
      s.lastX = e.clientX;
      s.lastY = e.clientY;

      setPaws((prev) => [...prev, { id, x: px, y: py, rot }]);
      setTimeout(() => setPaws((prev) => prev.filter((p) => p.id !== id)), 850);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9997]" aria-hidden="true">
      {paws.map((p) => (
        <span
          key={p.id}
          className="absolute"
          style={{ left: p.x, top: p.y, transform: `translate(-50%, -50%) rotate(${p.rot}deg)` }}
        >
          <span className="block" style={{ animation: "pawFade 0.85s ease forwards" }}>
            <PawIcon
              className="h-5 w-5"
              style={{ color: "#E8A838", filter: "drop-shadow(0 1px 2px rgba(26,26,46,0.55))" }}
            />
          </span>
        </span>
      ))}
    </div>
  );
}
