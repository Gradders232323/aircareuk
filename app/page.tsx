import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Conditioning Maintenance York | Commercial | Air Care",
  description: "Commercial air conditioning maintenance in York from Air Care. Fast response for planned maintenance, faults and reactive AC repairs. Request a quote today.",
  alternates: { canonical: "/air-conditioning-maintenance-york" },
  openGraph: {
    title: "Air Conditioning Maintenance York | Air Care UK",
    description: "Planned maintenance and fast reactive support for commercial air conditioning across York.",
    type: "website",
    images: [{ url: "/og-maintenance-york.png", width: 1200, height: 630, alt: "Air Care UK — commercial air conditioning maintenance in York" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Conditioning Maintenance York | Air Care UK",
    description: "Reliable planned maintenance, fault finding and responsive commercial support.",
    images: ["/og-maintenance-york.png"],
  },
};

const maintenanceChecks = [
  ["System condition", "A practical inspection of indoor and outdoor equipment to identify wear, damage and developing problems."],
  ["Filters & coils", "Cleaning and condition checks that help maintain airflow, heat transfer and effective system performance."],
  ["Temperatures & airflow", "Operating readings that show whether the system is heating and cooling commercial spaces correctly."],
  ["Drainage & leaks", "Checks for restricted condensate drainage, water leaks and visible signs that need further investigation."],
  ["Controls & operation", "Testing operating modes, thermostats, remotes and settings for consistent day-to-day use."],
  ["Clear recommendations", "A straightforward summary of findings and any repairs or future work worth planning."],
];

const commonFaults = [
  "Not cooling or heating",
  "Reduced airflow",
  "Unusual noises",
  "Water leaks",
  "Error or fault codes",
  "Unexpected shutdowns",
  "Inconsistent temperatures",
  "Complete system failure",
];

const propertyTypes = [
  ["Offices", "Maintain comfortable working temperatures and reduce disruption for employees, clients and visitors."],
  ["Retail & showrooms", "Keep customer-facing environments comfortable while protecting equipment used throughout trading hours."],
  ["Hotels & hospitality", "Support reliable heating and cooling where guest comfort directly affects the customer experience."],
  ["Restaurants", "Maintain air conditioning serving busy dining, service and back-of-house commercial spaces."],
  ["Warehouses & industrial", "Help climate-control equipment maintain suitable working conditions across demanding premises."],
  ["Schools & portfolios", "A consistent maintenance service for individual buildings or multiple locations across the UK."],
];

const maintenanceFaqs = [
  ["Do you provide commercial air conditioning maintenance in York?", "Yes. Air Care provides planned and reactive commercial air conditioning maintenance throughout York and the surrounding area as part of our nationwide service."],
  ["Can you repair faulty air conditioning?", "Yes. Alongside routine maintenance, we provide reactive fault finding and repair support for commercial air conditioning breakdowns."],
  ["How quickly can you attend?", "Fast response is central to our service. Availability depends on the location and nature of the fault, so contact us with the details and we will confirm the appropriate next step."],
  ["How often should commercial air conditioning be maintained?", "The right schedule depends on the equipment, usage, environment and manufacturer guidance. Heavily used commercial systems may need more frequent visits than occasionally used equipment."],
  ["Can you maintain systems across multiple business locations?", "Yes. Our nationwide coverage makes Air Care suitable for organisations managing air conditioning across multiple sites."],
  ["Do you only cover York?", "No. We support York businesses locally and provide commercial air conditioning maintenance nationwide."],
  ["Can I arrange ongoing air conditioning maintenance?", "Yes. Contact Air Care with details of your premises and air conditioning equipment. We can discuss your maintenance requirements and the most appropriate ongoing support."],
];

export default function YorkMaintenancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Air Conditioning Maintenance in York",
    serviceType: "Commercial air conditioning maintenance",
    provider: { "@type": "Organization", name: "Air Care UK" },
    areaServed: { "@type": "City", name: "York" },
    description: "Planned commercial air conditioning maintenance, fault finding and reactive repair support across York.",
  };

  return (
    <main className="york-page maintenance-york-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <header className="site-header york-header">
        <a className="brand" href="/" aria-label="Air Care UK home">
          <img className="brand-logo" src="/air-care-uk-retro-logo.png" alt="Air Care UK — Heating &amp; Cooling" width={1254} height={1254} />
        </a>
        <nav aria-label="Main navigation">
          <a href="/#services">Services</a>
          <a href="#maintenance-included">What’s included</a>
          <a href="#maintenance-faq">FAQs</a>
        </nav>
        <a className="header-cta" href="#maintenance-quote">Request a quote <span aria-hidden="true">↗</span></a>
      </header>

      <section className="york-hero maintenance-hero">
        <div className="york-hero-copy">
          <div className="breadcrumb"><a href="/">Home</a><span>›</span><span>Air conditioning maintenance York</span></div>
          <div className="eyebrow"><span /> Commercial maintenance · York</div>
          <h1>Air conditioning<br />maintenance in <em>York.</em></h1>
          <p>Keep your commercial air conditioning running efficiently and reliably with professional maintenance, fast reactive support and nationwide coverage from Air Care.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#maintenance-quote">Get a maintenance quote <span>↗</span></a>
            <a className="text-link" href="#maintenance-included">Explore the service <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-row">
            <span>✓ Commercial expertise</span><span>✓ Fast response</span><span>✓ Nationwide coverage</span>
          </div>
        </div>
        <div className="york-hero-panel maintenance-hero-panel">
          <div className="minster-lines" aria-hidden="true"><i /><i /><i /></div>
          <div className="york-unit" aria-hidden="true"><span>Air Care UK</span><b>21°</b><div><i /><i /><i /><i /><i /></div></div>
          <div className="york-ticket"><span>Planned maintenance</span><strong>Inspect. Maintain. Protect.</strong><small>Practical care for commercial systems.</small></div>
          <div className="york-pin"><b>YO</b><span>Fast local<br />response</span></div>
        </div>
      </section>

      <section className="york-proof-strip">
        <span><b>01</b> Planned visits</span><span><b>02</b> Early fault detection</span><span><b>03</b> Reactive repairs</span><span><b>04</b> Multi-site support</span>
      </section>

      <section className="section york-intro" id="maintenance-included">
        <div className="section-heading">
          <div><span className="kicker">Commercial maintenance</span><h2>Keep equipment ready<br />for the <em>working day.</em></h2></div>
          <p>A well-maintained system is more reliable, more efficient and less likely to fail when you need it most. We inspect your equipment, identify developing faults and explain any work required.</p>
        </div>
        <div className="maintenance-lead-copy">
          <p>Air Care provides commercial air conditioning maintenance throughout York for businesses looking to keep their systems operating effectively. Our engineers can inspect and maintain your equipment, identify developing faults and recommend any work required to keep your system performing correctly.</p>
          <p>We can help with both ongoing maintenance requirements and reactive air conditioning repairs, giving your business a single point of contact whenever your air conditioning needs attention.</p>
        </div>
        <div className="york-check-grid">
          {maintenanceChecks.map(([title, copy], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="maintenance-business section">
        <div className="maintenance-editorial-heading">
          <span className="kicker">Maintenance for York businesses</span>
          <h2>Commercial systems work hard.<br /><em>Good maintenance matters.</em></h2>
          <p>Commercial air conditioning can operate for long periods throughout the year, placing considerable demand on individual components. Without appropriate maintenance, minor issues can develop into larger problems that affect performance and potentially result in unexpected downtime.</p>
          <p>Air Care works with businesses to provide practical maintenance support based on the air conditioning equipment installed at their premises.</p>
        </div>
        <div className="maintenance-benefit-list">
          <span>Reduce the likelihood of unexpected breakdowns</span>
          <span>Identify developing faults earlier</span>
          <span>Maintain effective heating and cooling</span>
          <span>Keep equipment operating efficiently</span>
          <span>Extend the usable life of equipment</span>
          <span>Reduce disruption from avoidable failures</span>
          <span>Keep filters and components maintained</span>
        </div>
      </section>

      <section className="york-reasons section">
        <div className="york-reasons-copy">
          <span className="kicker light">Planned maintenance</span>
          <h2>Deal with small issues<br /><em>before downtime.</em></h2>
          <p>If your business relies on air conditioning throughout the year, planned maintenance provides a straightforward way to keep on top of servicing and system condition.</p>
          <p>Rather than waiting for a fault, regular visits allow equipment to be inspected periodically so potential problems can be identified earlier. For sites with multiple systems, a planned schedule can also make managing the equipment considerably easier.</p>
          <a className="button button-mint" href="/care-plan">Explore our care plan <span>↗</span></a>
        </div>
        <div className="york-reason-list">
          <div><strong>Fewer unexpected breakdowns</strong><p>Periodic inspection can reveal blocked drains, worn components and changing performance earlier.</p></div>
          <div><strong>Effective heating and cooling</strong><p>Clean components, clear airflow and correct operation help spaces reach the temperatures you expect.</p></div>
          <div><strong>Longer equipment life</strong><p>Appropriate care reduces avoidable strain and supports the usable life of commercial air conditioning equipment.</p></div>
          <div><strong>Easier portfolio management</strong><p>A planned schedule and single nationwide provider simplify maintenance across larger sites and property portfolios.</p></div>
        </div>
      </section>

      <section className="section maintenance-repairs" id="repairs">
        <div className="section-heading">
          <div><span className="kicker">Reactive repairs in York</span><h2>When something changes,<br />we’ll help you <em>act quickly.</em></h2></div>
          <p>If your commercial air conditioning stops working correctly, our focus is on responding quickly, diagnosing the problem and determining the appropriate repair.</p>
        </div>
        <div className="maintenance-lead-copy compact-copy">
          <p>Air conditioning problems do not always happen at a convenient time. If you notice a change in how the system is operating, arranging an inspection early can help prevent the problem from becoming more disruptive.</p>
          <p>Our engineers assess the symptoms, investigate the likely cause and explain the appropriate next step before further repair work is undertaken.</p>
        </div>
        <div className="maintenance-faults">
          {commonFaults.map((fault) => <span key={fault}>✓ {fault}</span>)}
        </div>
        <div className="maintenance-callout"><strong>Have an urgent air conditioning issue?</strong><p>Tell us what is happening, where the system is located and any fault code shown. We’ll discuss the problem and arrange the appropriate next step.</p><a href="#maintenance-quote">Request support <span>↗</span></a></div>
      </section>

      <section className="maintenance-response section">
        <div><span className="kicker light">Fast-response engineers</span><h2>When air conditioning fails,<br /><em>time matters.</em></h2></div>
        <div className="maintenance-response-copy">
          <p>When air conditioning fails in a commercial building, getting someone to investigate quickly can be important. That is why fast response times are a key part of the Air Care service.</p>
          <p>Our engineers support York businesses with maintenance and reactive repair requirements, helping problems get investigated without unnecessary delays. If the issue is urgent, tell us what is happening with your system and we will discuss the problem and arrange the appropriate next step.</p>
          <a className="button button-mint" href="#maintenance-quote">Tell us about the fault <span>↗</span></a>
        </div>
      </section>

      <section className="section maintenance-properties">
        <div className="section-heading">
          <div><span className="kicker">Properties we support</span><h2>Commercial care for<br /><em>every setting.</em></h2></div>
          <p>Air Care supports a wide range of York buildings and organisations. Our approach reflects the equipment installed, how heavily it is used and the operational needs of each premises.</p>
        </div>
        <div className="york-check-grid">
          {propertyTypes.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="maintenance-why section">
        <div className="section-heading">
          <div><span className="kicker">Why choose Air Care?</span><h2>More than a visit.<br /><em>Ongoing support.</em></h2></div>
          <p>Choosing a maintenance provider is not simply about finding someone who can service an air conditioning unit. For commercial customers, responsiveness, consistency and ongoing support can be just as important.</p>
        </div>
        <div className="maintenance-why-grid">
          <article><span>01</span><h3>Commercial expertise</h3><p>Our maintenance service is designed around commercial systems and the practical needs of business premises.</p></article>
          <article><span>02</span><h3>Fast response times</h3><p>If something goes wrong, you want the problem investigated quickly. Responsive support is central to our reactive service.</p></article>
          <article><span>03</span><h3>Maintenance and repairs</h3><p>Use one provider for scheduled care and reactive assistance when faults or breakdowns occur.</p></article>
          <article><span>04</span><h3>Nationwide coverage</h3><p>Air Care supports businesses in York as well as organisations with premises elsewhere in the UK.</p></article>
          <article><span>05</span><h3>Multiple locations</h3><p>A nationwide provider can simplify air conditioning maintenance across a larger commercial property portfolio.</p></article>
        </div>
      </section>

      <section className="maintenance-national section">
        <div><span className="kicker">Nationwide air conditioning maintenance</span><h2>One provider for York<br />and <em>beyond.</em></h2></div>
        <div>
          <p>While this page covers our air conditioning maintenance service in York, Air Care provides commercial air conditioning support nationwide. This is particularly useful for organisations responsible for multiple buildings.</p>
          <p>Instead of arranging separate air conditioning contractors for every location, Air Care can provide a more consistent approach to maintenance across your sites. Whether you have one commercial property in York or a portfolio of premises around the UK, talk to our team about the systems you need to maintain.</p>
        </div>
      </section>

      <section className="york-areas">
        <div><span className="kicker light">Areas around York</span><h2>Local response.<br /><em>Close by.</em></h2><p>Our engineers provide commercial maintenance across York and the surrounding area. If your location is not listed, contact us—with nationwide coverage, we can still discuss your requirements.</p></div>
        <ul><li>York city centre</li><li>Clifton</li><li>Fulford</li><li>Holgate</li><li>Huntington</li><li>Acomb</li><li>Heslington</li><li>Rawcliffe</li><li>Layerthorpe</li><li>Osbaldwick</li><li>Poppleton</li><li>Haxby</li></ul>
      </section>

      <section className="maintenance-frequency section">
        <div className="maintenance-frequency-number" aria-hidden="true">01</div>
        <div>
          <span className="kicker">Maintenance schedules</span>
          <h2>How often should commercial<br />air conditioning be <em>serviced?</em></h2>
        </div>
        <div className="maintenance-frequency-copy">
          <p>The appropriate schedule depends on the type of air conditioning equipment, how heavily it is used, its environment and the manufacturer’s recommendations.</p>
          <p>Commercial systems operating regularly may benefit from more frequent inspection and maintenance than equipment used occasionally. Rather than applying the same schedule to every building, the requirements should reflect the equipment installed and how your business uses it.</p>
          <p>Air Care can discuss your existing systems and help determine an appropriate maintenance approach for your premises.</p>
        </div>
      </section>

      <section className="faq section york-faq" id="maintenance-faq">
        <div className="faq-intro"><span className="kicker">Maintenance FAQs</span><h2>Useful answers<br /><em>for York businesses.</em></h2><p>Not sure what schedule your equipment needs? Tell us about the system, its usage and your premises and we’ll help you choose the right approach.</p></div>
        <div className="faq-list">
          {maintenanceFaqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="quote-section york-quote" id="maintenance-quote">
        <div className="quote-copy"><span className="kicker light">Book maintenance in York</span><h2>Keep your systems<br /><em>working reliably.</em></h2><p>If you are responsible for air conditioning at an office, shop, hospitality venue, warehouse or other commercial property, Air Care can help. From routine maintenance to reactive fault finding and repairs, tell us what you need and we’ll respond with the appropriate support and a clear quote.</p><a href="mailto:hello@aircareuk.co.uk">Prefer email? <b>hello@aircareuk.co.uk</b></a></div>
        <form className="quote-form" action="mailto:hello@aircareuk.co.uk" method="post" encType="text/plain">
          <div className="field-row"><label>Name<input required name="Name" autoComplete="name" placeholder="Your name" /></label><label>York postcode<input required name="Postcode" autoComplete="postal-code" placeholder="e.g. YO10" /></label></div>
          <div className="field-row"><label>Business email<input required name="Email" type="email" autoComplete="email" placeholder="you@company.co.uk" /></label><label>Phone<input name="Phone" type="tel" autoComplete="tel" placeholder="Best number" /></label></div>
          <label>How can we help?<select name="Requirement" defaultValue=""><option value="" disabled>Select one</option><option>Planned maintenance</option><option>Reactive fault or repair</option><option>Multiple-site maintenance</option><option>Not sure yet</option></select></label>
          <label>Tell us about the system<textarea name="System details" rows={3} placeholder="Premises type, number of units, system details or the fault you’ve noticed…" /></label>
          <button className="button button-mint" type="submit">Request my maintenance quote <span>↗</span></button>
          <small>By submitting, you agree that we may contact you about your enquiry.</small>
        </form>
      </section>

      <footer>
        <a className="brand brand-footer" href="/"><img className="brand-logo" src="/air-care-uk-retro-logo.png" alt="Air Care UK — Heating &amp; Cooling" width={1254} height={1254} /></a>
        <p>Air conditioning inspections, maintenance and servicing for homes and workplaces.</p>
        <div><a href="mailto:hello@aircareuk.co.uk">hello@aircareuk.co.uk</a><a href="/#services">View all services</a></div>
        <small>© 2026 Air Care UK. All rights reserved.</small>
      </footer>
    </main>
  );
}
