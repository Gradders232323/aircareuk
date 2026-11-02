import { BrandStamp } from "./_components/brand-stamp";
import { quoteHref } from "./_data/quote";
import { HeroLogo } from "./_components/hero-logo";
import type { Metadata } from "next";
import { TM44QuoteSection, TM44QuickFacts, TM44ScopeSection, TM44ReportSection, TM44ProcessSection, TM44PricingSection, TM44FinalCTA } from "./_components/tm44-sections";
import { tm44Faqs as faqs, tm44Guidance } from "./_data/tm44";
import { CoverageIntro } from "./_components/coverage-intro";
import { DirectoryNav, MainNav } from "./_components/directory-nav";
import { ServiceIllustration } from "./_components/service-illustration";

const services = [
  {
    number: "01",
    title: "TM44 inspections",
    copy: "Statutory air conditioning energy inspections for systems over 12kW, completed by an accredited assessor.",
    details: ["England & Wales compliance", "Valid lodged ACIR", "Efficiency recommendations"],
    href: "/tm44-air-conditioning-inspections",
  },
  {
    number: "02",
    title: "Air conditioning maintenance",
    copy: "Planned care that keeps equipment reliable, improves air quality and catches small problems before they become costly.",
    details: ["Filter & coil cleaning", "Drain & refrigerant checks", "Priority maintenance plans"],
    href: "/air-conditioning-maintenance-york",
  },
  {
    number: "03",
    title: "Air conditioning servicing",
    copy: "Thorough servicing for homes and workplaces, completed cleanly and efficiently with a full service record.",
    details: ["All makes & models", "Domestic & commercial", "Digital service summary"],
    href: "/air-conditioning-servicing-york",
  },
];

export const metadata: Metadata = {
  title: "TM44 Air Conditioning Inspections & Quotes | Air Care UK",
  description: "Arrange a TM44 air conditioning inspection with Air Care UK. Accredited assessment, lodged ACIR and clear quotes across 67 locations in England.",
  alternates: { canonical: "https://www.aircareuk.co.uk/" },
  openGraph: { title: "TM44 Air Conditioning Inspections | Air Care UK", description: "Clear scope, accredited assessment and a lodged inspection report. Get a TM44 quote for your building or portfolio.", images: ["/og-tm44.png"], url: "https://www.aircareuk.co.uk/" },
  twitter: { card: "summary_large_image", title: "TM44 Inspections | Air Care UK", description: "Get a TM44 inspection quote for your building or portfolio.", images: ["/og-tm44.png"] },
};

