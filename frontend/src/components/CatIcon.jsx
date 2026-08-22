export const CatIcon = ({ className = "", style }) => (
  <svg viewBox="0 0 120 132" className={className} style={style} fill="currentColor" aria-hidden="true">
    <path d="M36 34 L29 6 L55 27 Z" />
    <path d="M84 34 L91 6 L65 27 Z" />
    <circle cx="60" cy="47" r="26" />
    <path d="M33 71 Q60 60 87 71 Q99 94 89 122 L31 122 Q21 94 33 71 Z" />
    <path d="M87 116 Q118 112 111 80 Q108 66 95 71 Q105 73 103 86 Q101 103 81 107 Z" />
  </svg>
);

export const PawIcon = ({ className = "", style }) => (
  <svg viewBox="0 0 64 64" className={className} style={style} fill="currentColor" aria-hidden="true">
    <ellipse cx="32" cy="42" rx="15" ry="13" />
    <ellipse cx="14" cy="26" rx="6" ry="8" />
    <ellipse cx="27" cy="18" rx="6" ry="8.5" />
    <ellipse cx="37" cy="18" rx="6" ry="8.5" />
    <ellipse cx="50" cy="26" rx="6" ry="8" />
  </svg>
);

// Very subtle drifting cat silhouettes for section backgrounds
export const FloatingCats = ({ color = "rgba(255,248,240,0.06)" }) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <CatIcon
      className="absolute h-24 w-24"
      style={{ color, top: "18%", left: "-6%", animation: "drift 34s linear infinite" }}
    />
    <CatIcon
      className="absolute h-16 w-16"
      style={{ color, top: "62%", left: "-6%", animation: "drift 46s linear infinite", animationDelay: "8s" }}
    />
  </div>
);
