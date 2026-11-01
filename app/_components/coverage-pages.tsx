import type { Metadata } from "next";
import { LocationHeader, LocationFooter, LocationQuoteSection } from "./location-page-shared";
import { ServiceIllustration } from "./service-illustration";
import { locations, regions, regionId, serviceNames, type CoverageLocation, type ServiceKey } from "../_data/coverage";
import { services } from "../_data/services";

const origin = "https://www.aircareuk.co.uk";
export function coverageMetadata(service: ServiceKey, location?: CoverageLocation): Metadata {
  const name = serviceNames[service];
  const title = `${name}${location ? ` in ${location.name}` : " across England"} | Air Care UK`;
  const description = location
    ? `${name} in ${location.name}: ${service === "air-conditioning" ? "servicing, planned maintenance and fault-finding for homes and commercial premises" : "planned maintenance, HVAC support and clearer building-care arrangements"}. Discuss your requirements with Air Care UK.`
    : `${name} across 67 locations in England. Explore Air Care UK services, find your area and enquire about maintenance and ongoing building care.`;
  const url = `${origin}/${service}${location ? `/${location.slug}` : ""}`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Air Care UK" }] }, twitter: { card: "summary_large_image", title, description, images: ["/og.png"] } };
}
function Header() {
  return <LocationHeader ctaHref="#quote" ctaLabel="Request a quote" navItems={[{ href: "/air-conditioning", label: "Air conditioning" }, { href: "/facilities-management", label: "Facilities management" }, { href: "#areas", label: "Areas covered" }]} />;
}
export function AreaDirectory({ service }: { service: ServiceKey | "tm44-air-conditioning-inspections" }) {
  const label = service === "tm44-air-conditioning-inspections" ? "TM44 inspection" : serviceNames[service];
  return <section className="section coverage-directory" id="areas">
    <div className="section-heading"><div><span className="kicker">Find your area</span><h2>67 locations.<br /><em>One clear point of contact.</em></h2></div><p>Choose a location to explore {label.toLowerCase()} support and the details to include in your enquiry.</p></div>
    <div className="coverage-region-jump" aria-label="Browse regions">{regions.map((region) => <a key={region} href={`#${regionId(region)}`}>{region}</a>)}</div>
    <div className="coverage-regions">{regions.map((region) => <div key={region} id={regionId(region)} className="coverage-region"><h3>{region}</h3><ul>{locations.filter((location) => location.region === region).map((location) => <li key={location.slug}><a href={`/${service}/${location.slug}`}>{location.name}<span aria-hidden="true">↗</span></a></li>)}</ul></div>)}</div>
  </section>;
}
function Enquiry({ service, location }: { service: ServiceKey; location?: CoverageLocation }) {
  const copy = services[service];
  return <LocationQuoteSection id="quote" enquiryContext={`/${service}${location ? `/${location.slug}` : ""}`} kicker={location ? `Enquire in ${location.name}` : "Talk to Air Care UK"} headline={<>Tell us what you need.<br /><em>We’ll help you plan it.</em></>} copy={copy.quoteCopy} postcodeLabel="Site postcode" postcodePlaceholder="Your site postcode" selectLabel="What support do you need?" selectName="Service" options={[...copy.options]} textareaLabel="Site and equipment details" textareaPlaceholder={`${location ? `${location.name}: ` : ""}Site address, number of systems, access arrangements and what you need help with…`} buttonLabel="Request my quote" />;
}
function ServiceCards({ service }: { service: ServiceKey }) {
  return <div className="service-grid coverage-service-grid">{services[service].cards.map((card, index) => <article className="service-item" key={card.title}><span className="service-number">0{index + 1}</span><div className="service-icon"><ServiceIllustration service={`0${index + 1}`} /></div><h3>{card.title}</h3><p>{card.text}</p><a href={card.href}>{card.link} <span aria-hidden="true">↗</span></a></article>)}</div>;
}
export function CoverageOverview({ service }: { service: ServiceKey }) {
  const copy = services[service];
  const other: ServiceKey = service === "air-conditioning" ? "facilities-management" : "air-conditioning";
  return <main><Header /><section className="coverage-hero"><div><div className="breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>{copy.label}</span></div><span className="eyebrow">{copy.eyebrow}</span><h1>{copy.label}<br /><em>{copy.accent}</em></h1><p>{copy.intro}</p><div className="hero-actions"><a className="button button-primary" href="#quote">Discuss your requirements ↗</a><a className="text-link" href="#areas">Find your area ↓</a></div></div><img src="/air-care-uk-hero.svg" width={1254} height={1000} alt="Air Care UK — TM44 &amp; Air Conditioning" fetchPriority="high" /></section>
    <div className="coverage-ribbon"><span>67 locations across England</span><span>Planned care</span><span>Clear service scopes</span></div>
    <section className="section"><div className="section-heading"><div><span className="kicker">{copy.label} services</span><h2>{copy.overview}</h2></div><p>{copy.overviewCopy}</p></div><ServiceCards service={service} /></section>
    <section className="section coverage-editorial"><div><span className="kicker light">Built around your premises</span><h2>{copy.practicalTitle}</h2></div><div><p>{copy.practicalCopy}</p><h3>{copy.audienceTitle}</h3><p>{copy.audienceCopy}</p><a href={`/${other}`} className="button button-mint">Explore {serviceNames[other].toLowerCase()} ↗</a></div></section>
    <AreaDirectory service={service} /><Enquiry service={service} /><LocationFooter /></main>;
}
export function CoverageLocationPage({ service, location }: { service: ServiceKey; location: CoverageLocation }) {
  const copy = services[service];
  const other: ServiceKey = service === "air-conditioning" ? "facilities-management" : "air-conditioning";
  const regional = locations.filter((item) => item.region === location.region && item.slug !== location.slug);
  const url = `${origin}/${service}/${location.slug}`;
  const breadcrumbs = [{ "@type": "ListItem", position: 1, name: "Home", item: origin }, { "@type": "ListItem", position: 2, name: copy.label, item: `${origin}/${service}` }, { "@type": "ListItem", position: 3, name: location.name, item: url }];
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": "Service", name: `${copy.label} in ${location.name}`, serviceType: copy.label, url, areaServed: { "@type": "Place", name: location.name }, provider: { "@type": "Organization", name: "Air Care UK", url: origin } }, { "@type": "BreadcrumbList", itemListElement: breadcrumbs }] };
  return <main><Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="coverage-hero coverage-location-hero"><div><div className="breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href={`/${service}`}>{copy.label}</a><span aria-hidden="true">/</span><span>{location.name}</span></div><span className="eyebrow">{location.region} · Air Care UK</span><h1>{copy.label}<br /><em>in {location.name}.</em></h1><p>{copy.intro}</p><div className="hero-actions"><a className="button button-primary" href="#quote">Enquire in {location.name} ↗</a><a href={`/${service}#areas`} className="text-link">Browse all areas ↓</a></div></div><img src="/air-care-uk-hero.svg" width={1254} height={1000} alt="Air Care UK polar bear badge" fetchPriority="high" /></section>
    <section className="section coverage-local-note"><div><span className="kicker">Planning support in {location.name}</span><h2>{location.focus}</h2></div><div><p>{location.note}</p><p>{service === "air-conditioning" ? `For air conditioning in ${location.name}, start with the number of systems, how they are used and the areas affected. Include indoor and outdoor unit details where possible, and let us know whether you need routine care or investigation of a particular problem.` : `For a facilities-management brief in ${location.name}, explain who is responsible for each building, how maintenance is currently arranged and which issues need a more consistent process. Include the addresses, site contacts and existing equipment records.`}</p>{location.slug === "york" && service === "air-conditioning" && <p>Explore our dedicated <a href="/air-conditioning-servicing-york">York servicing</a> and <a href="/air-conditioning-maintenance-york">York commercial maintenance</a> pages for more detail.</p>}</div></section>
    <section className="section coverage-services"><div className="section-heading"><div><span className="kicker">A practical service brief</span><h2>{copy.label} support<br /><em>for {location.name}.</em></h2></div><p>{copy.overviewCopy}</p></div><ServiceCards service={service} /></section>
    <section className="section coverage-editorial"><div><span className="kicker light">How we approach the work</span><h2>{copy.practicalTitle}</h2></div><div><p>{copy.practicalCopy}</p><h3>{copy.audienceTitle}</h3><p>{copy.audienceCopy}</p></div></section>
    <section className="section"><div className="section-heading"><div><span className="kicker">From enquiry to follow-up</span><h2>A clear plan.<br /><em>At every step.</em></h2></div></div><div className="process-grid">{copy.steps.map(([title, text], index) => <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>
    <section className="section faq"><div className="faq-intro"><span className="kicker">Before you enquire</span><h2>{copy.label}<br /><em>questions.</em></h2><p>Helpful information for arranging support in {location.name}.</p></div><div className="faq-list"><details><summary>How do I arrange {copy.label.toLowerCase()} in {location.name}?<span aria-hidden="true">+</span></summary><p>Use the enquiry form below and include your {location.name} site address, the support required and a contact who can explain access arrangements. We will review the details and discuss the scope and next step.</p></details>{copy.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
    <section className="section coverage-related" id="areas"><div className="section-heading"><div><span className="kicker">Explore more support</span><h2>Connected services.<br /><em>Clearer choices.</em></h2></div></div><div className="coverage-related-services"><a href={`/${other}/${location.slug}`}>{serviceNames[other]} in {location.name} ↗</a><a href={`/tm44-air-conditioning-inspections/${location.slug}`}>TM44 inspections in {location.name} ↗</a><a href="/care-plan">Ongoing maintenance care ↗</a></div><h3>{regional.length ? `More locations in ${location.region}` : "Explore all areas"}</h3><ul className="coverage-nearby">{regional.map((item) => <li key={item.slug}><a href={`/${service}/${item.slug}`}>{item.name} ↗</a></li>)}</ul><a className="text-link" href={`/${service}#areas`}>View all 67 locations →</a></section>
    <Enquiry service={service} location={location} /><LocationFooter /></main>;
}
