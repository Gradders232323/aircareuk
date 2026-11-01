import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TM44 Air Conditioning Inspections | Air Care UK",
  description: "Arrange a TM44 air conditioning inspection for systems over 12kW in England and Wales. Accredited assessment, lodged ACIR and clear efficiency recommendations.",
  alternates: { canonical: "/tm44-air-conditioning-inspections" },
  openGraph: {
    title: "TM44 Air Conditioning Inspections | Air Care UK",
    description: "Accredited air conditioning energy inspections for systems over 12kW, with a valid lodged report.",
    type: "website",
    images: [{ url: "/og-tm44.png", width: 1200, height: 630, alt: "Air Care UK TM44 air conditioning inspections" }],
  },
  twitter: { card: "summary_large_image", title: "TM44 Air Conditioning Inspections | Air Care UK", description: "Over 12kW. Every five years. Valid lodged report.", images: ["/og-tm44.png"] },
};

const inspectionItems = [
  ["System inventory", "Review of the air conditioning equipment, cooling capacity and systems under single control."],
  ["Equipment condition", "A visual assessment of accessible plant, insulation, cleanliness and signs of deterioration."],
  ["Controls & operation", "Examination of controls, set points, time schedules and how the system is being operated."],
  ["Efficiency assessment", "An assessment of whether the system is suitably sized and operating efficiently for the building."],
  ["Improvement advice", "Practical recommendations covering faults, controls, maintenance, usage and energy-saving opportunities."],
  ["Valid lodged ACIR", "A formal Air Conditioning Inspection Report lodged on the Energy Performance of Buildings Register."],
];

const tm44Faqs = [
  ["What is a TM44 inspection?", "TM44 is the commonly used methodology for the statutory energy inspection of air conditioning systems. It assesses equipment, controls, operation and efficiency, then records findings and recommendations in an Air Conditioning Inspection Report."],
  ["Which air conditioning systems need an inspection?", "In England and Wales, systems with a combined effective rated output of more than 12kW are in scope. Several smaller units may count as one system when they are controlled by the same person."],
  ["How often is a TM44 inspection required?", "The interval must not exceed five years. A newly installed system that is in scope must receive its first inspection within five years of being put into service."],
  ["Is a TM44 inspection the same as air conditioning maintenance?", "No. The statutory inspection assesses energy performance and provides advice; it does not include cleaning, repairs or control adjustments. Those can be arranged separately as maintenance work."],
  ["Who is responsible for arranging it?", "Responsibility generally sits with the person who controls the technical operation of the air conditioning system—often the building owner, manager or occupier, depending on the lease and service arrangements."],
  ["What makes the report valid?", "The inspection must be completed by an accredited energy assessor, and the resulting report must be lodged on the Energy Performance of Buildings Register with a valid report reference number."],
];

