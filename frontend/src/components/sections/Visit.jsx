import { MapPin, Phone, Instagram, Bike, Clock } from "lucide-react";
import { FadeUp } from "@/components/motion/Reveal";
import { CONTACT, BADGES } from "@/data/site";

const buttons = [
  { icon: MapPin, label: "Get Directions", href: CONTACT.maps, testid: "visit-directions" },
  { icon: Phone, label: "Call Us", href: CONTACT.phoneHref, testid: "visit-call" },
  { icon: Instagram, label: "Follow on Instagram", href: CONTACT.instagram, testid: "visit-instagram" },
  { icon: Bike, label: "Order on Zomato", href: CONTACT.zomato, testid: "visit-order" },
];

export default function Visit() {
  return (
    <section
      id="visit"
      className="relative py-24 md:py-36"
      style={{ background: "linear-gradient(180deg,#FCCAB4,#FFF8F0)" }}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeUp>
            <div className="h-full rounded-3xl glass-light p-8 md:p-10">
              <h2 className="font-outfit text-4xl font-black uppercase tracking-tight text-brand-charcoal md:text-5xl">
                Come Find Us
              </h2>
              <p className="mt-2 font-caveat text-2xl text-brand-peach">The cats are waiting 🐱</p>

              <div className="mt-8 space-y-5 font-jakarta text-brand-charcoal/80">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-peach" />
                  <p>{CONTACT.address}</p>
                </div>
                <a href={CONTACT.phoneHref} className="flex items-center gap-3 hover:text-brand-peach" data-testid="visit-phone-link">
                  <Phone className="h-5 w-5 shrink-0 text-brand-peach" /> {CONTACT.phone}
                </a>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-peach">
                  <Instagram className="h-5 w-5 shrink-0 text-brand-peach" /> {CONTACT.instagramHandle}
                </a>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-peach" />
                  <div>
                    <p className="font-semibold text-brand-charcoal">Every Day · {CONTACT.hours}</p>
                    <p className="font-caveat text-lg text-brand-charcoal/60">
                      Yes, we're open every single day. Even on Mondays. 🐱
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {buttons.map((b) => (
                  <a
                    key={b.label}
                    href={b.href}
                    target={b.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    data-testid={b.testid}
                    className="flex items-center justify-center gap-2 rounded-full border border-brand-charcoal/15 bg-brand-charcoal px-5 py-3 font-inter text-sm font-semibold text-brand-paper transition-transform duration-300 hover:scale-[1.03]"
                  >
                    <b.icon className="h-4 w-4 text-brand-lantern" /> {b.label}
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="h-full min-h-[380px] overflow-hidden rounded-3xl shadow-[0_30px_70px_rgba(27,58,92,0.25)]">
              <iframe
                title="Four Lost Cats location on Google Maps"
                src={CONTACT.mapsEmbed}
                className="h-full min-h-[380px] w-full"
                style={{ border: 0, filter: "grayscale(0.2) contrast(1.05) saturate(1.1)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeUp>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {BADGES.map((b) => (
            <FadeUp key={b.label}>
              <div className="h-full rounded-2xl bg-brand-charcoal/90 p-4 text-center">
                <span className="text-2xl">{b.icon}</span>
                <p className="mt-2 font-inter text-sm font-semibold text-brand-lantern">{b.label}</p>
                <p className="mt-1 font-jakarta text-xs text-brand-paper/60">{b.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
