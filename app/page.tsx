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

const faqs = [
  ["How often should air conditioning be serviced?", "For most systems, once a year is a sensible minimum. Busy commercial systems or units used for both heating and cooling may benefit from servicing every six months."],
  ["What is included in a service?", "We inspect the indoor and outdoor units, clean key components, check filters, drains, airflow, temperatures and controls, then explain any issues before recommending further work."],
  ["Do you service all types of system?", "Yes — our service covers common split, multi-split and light commercial air conditioning systems from all major manufacturers."],
  ["Will you repair anything on the same visit?", "We carry common service parts and can often resolve minor faults immediately. If a larger repair is needed, you will receive a clear quote before any extra work begins."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Air Care UK home">
          <img className="brand-logo" src="/air-care-uk-retro-logo.png" alt="Air Care UK — Heating &amp; Cooling" width={1254} height={1254} />
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="/care-plan">Care plan</a>
          <a href="#faq">FAQs</a>
        </nav>
        <a className="header-cta" href="#quote">Get a free quote <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Trusted air conditioning specialists</div>
          <h1>Cleaner air.<br />Lower bills.<br /><em>No surprises.</em></h1>
          <p>Expert inspections, maintenance and servicing that keeps your air conditioning running smoothly — at home and at work.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#quote">Book an inspection <span>↗</span></a>
            <a className="text-link" href="tel:+442079460285"><span className="phone-dot">●</span> 020 7946 0285</a>
          </div>
          <div className="trust-row" aria-label="Service benefits">
            <span>✓ Qualified engineers</span>
            <span>✓ Upfront pricing</span>
            <span>✓ Work guaranteed</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Air conditioning service overview">
          <div className="airflow airflow-one" /><div className="airflow airflow-two" /><div className="airflow airflow-three" />
          <div className="unit">
            <div className="unit-top"><span>Air Care UK</span><b>21°</b></div>
            <div className="unit-vent"><i /><i /><i /><i /><i /></div>
            <div className="unit-status"><span className="status-light" /> Quiet comfort mode</div>
          </div>
          <div className="service-card">
            <span className="service-card-label">Next available</span>
            <strong>Tomorrow</strong>
            <small>Flexible 2-hour arrival window</small>
          </div>
          <div className="efficiency-pill"><b>A+</b><span>Efficiency<br />optimised</span></div>
        </div>
      </section>

      <section className="marquee" aria-label="Service promise">
        <span>INSPECT</span><i>✦</i><span>MAINTAIN</span><i>✦</i><span>SERVICE</span><i>✦</i><span>BREATHE EASY</span>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div><span className="kicker">What we do</span><h2>Good air conditioning<br />starts with <em>good care.</em></h2></div>
          <p>From a one-off check to year-round maintenance, we make it simple to protect your comfort and your equipment.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-icon" aria-hidden="true"><span>✦</span></div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              <a href={service.href ?? "#quote"}>{service.href === "/air-conditioning-servicing-york" ? "Servicing in York" : service.href === "/air-conditioning-maintenance-york" ? "Maintenance in York" : service.href ? "Learn more" : "Get a quote"} <span>↗</span></a>
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

      <section className="faq section" id="faq">
        <div className="faq-intro"><span className="kicker">Useful answers</span><h2>Before you<br /><em>book.</em></h2><p>Still unsure what your system needs? Call us and we’ll point you in the right direction.</p></div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>
          ))}
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-copy"><span className="kicker light">Free, no-pressure quote</span><h2>Ready for air that<br /><em>just feels better?</em></h2><p>Tell us what you need. We’ll come back with the right service and a clear price.</p><a href="tel:+442079460285">Prefer to talk? <b>020 7946 0285</b></a></div>
        <form className="quote-form" action="mailto:hello@aircareuk.co.uk" method="post" encType="text/plain">
          <div className="field-row"><label>Name<input required name="Name" autoComplete="name" placeholder="Your name" /></label><label>Phone<input required name="Phone" type="tel" autoComplete="tel" placeholder="Best number" /></label></div>
          <label>Email<input required name="Email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
          <label>What can we help with?<select name="Service" defaultValue=""><option value="" disabled>Select a service</option><option>Air conditioning inspection</option><option>Air conditioning maintenance</option><option>Air conditioning servicing</option><option>Not sure yet</option></select></label>
          <label>Anything else?<textarea name="Message" rows={3} placeholder="Type of system, number of units, or the issue you’ve noticed…" /></label>
          <button className="button button-mint" type="submit">Request my quote <span>↗</span></button>
          <small>By submitting, you agree that we may contact you about your enquiry.</small>
        </form>
      </section>

      <footer>
        <a className="brand brand-footer" href="#top"><img className="brand-logo" src="/air-care-uk-retro-logo.png" alt="Air Care UK — Heating &amp; Cooling" width={1254} height={1254} /></a>
        <p>Air conditioning inspections, maintenance and servicing for homes and workplaces.</p>
        <div><a href="mailto:hello@aircareuk.co.uk">hello@aircareuk.co.uk</a><a href="tel:+442079460285">020 7946 0285</a></div>
        <small>© 2026 Air Care UK. All rights reserved.</small>
      </footer>
    </main>
  );
}
