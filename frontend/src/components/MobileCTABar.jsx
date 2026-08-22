import { MapPin, Phone, Instagram, Bike } from "lucide-react";
import { CONTACT } from "@/data/site";

const actions = [
  { icon: MapPin, label: "Visit", href: CONTACT.maps, testid: "cta-visit" },
  { icon: Phone, label: "Call", href: CONTACT.phoneHref, testid: "cta-call" },
  { icon: Instagram, label: "Insta", href: CONTACT.instagram, testid: "cta-insta" },
  { icon: Bike, label: "Order", href: CONTACT.zomato, testid: "cta-order" },
];

export default function MobileCTABar() {
  return (
    <div
      data-testid="mobile-cta-bar"
      className="fixed inset-x-0 bottom-0 z-[90] grid grid-cols-4 border-t border-white/10 glass-dark lg:hidden"
    >
      {actions.map((a) => (
        <a
          key={a.label}
          href={a.href}
          target={a.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          data-testid={a.testid}
          className="flex flex-col items-center gap-1 py-3 text-brand-paper transition-colors duration-300 active:bg-white/10"
        >
          <a.icon className="h-5 w-5 text-brand-lantern" />
          <span className="font-inter text-[11px] font-medium">{a.label}</span>
        </a>
      ))}
    </div>
  );
}