export default function TM44Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "TM44 Air Conditioning Inspections",
    serviceType: "Air conditioning energy inspection",
    provider: { "@type": "Organization", name: "Air Care UK" },
    areaServed: ["England", "Wales"],
    description: "Statutory air conditioning energy inspections for systems with an effective rated output over 12kW, including a lodged Air Conditioning Inspection Report.",
  };

  return (
    <main className="tm44-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="site-header tm44-header">
        <a className="brand" href="/" aria-label="Air Care UK home"><img className="brand-logo" src="/air-care-uk-retro-logo.svg" alt="Air Care UK — Heating &amp; Cooling" width={1254} height={1254} /></a>
        <nav aria-label="Main navigation"><a href="/#services">Services</a><a href="#scope">Who needs one?</a><a href="#tm44-faq">FAQs</a></nav>
        <a className="header-cta" href="#tm44-enquiry">Arrange an inspection <span aria-hidden="true">↗</span></a>
      </header>

      <section className="tm44-hero">
        <div className="tm44-hero-copy">
          <div className="breadcrumb"><a href="/">Home</a><span>›</span><span>TM44 inspections</span></div>
          <div className="eyebrow"><span /> Air conditioning energy compliance</div>
          <h1>TM44 inspections,<br /><em>made clear.</em></h1>
          <p>For air conditioning systems over 12kW in England and Wales: an accredited assessment, a valid lodged report and practical advice you can use.</p>
          <div className="hero-actions"><a className="button button-primary" href="#tm44-enquiry">Get a TM44 quote <span>↗</span></a><a className="text-link" href="#scope">Check if you’re in scope <span aria-hidden="true">↓</span></a></div>
          <div className="trust-row"><span>✓ Accredited assessment</span><span>✓ Lodged ACIR</span><span>✓ Clear recommendations</span></div>
        </div>
        <div className="tm44-hero-panel">
          <div className="tm44-grid" aria-hidden="true" />
          <div className="tm44-report"><span>Air conditioning inspection</span><strong>TM44</strong><small>Energy performance report</small><div><i /><i /><i /></div></div>
          <div className="tm44-threshold"><small>Effective rated output</small><strong>&gt;12kW</strong><span>Inspection required</span></div>
          <div className="tm44-valid"><b>✓</b><span>Valid report<br />lodged</span></div>
        </div>
      </section>

      <section className="tm44-strip"><span><b>12kW+</b> combined output</span><span><b>5 years</b> maximum interval</span><span><b>1 report</b> lodged on the register</span></section>

      <section className="section tm44-scope" id="scope">
        <div className="section-heading"><div><span className="kicker">Are you in scope?</span><h2>More than one unit<br />can <em>still count.</em></h2></div><p>The threshold applies to the effective rated output of the air conditioning system—not simply to the size of one unit. Units under single control may need to be combined.</p></div>
        <div className="tm44-scope-grid">
          <article><span>01</span><h3>Over 12kW</h3><p>Your system’s combined effective rated output is more than 12kW.</p></article>
          <article><span>02</span><h3>Under single control</h3><p>Several smaller units controlled by the same person can form one system.</p></article>
          <article><span>03</span><h3>Five years have passed</h3><p>Your last valid report is approaching its fifth anniversary—or no report exists.</p></article>
        </div>
        <div className="tm44-note"><strong>Not sure of the capacity?</strong><p>Send us an equipment list, model numbers or recent maintenance records. We can help establish whether a formal assessment is likely to be required.</p><a href="#tm44-enquiry">Ask us to check <span>↗</span></a></div>
      </section>

      <section className="tm44-included section" id="included">
        <div className="section-heading"><div><span className="kicker light">The inspection</span><h2>Evidence, assessment<br />and <em>useful advice.</em></h2></div><p>The inspection is an energy assessment, not a maintenance visit. It reviews the accessible system, its controls, operation and efficiency, then records recommendations.</p></div>
        <div className="tm44-item-grid">{inspectionItems.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="section tm44-process">
        <div className="section-heading compact"><div><span className="kicker">How it works</span><h2>From first check<br />to <em>valid report.</em></h2></div><p>Good records and clear access help the assessment run efficiently.</p></div>
        <div className="tm44-process-grid">
          <div><span>01</span><h3>Scope the system</h3><p>We review capacity, equipment, controls and available records to confirm the assessment scope.</p></div>
          <div><span>02</span><h3>Inspect on site</h3><p>An accredited energy assessor examines accessible equipment, controls and how the system operates.</p></div>
          <div><span>03</span><h3>Prepare the ACIR</h3><p>The findings cover current efficiency, faults, improvement options and ways to reduce usage.</p></div>
          <div><span>04</span><h3>Lodge and issue</h3><p>The report is lodged on the official register and supplied with its unique reference number.</p></div>
        </div>
      </section>

      <section className="tm44-outcome">
        <div><span className="kicker light">What you receive</span><h2>Compliance with<br /><em>commercial value.</em></h2><p>The recommendations are advisory, but they can reveal practical opportunities to improve controls, reduce energy use and plan future investment.</p></div>
        <ul><li>Current equipment efficiency</li><li>Identified faults and suggested actions</li><li>Ways to improve system efficiency</li><li>Advice on reducing air conditioning use</li><li>Official report reference number</li><li>Five-year inspection date record</li></ul>
      </section>

      <section className="tm44-responsibility section">
        <div className="tm44-responsibility-card"><span className="kicker">Building owners & managers</span><h3>Keep the latest report with your building records.</h3><p>The person controlling the system must arrange the inspection, retain the current report and pass it to anyone taking over responsibility for the system.</p></div>
        <div className="tm44-responsibility-card dark"><span className="kicker light">A clear distinction</span><h3>TM44 is not a substitute for maintenance.</h3><p>Cleaning, repair and control adjustments sit outside the statutory inspection. Regular maintenance should continue on its normal schedule.</p></div>
      </section>

      <section className="faq section" id="tm44-faq">
        <div className="faq-intro"><span className="kicker">TM44 FAQs</span><h2>Compliance,<br /><em>without fog.</em></h2><p>This page summarises requirements for England and Wales. For a definitive view on your obligations, consult the regulations or independent legal advice.</p><a className="tm44-gov-link" href="https://www.gov.uk/government/publications/air-conditioning-inspections-for-buildings/a-guide-to-air-conditioning-inspections" target="_blank" rel="noreferrer">Read the official GOV.UK guidance ↗</a></div>
        <div className="faq-list">{tm44Faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="quote-section tm44-enquiry" id="tm44-enquiry">
        <div className="quote-copy"><span className="kicker light">TM44 inspection enquiry</span><h2>Know where you<br /><em>stand.</em></h2><p>Tell us about the building and its air conditioning. We’ll help scope the inspection and provide a clear quote.</p><a href="mailto:hello@aircareuk.co.uk">Prefer email? <b>hello@aircareuk.co.uk</b></a></div>
        <form className="quote-form" action="mailto:hello@aircareuk.co.uk" method="post" encType="text/plain">
          <div className="field-row"><label>Name<input required name="Name" autoComplete="name" placeholder="Your name" /></label><label>Organisation<input name="Organisation" autoComplete="organization" placeholder="Business or organisation" /></label></div>
          <div className="field-row"><label>Email<input required name="Email" type="email" autoComplete="email" placeholder="you@example.com" /></label><label>Building postcode<input required name="Postcode" autoComplete="postal-code" placeholder="Site postcode" /></label></div>
          <label>Do you know the combined output?<select name="Combined output" defaultValue=""><option value="" disabled>Select one</option><option>Yes — over 12kW</option><option>Yes — 12kW or below</option><option>No — please help me check</option></select></label>
          <label>Tell us about the system<textarea name="System details" rows={3} placeholder="Number and type of units, previous report date, available records…" /></label>
          <button className="button button-mint" type="submit">Request my TM44 quote <span>↗</span></button><small>By submitting, you agree that we may contact you about your enquiry.</small>
        </form>
      </section>

      <footer><a className="brand brand-footer" href="/"><img className="brand-logo" src="/air-care-uk-retro-logo.svg" alt="Air Care UK — Heating &amp; Cooling" width={1254} height={1254} /></a><p>Air conditioning inspections, maintenance and servicing for homes and workplaces.</p><div><a href="mailto:hello@aircareuk.co.uk">hello@aircareuk.co.uk</a><a href="/#services">View all services</a></div><small>© 2026 Air Care UK. All rights reserved.</small></footer>
    </main>
  );
}
