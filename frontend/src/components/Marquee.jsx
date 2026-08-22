export default function Marquee({ items, reverse = false, className = "", textClass = "" }) {
  const content = (
    <div className={`flex shrink-0 items-center ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
      {items.map((it, i) => (
        <span key={i} className={`mx-6 flex items-center gap-6 whitespace-nowrap ${textClass}`}>
          {it}
          <span className="opacity-40">🐾</span>
        </span>
      ))}
      {items.map((it, i) => (
        <span key={`b${i}`} className={`mx-6 flex items-center gap-6 whitespace-nowrap ${textClass}`}>
          {it}
          <span className="opacity-40">🐾</span>
        </span>
      ))}
    </div>
  );
  return <div className={`flex overflow-hidden ${className}`}>{content}</div>;
}
