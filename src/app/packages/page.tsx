import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "../../components/Reveal";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { packageAddons, packageNotes, websitePackages } from "../../data/packages";

export const metadata: Metadata = {
  title: "Website packages",
  description:
    "Hapyzo Technologies website packages — Starter ₹5,000, Basic ₹8,000, Standard ₹12,000, Business ₹15,000.",
  alternates: { canonical: "https://www.hapyzo.com/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section packages-hero">
          <div className="container">
            <Reveal>
              <p className="eyebrow">Pricing</p>
              <h1 className="display">Website packages</h1>
              <p className="packages-lead">
                Clear scopes for brochure and company sites. Custom web apps and mobile apps are quoted
                separately.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="packages-grid">
              {websitePackages.map((pkg, i) => (
                <Reveal key={pkg.id} delay={i * 60}>
                  <article className={`package-card${pkg.highlight ? " is-hot" : ""}`}>
                    {pkg.highlight ? <span className="package-hot">Popular</span> : null}
                    <h2>{pkg.name}</h2>
                    <p className="package-price">{pkg.priceLabel}</p>
                    <p className="package-blurb">{pkg.blurb}</p>
                    <p className="package-pages">{pkg.pages}</p>
                    <ul>
                      {pkg.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <p className="package-amc">{pkg.amc}</p>
                    <Link href="/#contact" className="btn btn-primary">
                      Enquire
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="package-extras">
                <h3>Add-ons</h3>
                <ul className="package-addon-list">
                  {packageAddons.map((a) => (
                    <li key={a.name}>
                      <span>{a.name}</span>
                      <strong>{a.price}</strong>
                    </li>
                  ))}
                </ul>
                <ul className="package-notes">
                  {packageNotes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
