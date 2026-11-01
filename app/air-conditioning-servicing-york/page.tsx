import { quoteHref } from "../_data/quote";
import { HeroLogo } from "../_components/hero-logo";
import type { Metadata } from "next";
import { LocationFooter, LocationHeader, LocationQuoteSection } from "../_components/location-page-shared";

export const metadata: Metadata = {
  title: "Air Conditioning Servicing York | Air Care UK",
  description: "Professional air conditioning servicing in York for homes, offices and commercial spaces. Thorough checks, clear advice and upfront quotes from Air Care UK.",
  alternates: { canonical: "/air-conditioning-servicing-york" },
  openGraph: {
    title: "Air Conditioning Servicing in York | Air Care UK",
    description: "Keep your air conditioning efficient, reliable and clean with professional servicing across York.",
    type: "website",
    images: [{ url: "/og-york.png", width: 1200, height: 630, alt: "Air Care UK — air conditioning servicing in York" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Conditioning Servicing in York | Air Care UK",
    description: "Clear advice, a thorough service and no surprises.",
    images: ["/og-york.png"],
  },
};

const serviceChecks = [
  ["Filters & indoor unit", "Cleaning and condition checks to support healthy airflow and indoor air quality."],
  ["Airflow & temperatures", "Performance readings that show whether each unit is heating and cooling as it should."],
  ["Coils & condensate", "Inspection and cleaning of key components, including drainage and signs of leakage."],
  ["Outdoor equipment", "A careful check of the condenser, connections, clearances and general system condition."],
  ["Controls & operation", "Testing modes, thermostats, remotes and settings for smooth, efficient operation."],
  ["Service summary", "A straightforward explanation of what we found and any work worth planning next."],
];

const yorkFaqs = [
  ["How often should air conditioning be serviced in York?", "Most systems should be professionally serviced at least once a year. Systems used every day, or for both heating and cooling, may benefit from a six-monthly visit."],
  ["Do you service domestic and commercial air conditioning?", "Yes. We service air conditioning in York homes, offices, shops and other light commercial premises, including split and multi-split systems from major manufacturers."],
  ["How long does an air conditioning service take?", "A straightforward single-unit service often takes around an hour. The time depends on access, system condition and the number and type of units on site."],
  ["Can you service air conditioning outside central York?", "Yes. We cover York and nearby areas including Acomb, Clifton, Fulford, Heslington, Haxby, Huntington, Bishopthorpe, Poppleton and Copmanthorpe."],
  ["Will I know the cost before you attend?", "Yes. Tell us about your system and the number of units, and we will provide a clear quote before confirming your booking."],
];

export default function YorkServicingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Air Conditioning Servicing in York",
    serviceType: "Air conditioning servicing",
    provider: { "@type": "Organization", name: "Air Care UK" },
    areaServed: { "@type": "City", name: "York" },
    description: "Professional air conditioning servicing for homes and workplaces across York and surrounding areas.",
  };

  return (
    <main className="york-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <LocationHeader
        ctaHref={quoteHref({ service: "servicing", from: "/air-conditioning-servicing-york" })}
        ctaLabel="Book a York service"
        navItems={[{ href: "/#services", label: "Services" }, { href: "#included", label: "What’s included" }, { href: "#york-faq", label: "FAQs" }]}
      />

      <section className="york-hero">
        <div className="york-hero-copy">
          <div className="breadcrumb"><a href="/">Home</a><span>›</span><span>Air conditioning servicing York</span></div>
          <div className="eyebrow"><span /> York & surrounding areas</div>
          <h1>Air conditioning<br />servicing in <em>York.</em></h1>
          <p>Keep your system efficient, reliable and clean with a thorough professional service for your York home or workplace.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={quoteHref({ service: "servicing", from: "/air-conditioning-servicing-york" })}>Get my servicing quote <span>↗</span></a>
            <a className="text-link" href="#included">See what’s included <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-row">
            <span>✓ All major brands</span><span>✓ Domestic & commercial</span><span>✓ Clear service report</span>
          </div>
        </div>
        <div className="hero-logo-panel"><HeroLogo /></div>
      </section>

      <section className="york-proof-strip">
        <span><b>01</b> Thorough inspection</span><span><b>02</b> Careful cleaning</span><span><b>03</b> Clear recommendations</span><span><b>04</b> No surprise extras</span>
      </section>

      <section className="section york-intro" id="included">
        <div className="section-heading">
          <div><span className="kicker">A proper service</span><h2>Everything your system<br />needs to <em>run well.</em></h2></div>
          <p>We look beyond the filter. Your engineer checks performance, cleanliness, drainage, controls and the overall condition of the system, then talks you through the findings.</p>
        </div>
        <div className="york-check-grid">
          {serviceChecks.map(([title, copy], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="york-reasons section">
        <div className="york-reasons-copy">
          <span className="kicker light">Why service regularly?</span>
          <h2>Look after the system.<br /><em>Feel the difference.</em></h2>
          <p>Routine care helps your air conditioning work more efficiently and makes it easier to spot wear before it becomes a disruptive fault.</p>
        </div>
        <div className="york-reason-list">
          <div><strong>More consistent comfort</strong><p>Clean components and balanced airflow help rooms reach the temperature you expect.</p></div>
          <div><strong>Healthier, cleaner airflow</strong><p>Removing built-up dust and checking drainage supports better indoor air quality.</p></div>
          <div><strong>Fewer avoidable breakdowns</strong><p>Regular checks can reveal blocked drains, worn parts and developing performance issues.</p></div>
          <div><strong>Better long-term efficiency</strong><p>A well-maintained system does not have to work as hard to deliver the same result.</p></div>
        </div>
      </section>

      <section className="section york-process">
        <div className="section-heading compact">
          <div><span className="kicker">Simple to arrange</span><h2>Your York service<br />in <em>three steps.</em></h2></div>
        </div>
        <div className="process-grid">
          <div><span>01</span><h3>Tell us about your system</h3><p>Share your York postcode, the number of units and anything you have noticed.</p></div>
          <div><span>02</span><h3>Receive a clear quote</h3><p>We confirm what the service includes and the price before arranging a time.</p></div>
          <div><span>03</span><h3>We service and explain</h3><p>Your engineer works tidily, tests the system and leaves you with clear next steps.</p></div>
        </div>
      </section>

      <section className="york-areas">
        <div><span className="kicker light">Areas we cover</span><h2>Across York and<br /><em>close by.</em></h2><p>Not sure whether we reach you? Send your postcode and we’ll confirm.</p></div>
        <ul><li>York city centre</li><li>Acomb</li><li>Bishopthorpe</li><li>Clifton</li><li>Copmanthorpe</li><li>Fulford</li><li>Haxby</li><li>Heslington</li><li>Huntington</li><li>Poppleton</li></ul>
      </section>

      <section className="faq section york-faq" id="york-faq">
        <div className="faq-intro"><span className="kicker">York servicing FAQs</span><h2>Good to<br /><em>know.</em></h2><p>Need advice about your particular system? Describe it in the enquiry form and we’ll help you choose the right service.</p></div>
        <div className="faq-list">
          {yorkFaqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <LocationQuoteSection enquiryContext="/air-conditioning-servicing-york"
        id="york-quote"
        kicker="York servicing enquiry"
        headline={<>Let’s get your air<br /><em>flowing properly.</em></>}
        copy="Tell us where you are and what system you have. We’ll reply with the right service and a clear quote."
        selectLabel="Property type"
        selectName="Property type"
        options={["Home", "Office", "Shop or hospitality", "Other commercial premises"]}
        textareaLabel="Tell us about the system"
        textareaPlaceholder="Number of units, make or model, and anything you’ve noticed…"
        buttonLabel="Request my York quote"
      />

      <LocationFooter />
    </main>
  );
}
