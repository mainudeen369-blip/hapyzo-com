import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../../components/Reveal";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Speaklo — AI English Speaking Coach",
  description:
    "Speaklo by Hapyzo Technologies: AI English speaking practice, live partner calls, lessons, and secure Razorpay payments for premium unlocks.",
  alternates: {
    canonical: "https://hapyzo.com/speaklo",
  },
  openGraph: {
    title: "Speaklo by Hapyzo Technologies",
    description:
      "Practice English with AI coaching and live calls. Premium features and in-app purchases via Razorpay.",
    url: "https://hapyzo.com/speaklo",
  },
};

const plans = [
  {
    name: "Practice Free",
    price: "₹0",
    period: "get started",
    features: ["Account & basic practice", "Safety rules & community standards", "Explore lessons"],
    cta: "Contact for app access",
    featured: false,
  },
  {
    name: "Gender Match Unlock",
    price: "Paid",
    period: "in-app · Razorpay",
    features: [
      "Prefer partner gender on live calls",
      "Secure checkout via Razorpay",
      "One-time or pack pricing as shown in app",
    ],
    cta: "Pay with Razorpay",
    featured: true,
  },
  {
    name: "Extra Minutes",
    price: "Packs",
    period: "INR / USD in app",
    features: [
      "Add live speaking minutes",
      "Prices managed in Speaklo admin",
      "Receipt issued after successful payment",
    ],
    cta: "Pay with Razorpay",
    featured: false,
  },
];

export default function SpeakloPage() {
  const paymentLink = process.env.NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK || "";

  return (
    <>
      <SiteHeader />
      <main>
        <section className="speaklo-hero">
          <div className="container">
            <Reveal>
              <p className="eyebrow">Product · Hapyzo Technologies</p>
              <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center" }}>
                <Image src="/speaklo-logo.svg" alt="Speaklo" width={72} height={72} priority />
                <div>
                  <h1 className="display" style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", margin: "0 0 0.5rem" }}>
                    Speaklo
                  </h1>
                  <p style={{ margin: 0, color: "var(--muted)", maxWidth: "36rem" }}>
                    AI English speaking coach with live practice calls, lessons, and premium unlocks. Built and
                    operated by <strong style={{ color: "var(--text)" }}>Hapyzo Technologies</strong>.
                  </p>
                </div>
              </div>
              <div className="hero-actions" style={{ marginTop: "2rem" }}>
                {paymentLink ? (
                  <a href={paymentLink} className="btn btn-gold" target="_blank" rel="noreferrer">
                    Pay securely with Razorpay
                  </a>
                ) : (
                  <a href="mailto:hapyzotechnologies@gmail.com?subject=Speaklo%20payment%20/%20premium" className="btn btn-gold">
                    Request payment link
                  </a>
                )}
                <a href="mailto:hapyzotechnologies@gmail.com" className="btn btn-ghost">
                  Support email
                </a>
                <Link href="/" className="btn btn-ghost">
                  Company home
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" style={{ paddingTop: "1rem" }}>
          <div className="container">
            <Reveal>
              <div className="section-head">
                <h2 className="display">What Speaklo is</h2>
                <p>
                  Speaklo helps learners practice spoken English with AI coaching, structured lessons, and optional
                  live partner sessions. Premium features (such as gender preference matching and extra live minutes)
                  are sold through the app using Razorpay — India’s trusted payment gateway.
                </p>
              </div>
            </Reveal>

            <div className="services-grid" style={{ marginBottom: "3rem" }}>
              {[
                {
                  title: "Merchant",
                  body: "Hapyzo Technologies · Payments for Speaklo digital services and in-app premium features.",
                },
                {
                  title: "Checkout",
                  body: "Razorpay (UPI, cards, netbanking, wallets as enabled on our Razorpay account).",
                },
                {
                  title: "Support",
                  body: "hapyzotechnologies@gmail.com · +91 86101 59248 · Response within 1–2 business days.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <article className="panel">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="section-head">
                <h2 className="display">Premium unlocks</h2>
                <p>
                  Exact amounts are shown in the Speaklo app at checkout. This page is the public product and
                  payment information site for Razorpay verification and customer trust.
                </p>
              </div>
            </Reveal>

            <div className="price-grid" style={{ marginBottom: "3rem" }}>
              {plans.map((plan, i) => (
                <Reveal key={plan.name} delay={i * 80}>
                  <article className={`panel price-card ${plan.featured ? "featured" : ""}`}>
                    <span className="tag">{plan.name}</span>
                    <p className="price">
                      {plan.price} <span>{plan.period}</span>
                    </p>
                    <ul className="policy" style={{ paddingLeft: "1.1rem", margin: "1rem 0 1.25rem" }}>
                      {plan.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    {paymentLink && plan.name !== "Practice Free" ? (
                      <a href={paymentLink} className="btn btn-primary" target="_blank" rel="noreferrer">
                        {plan.cta}
                      </a>
                    ) : (
                      <a
                        href="mailto:hapyzotechnologies@gmail.com?subject=Speaklo%20Razorpay%20payment"
                        className="btn btn-primary"
                      >
                        {plan.cta}
                      </a>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="contact">
                <h2 className="display" style={{ fontSize: "1.6rem", margin: "0 0 1rem" }}>
                  Payment, refunds &amp; policies
                </h2>
                <ul className="policy" style={{ paddingLeft: "1.15rem", margin: "0 0 1.5rem" }}>
                  <li>
                    <strong style={{ color: "var(--text)" }}>Business:</strong> Hapyzo Technologies collects
                    payments for Speaklo digital services via Razorpay.
                  </li>
                  <li>
                    <strong style={{ color: "var(--text)" }}>Currency:</strong> Primarily INR for Indian users;
                    USD options may appear in-app where configured.
                  </li>
                  <li>
                    <strong style={{ color: "var(--text)" }}>Delivery:</strong> Premium unlocks apply to the
                    Speaklo account after successful payment confirmation.
                  </li>
                  <li>
                    <strong style={{ color: "var(--text)" }}>Refunds:</strong> Unused digital unlocks may be
                    reviewed case-by-case within 7 days of purchase. Write to{" "}
                    <a href="mailto:hapyzotechnologies@gmail.com" style={{ color: "var(--accent)" }}>
                      hapyzotechnologies@gmail.com
                    </a>{" "}
                    with your Razorpay payment ID.
                  </li>
                  <li>
                    <strong style={{ color: "var(--text)" }}>Privacy:</strong> We use account and payment metadata
                    only to provide the service, prevent abuse, and comply with payment regulations. We do not sell
                    personal data.
                  </li>
                  <li>
                    <strong style={{ color: "var(--text)" }}>Contact:</strong> +91 86101 59248 ·{" "}
                    <a href="mailto:hapyzotechnologies@gmail.com" style={{ color: "var(--accent)" }}>
                      hapyzotechnologies@gmail.com
                    </a>
                  </li>
                </ul>
                <div className="hero-actions" style={{ marginBottom: 0 }}>
                  {paymentLink ? (
                    <a href={paymentLink} className="btn btn-gold" target="_blank" rel="noreferrer">
                      Open Razorpay checkout
                    </a>
                  ) : (
                    <a
                      href="mailto:hapyzotechnologies@gmail.com?subject=Speaklo%20Razorpay%20setup"
                      className="btn btn-gold"
                    >
                      Email for Razorpay payment
                    </a>
                  )}
                  <a
                    href="https://wa.me/918610159248?text=Hi%20Hapyzo%2C%20I%20need%20help%20with%20Speaklo%20payment"
                    className="btn btn-ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp support
                  </a>
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
