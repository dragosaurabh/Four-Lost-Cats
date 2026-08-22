import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = () => setMatches(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

export function useSupports3D() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [webgl, setWebgl] = useState(true);
  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      const gl = c.getContext("webgl2") || c.getContext("webgl");
      setWebgl(!!gl);
    } catch {
      setWebgl(false);
    }
  }, []);
  return webgl && !isMobile && !reduce;
}
