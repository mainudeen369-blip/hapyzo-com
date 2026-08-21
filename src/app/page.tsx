import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const services = [
  {
    title: "Brand websites",
    body: "Fast, conversion-ready marketing sites with SEO foundations and a visual system your team can grow into.",
  },
  {
    title: "Web & admin apps",
    body: "Operational platforms — dashboards, portals, ledgers, and role-based workflows that match how you actually work.",
  },
  {
    title: "Mobile apps",
    body: "Android and cross-platform apps for customers and field teams — bookings, payments, approvals, live features.",
  },
  {
    title: "Automation & AI",
    body: "WhatsApp journeys, reminders, analytics, and AI-assisted features that cut manual follow-ups.",
  },
];

const products = [
  {
    tag: "SaaS",
    title: "Property Manager",
    body: "Our own product for hostels, hotels, and apartments — rent, rooms, receipts, SMS, and live occupancy dashboards.",
    href: "https://propertymanager.hapyzo.com/",
    cta: "Open Property Manager",
  },
  {
    tag: "Product",
    title: "Speaklo",
    body: "AI English speaking coach with live practice calls, lessons, and premium unlocks — payments powered by Razorpay.",
    href: "/speaklo",
    cta: "View Speaklo & payments",
  },
  {
    tag: "Tool",
    title: "Code Sharing",
    body: "Share snippets or documents through secure, password-protected links — built for teams that move fast.",
    href: "https://codesharing.hapyzo.com",
    cta: "Visit tool",
  },
  {
    tag: "Tool",
    title: "Resume Builder",
    body: "Create polished resumes in minutes and export ready-to-send PDFs.",
    href: "https://resumebuilder.hapyzo.com",
    cta: "Build a resume",
  },
  {
    tag: "Suite",
    title: "HosManager",
    body: "The fuller property operations suite we evolve with clients — staff apps, alerts, and multi-property control.",
    href: "https://hosmanager.hapyzo.com",
    cta: "Explore suite",
  },
];

