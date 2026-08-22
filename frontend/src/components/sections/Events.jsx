import { FadeUp } from "@/components/motion/Reveal";
import { EVENTS, IMAGES, CONTACT } from "@/data/site";

export default function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ background: "linear-gradient(150deg,#F5A882,#FFB899 55%,#FCCAB4)" }}
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <FadeUp>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-brand-espresso">
              Events &amp; Private Hire
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="font-outfit text-4xl font-black uppercase leading-[0.95] tracking-tight text-brand-charcoal md:text-6xl">
              Four Walls.{" "}
              <span className="font-fraunces italic lowercase text-brand-paper">Infinite possibilities.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-5 max-w-lg font-jakarta text-lg text-brand-charcoal/75">
              From typography workshops to birthday brunches, our space transforms to fit your vision.
              Host your next gathering at Four Lost Cats.
            </p>
          </FadeUp>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {EVENTS.map((e, i) => (
              <FadeUp key={e.title} delay={0.1 + i * 0.06}>
                <div className="h-full rounded-2xl bg-brand-paper/70 p-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                  <span className="text-2xl">{e.icon}</span>
                  <h3 className="mt-3 font-outfit text-lg font-bold text-brand-charcoal">{e.title}</h3>
                  <p className="mt-1 font-jakarta text-sm text-brand-charcoal/65">{e.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <a
              href={CONTACT.phoneHref}
              data-testid="events-enquire-btn"
              className="btn-gold mt-9 inline-block rounded-full px-8 py-4 font-inter text-base font-semibold transition-transform duration-300 hover:scale-105"
            >
              Enquire About Events →
            </a>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <div className="relative h-[420px] overflow-hidden rounded-3xl shadow-[0_30px_70px_rgba(61,43,31,0.35)] md:h-[600px]">
            <img
              src={IMAGES.eventSpace}
              alt="Café set up for an intimate private event with fairy lights"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl glass-dark px-5 py-3">
              <span className="font-caveat text-2xl text-brand-lantern">Your night, our lanterns 🐱</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
