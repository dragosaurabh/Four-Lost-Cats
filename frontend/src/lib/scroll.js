export const scrollToId = (href) => {
  const el = document.querySelector(href);
  if (!el) return;
  if (typeof window !== "undefined" && window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -64, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