const clients = [
  {
    name: "Friendly Matrimony",
    type: "Website · Mobile app · Web platform",
    note: "Matchmaking product experience across web and Android.",
  },
  {
    name: "Sarathy Cabs",
    type: "Website · Booking flows",
    note: "Cab brand presence and customer-facing digital journeys.",
  },
  {
    name: "Brilliant Matriculation School",
    type: "School website & digital presence",
    note: "Institutional site built for parents, admissions, and trust.",
  },
  {
    name: "JRK Construction",
    type: "Singapore · Company website",
    note: "International construction brand site with a premium footprint.",
  },
  {
    name: "Sri Aradhya Hostel",
    type: "Property Manager SaaS rollout",
    note: "Rent, WhatsApp reminders, occupancy, and staff workflows live.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="top">
          <div className="hero-orb one" aria-hidden />
          <div className="hero-orb two" aria-hidden />
          <div className="container hero-copy">
            <Reveal>
              <p className="eyebrow">Hapyzo Technologies</p>
              <h1 className="display">
                Digital products that make a business feel <span className="accent">world-class</span> from day one.
              </h1>
              <p className="hero-lead">
                We design and ship websites, mobile apps, web platforms, and our own SaaS — Property Manager,
                Speaklo, and tools already live under hapyzo.com.
              </p>
              <div className="hero-actions">
                <Link href="/#contact" className="btn btn-primary">
                  Plan a project
                </Link>
                <Link href="/#products" className="btn btn-ghost">
                  See products
                </Link>
              </div>
              <div className="hero-meta">
                <div>
                  <strong>Web · App · SaaS</strong>
                  End-to-end delivery
                </div>
                <div>
                  <strong>Founder-led</strong>
                  Direct access to builders
                </div>
                <div>
                  <strong>India + SG</strong>
                  Clients across markets
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <h2 className="display">What we build</h2>
                <p>
                  One studio for the surfaces that matter — brand sites, daily-use apps, and automation that
                  keeps teams and customers in sync.
                </p>
              </div>
            </Reveal>
            <div className="services-grid">
              {services.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <article className="panel">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="products">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <h2 className="display">Products we&apos;ve launched</h2>
                <p>
                  Property Manager is our own SaaS. Speaklo is live for English practice. Supporting tools ship
                  under the Hapyzo domain.
                </p>
              </div>
            </Reveal>
            <div className="products-grid">
              {products.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <article className="panel">
                    <span className="tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <a
                      className="product-link"
                      href={item.href}
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {item.cta} →
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <h2 className="display">Clients &amp; delivery</h2>
                <p>
                  Real products for real operators — matrimony, mobility, education, construction, and
                  property operations.
                </p>
              </div>
            </Reveal>
            <div className="clients-grid" style={{ marginBottom: "1.5rem" }}>
              {clients.map((c, i) => (
                <Reveal key={c.name} delay={i * 60}>
                  <article className="panel client-card">
                    <div>
                      <h3>{c.name}</h3>
                      <p className="type">{c.type}</p>
                    </div>
                    <p>{c.note}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="spotlight">
                <div className="spotlight-copy">
                  <p className="eyebrow" style={{ marginBottom: "1rem" }}>
                    Spotlight · Property Manager
                  </p>
                  <h2 className="display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", margin: "0 0 0.8rem" }}>
                    Own SaaS for hostels, hotels &amp; apartments
                  </h2>
                  <p style={{ color: "var(--muted)", margin: "0 0 1.25rem" }}>
                    Collect rent, manage rooms and guests, send branded receipts and SMS, and see occupancy and
                    revenue without spreadsheet chaos. Proven with operators like Sri Aradhya Hostel.
                  </p>
                  <div className="hero-actions" style={{ marginBottom: 0 }}>
                    <a
                      href="https://propertymanager.hapyzo.com/"
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Launch Property Manager
                    </a>
                    <Link href="/#contact" className="btn btn-ghost">
                      Ask for a demo
                    </Link>
                  </div>
                </div>
                <div className="spotlight-visual">
                  <div className="mark">
                    <Image src="/logo.svg" alt="" width={96} height={96} />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <Reveal>
              <div className="contact">
                <div className="contact-grid">
                  <div>
                    <p className="eyebrow">Let&apos;s build</p>
                    <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0 0 0.9rem" }}>
                      Tell us what you need — we reply within a day.
                    </h2>
                    <p style={{ color: "var(--muted)", margin: "0 0 1.5rem", maxWidth: "36rem" }}>
                      Share your idea or pain point. You&apos;ll get a clear plan with timelines, stack choices,
                      and founder-friendly pricing.
                    </p>
                    <div className="hero-actions" style={{ marginBottom: 0 }}>
                      <a href="mailto:hapyzotechnologies@gmail.com" className="btn btn-primary">
                        Email Hapyzo
                      </a>
                      <a
                        href="https://wa.me/918610159248"
                        className="btn btn-ghost"
                        target="_blank"
                        rel="noreferrer"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                  <div>
                    <p style={{ margin: "0 0 0.35rem", color: "var(--muted)", fontSize: "0.85rem" }}>Primary email</p>
                    <a className="line" href="mailto:hapyzotechnologies@gmail.com">
                      hapyzotechnologies@gmail.com
                    </a>
                    <p style={{ margin: "1.1rem 0 0.35rem", color: "var(--muted)", fontSize: "0.85rem" }}>Phone / WhatsApp</p>
                    <a className="line" href="tel:+918610159248">
                      +91 86101 59248
                    </a>
                    <p style={{ margin: "1.1rem 0 0.35rem", color: "var(--muted)", fontSize: "0.85rem" }}>Property Manager</p>
                    <a className="line" href="https://propertymanager.hapyzo.com/" target="_blank" rel="noreferrer">
                      propertymanager.hapyzo.com
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
