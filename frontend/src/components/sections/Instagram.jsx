import { Heart, Instagram } from "lucide-react";
import { FadeUp } from "@/components/motion/Reveal";
import { INSTA, IMAGES, CONTACT } from "@/data/site";

export default function InstagramFeed() {
  return (
    <section className="bg-brand-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <FadeUp>
              <h2 className="font-outfit text-4xl font-black uppercase tracking-tight text-brand-charcoal md:text-5xl">
                The 'Gram Life{" "}
                <span className="font-fraunces italic lowercase text-brand-peach">@fourlostcats</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.05}>
              <p className="mt-3 font-jakarta text-lg text-brand-charcoal/70">
                Coffee, cats, colors — our feed is as aesthetic as our café.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="instagram-follow-btn"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-inter text-sm font-semibold transition-transform duration-300 hover:scale-105"
            >
              <Instagram className="h-4 w-4" /> Follow the Cats
            </a>
          </FadeUp>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {INSTA.map((key, i) => (
            <a
              key={i}
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl"
              data-testid={`insta-post-${i}`}
            >
              <img
                src={IMAGES[key]}
                alt="Four Lost Cats Instagram post"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand-charcoal/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Heart className="h-8 w-8 fill-brand-paper text-brand-paper" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