export default function Home() {
  return (
    <main className="tm44-home">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Air Care UK home">
          <img className="brand-logo" src="/air-care-uk-retro-logo.svg" alt="Air Care UK — TM44 &amp; Air Conditioning" width={1254} height={1254} />
        </a>
        <MainNav />
        <a className="header-cta" href={quoteHref({ service: "tm44", from: "/" })}>Get a TM44 quote <span aria-hidden="true">↗</span></a>
      </header><DirectoryNav />

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Air conditioning energy inspections</div>
          <h1>TM44 inspections.<br /><em>Know where you stand.</em></h1>
          <p>Accredited TM44 air conditioning inspections, a lodged report and clear energy-performance recommendations. Get a quote for your building or property portfolio across 67 areas in England.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={quoteHref({ service: "tm44", from: "/" })}>Get a TM44 quote <span>↗</span></a>
            <a className="text-link" href="/tm44-air-conditioning-inspections#areas">Find your TM44 area ↓</a>
          </div>
          <div className="trust-row" aria-label="Service benefits">
            <span>✓ Accredited assessment</span>
            <span>✓ Lodged ACIR</span>
            <span>✓ Clear inspection scope</span>
          </div>
        </div>

        <div className="hero-visual hero-brand">
          <HeroLogo className="hero-brand-logo" />
        </div>
      </section>

      <TM44QuickFacts />
      <TM44QuoteSection context="/" />
      <TM44ScopeSection />
      <TM44ReportSection />
      <TM44ProcessSection />
      <TM44PricingSection />
      <section className="faq section" id="faq">
        <div className="faq-intro"><BrandStamp /><span className="kicker">Useful answers</span><h2>Before you<br /><em>book.</em></h2><p>Find answers about inspection scope, report validity, timing and quotations.</p><a className="tm44-gov-link" href={tm44Guidance} target="_blank" rel="noreferrer">Official GOV.UK guidance ↗</a></div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>
          ))}
        </div>
      </section>
      <CoverageIntro />


      <section className="services section" id="services">
        <div className="section-heading">
          <div><span className="kicker">Beyond the inspection</span><h2>Good air conditioning<br />starts with <em>good care.</em></h2></div>
          <p>TM44 is our main focus. Air conditioning servicing, maintenance and facilities support remain available as separately scoped services.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-icon" aria-hidden="true"><ServiceIllustration service={service.number} /></div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              <a href={service.href ?? "#quote"}>{service.href === "/air-conditioning-servicing-york" ? "Servicing in York" : service.href === "/air-conditioning-maintenance-york" ? "Maintenance in York" : service.href === "/tm44-air-conditioning-inspections" ? "TM44 inspection guide" : service.href ? "Learn more" : "Get a quote"} <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="care-plan section" id="care-plan">
        <div className="plan-copy">
          <span className="kicker light">Air Care UK plan</span>
          <h2>Reliable comfort,<br /><em>all year round.</em></h2>
          <p>Regular maintenance protects efficiency, improves indoor air quality and helps your system last longer.</p>
          <div className="plan-points">
            <span><b>01</b> Scheduled service reminders</span>
            <span><b>02</b> Priority call-outs</span>
            <span><b>03</b> Fixed member pricing</span>
          </div>
          <a className="button button-mint" href="/care-plan">Explore the care plan <span>↗</span></a>
        </div>
        <div className="plan-metric">
          <span className="orbit orbit-a" /><span className="orbit orbit-b" />
          <div className="metric-core"><small>Up to</small><strong>15%</strong><span>less energy use after<br />professional maintenance</span></div>
          <p>Based on correcting common airflow, filter and control issues.</p>
        </div>
      </section>

      <section className="process section">
        <div className="section-heading compact">
          <div><span className="kicker">How it works</span><h2>Clear from the<br /><em>first conversation.</em></h2></div>
        </div>
        <div className="process-grid">
          <div><span>01</span><h3>Tell us what you need</h3><p>Share a few details about your system and the issue you are experiencing.</p></div>
          <div><span>02</span><h3>Choose a convenient time</h3><p>We will confirm a clear arrival window that works around your day.</p></div>
          <div><span>03</span><h3>Get straightforward advice</h3><p>Your engineer explains the findings, options and price before further work.</p></div>
        </div>
      </section>

      <section className="testimonial section">
        <div className="quote-mark">“</div>
        <blockquote>Friendly, tidy and refreshingly straightforward. Our office system is quieter, the rooms cool evenly, and the service report was genuinely useful.</blockquote>
        <div className="quote-author"><span>JM</span><div><b>James M.</b><small>Office manager · London</small></div><em>★★★★★</em></div>
      </section>

      <TM44FinalCTA />

      <footer>
        <a className="brand brand-footer" href="#top"><img className="brand-logo" src="/air-care-uk-retro-logo.svg" alt="Air Care UK — TM44 &amp; Air Conditioning" width={1254} height={1254} /></a>
        <p>TM44 air conditioning inspections, maintenance and facilities support for buildings and property portfolios.</p>
        <div><a href="/tm44-air-conditioning-inspections">TM44 inspections &amp; areas</a><a href="mailto:hello@aircareuk.co.uk">hello@aircareuk.co.uk</a><a href="tel:+442079460285">020 7946 0285</a><a href="/air-conditioning">Air conditioning &amp; areas</a><a href="/facilities-management">Facilities management &amp; areas</a></div>
        <small>© 2026 Air Care UK. All rights reserved.</small>
      </footer>
    </main>
  );
}
