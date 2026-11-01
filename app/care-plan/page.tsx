import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Conditioning Care Plan | Air Care UK",
  description: "Keep your air conditioning reliable and efficient with an Air Care UK maintenance plan: scheduled servicing, reminders, priority support and clear member pricing.",
  alternates: { canonical: "/care-plan" },
  openGraph: {
    title: "Air Conditioning Care Plan | Air Care UK",
    description: "Planned maintenance, priority support and clear costs for year-round comfort.",
    type: "website",
    images: [{ url: "/og-care-plan.png", width: 1200, height: 630, alt: "Air Care UK air conditioning care plan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Conditioning Care Plan | Air Care UK",
    description: "Planned maintenance, priority support and clear costs.",
    images: ["/og-care-plan.png"],
  },
};

const inclusions = [
  ["Scheduled servicing", "Maintenance visits planned around your system, usage and the best time for your property."],
  ["Helpful reminders", "We keep track of when your next service is due and contact you in plenty of time."],
  ["Priority booking", "Care plan customers move to the front of the queue when appointment availability is tight."],
  ["Member pricing", "Clear, consistent care plan rates with the cost explained before additional work begins."],
  ["Performance checks", "Airflow, temperatures, controls and system condition checked at each planned visit."],
  ["Service records", "A useful summary of the work completed, findings and sensible next steps for each system."],
];

const planFaqs = [
  ["How many maintenance visits are included?", "The right schedule depends on how your system is used. Many homes need one annual visit, while busy workplaces or systems used year-round may benefit from two. We will recommend the sensible frequency before you join."],
  ["Can I cover more than one air conditioning unit?", "Yes. We can build your care plan around a single split system, several indoor units or a light commercial installation. Tell us what you have and we will confirm the right scope."],
  ["Are repairs included in the care plan?", "Routine maintenance is covered according to your agreed plan. If we find a part that needs replacing or a repair outside that scope, we explain the options and price before doing any extra work."],
  ["Can a business join the care plan?", "Yes. Care plans are available for homes, offices, shops, hospitality spaces and other light commercial premises."],
  ["What happens before I sign up?", "We learn about your equipment, how often it is used and its service history. We then set out the visit frequency, what is included and the cost clearly, with no pressure to proceed."],
];

export default function CarePlanPage() {
  const planSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Air Conditioning Care Plan",
    serviceType: "Planned air conditioning maintenance",
    provider: { "@type": "Organization", name: "Air Care UK" },
    description: "Scheduled air conditioning maintenance with service reminders, priority booking, member pricing and service records.",
  };

  return (
    <main className="care-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(planSchema) }} />

      <header className="site-header care-header">
        <a className="brand" href="/" aria-label="Air Care UK home"><img className="brand-logo" src="/air-care-uk-retro-logo.svg" alt="Air Care UK — Air Conditioning" width={1254} height={1254} /></a>
        <nav aria-label="Main navigation"><a href="/#services">Services</a><a href="#included">What’s included</a><a href="#plan-faq">FAQs</a></nav>
        <a className="header-cta" href="#plan-enquiry">Ask about a plan <span aria-hidden="true">↗</span></a>
      </header>

      <section className="cp-hero">
        <div className="cp-hero-copy">
          <div className="breadcrumb"><a href="/">Home</a><span>›</span><span>Care plan</span></div>
          <div className="eyebrow"><span /> Planned maintenance, made simple</div>
          <h1>Comfort you can<br />count on, <em>all year.</em></h1>
          <p>Stay ahead of breakdowns and rising running costs with scheduled air conditioning care, priority support and no confusing surprises.</p>
          <div className="hero-actions"><a className="button button-primary" href="#plan-enquiry">Build my care plan <span>↗</span></a><a className="text-link" href="#included">See what’s included <span aria-hidden="true">↓</span></a></div>
          <div className="trust-row"><span>✓ Homes & workplaces</span><span>✓ All major brands</span><span>✓ Clear plan terms</span></div>
        </div>
        <div className="cp-hero-panel">
          <div className="cp-orbit cp-orbit-one" /><div className="cp-orbit cp-orbit-two" />
          <div className="cp-calendar"><span>Your care cycle</span><strong>12</strong><small>months of planned comfort</small><div><i className="done" /><i /><i /><i /></div></div>
          <div className="cp-plan-card"><span>Air Care UK plan</span><strong>Next visit: scheduled</strong><small>We’ll remind you before it’s due.</small></div>
          <div className="cp-priority"><b>01</b><span>Priority<br />customer</span></div>
        </div>
      </section>

      <section className="cp-strip"><span>Planned visits</span><i>✦</i><span>Priority booking</span><i>✦</i><span>Clear records</span><i>✦</i><span>Member pricing</span></section>

      <section className="section cp-included" id="included">
        <div className="section-heading"><div><span className="kicker">What’s included</span><h2>Practical care.<br /><em>Nothing vague.</em></h2></div><p>Your plan is shaped around the equipment you actually have. We set out the visit schedule, work included and member costs clearly before you commit.</p></div>
        <div className="cp-inclusion-grid">
          {inclusions.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="cp-why section">
        <div className="cp-why-copy"><span className="kicker light">Why plan ahead?</span><h2>Small checks prevent<br /><em>big interruptions.</em></h2><p>Regular servicing helps your system stay clean, efficient and dependable—and gives you a clearer view of its condition over time.</p><a className="button button-mint" href="#plan-enquiry">Ask about cover <span>↗</span></a></div>
        <div className="cp-benefit-stack">
          <div><b>01</b><span><strong>Protect efficiency</strong><small>Clean, well-checked equipment can deliver comfort without working harder than necessary.</small></span></div>
          <div><b>02</b><span><strong>Plan ahead</strong><small>Service records make it easier to budget for wear and deal with developing issues early.</small></span></div>
          <div><b>03</b><span><strong>Reduce disruption</strong><small>Scheduled care is easier to arrange than an unexpected fault on your busiest day.</small></span></div>
        </div>
      </section>

      <section className="section cp-cycle">
        <div className="section-heading compact"><div><span className="kicker">Your care cycle</span><h2>We remember,<br />so you <em>don’t have to.</em></h2></div><p>Every plan follows a simple rhythm, adjusted to suit how frequently your air conditioning works.</p></div>
        <div className="cp-cycle-grid"><div><span>1</span><h3>Review</h3><p>We confirm your equipment, usage and service history.</p></div><div><span>2</span><h3>Plan</h3><p>You receive a clear schedule and scope for the year ahead.</p></div><div><span>3</span><h3>Maintain</h3><p>We remind you, attend and complete the agreed checks.</p></div><div><span>4</span><h3>Report</h3><p>You get useful records and straightforward recommendations.</p></div></div>
      </section>

      <section className="cp-for-you">
        <div className="cp-for-card"><span className="kicker">For your home</span><h3>Quiet, reliable comfort without another job to remember.</h3><p>Ideal for air conditioning used for summer cooling, home offices or year-round heating and cooling.</p><ul><li>Single and multi-split systems</li><li>Flexible visit timing</li><li>Easy-to-understand advice</li></ul></div>
        <div className="cp-for-card dark"><span className="kicker light">For your workplace</span><h3>Maintenance that works around your people and premises.</h3><p>Suitable for offices, shops, hospitality spaces and other light commercial systems.</p><ul><li>Multiple unit schedules</li><li>Useful service records</li><li>Priority appointment access</li></ul></div>
      </section>

      <section className="faq section" id="plan-faq">
        <div className="faq-intro"><span className="kicker">Care plan FAQs</span><h2>Before you<br /><em>join.</em></h2><p>Every plan is confirmed in plain English. If something is not included, we make that clear from the start.</p></div>
        <div className="faq-list">{planFaqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="quote-section cp-enquiry" id="plan-enquiry">
        <div className="quote-copy"><span className="kicker light">A plan that fits</span><h2>Let’s take care of<br /><em>the next service.</em></h2><p>Tell us a little about your property and equipment. We’ll recommend a sensible schedule and send a clear care plan quote.</p><a href="mailto:hello@aircareuk.co.uk">Prefer email? <b>hello@aircareuk.co.uk</b></a></div>
        <form className="quote-form" action="mailto:hello@aircareuk.co.uk" method="post" encType="text/plain">
          <div className="field-row"><label>Name<input required name="Name" autoComplete="name" placeholder="Your name" /></label><label>Postcode<input required name="Postcode" autoComplete="postal-code" placeholder="Your postcode" /></label></div>
          <div className="field-row"><label>Email<input required name="Email" type="email" autoComplete="email" placeholder="you@example.com" /></label><label>Phone<input name="Phone" type="tel" autoComplete="tel" placeholder="Best number" /></label></div>
          <label>Plan for<select name="Plan for" defaultValue=""><option value="" disabled>Select one</option><option>My home</option><option>My workplace</option><option>Several properties</option><option>Not sure yet</option></select></label>
          <label>Tell us about your system<textarea name="System details" rows={3} placeholder="Number of units, how often they’re used, and when they were last serviced…" /></label>
          <button className="button button-mint" type="submit">Request my care plan <span>↗</span></button><small>By submitting, you agree that we may contact you about your enquiry.</small>
        </form>
      </section>

      <footer><a className="brand brand-footer" href="/"><img className="brand-logo" src="/air-care-uk-retro-logo.svg" alt="Air Care UK — Air Conditioning" width={1254} height={1254} /></a><p>Air conditioning inspections, maintenance and servicing for homes and workplaces.</p><div><a href="mailto:hello@aircareuk.co.uk">hello@aircareuk.co.uk</a><a href="/#services">View all services</a></div><small>© 2026 Air Care UK. All rights reserved.</small></footer>
    </main>
  );
}
