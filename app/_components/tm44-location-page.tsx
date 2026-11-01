import { HeroLogo } from "./hero-logo";
import type { Metadata } from "next";
import { LocationHeader, LocationFooter } from "./location-page-shared";
import { TM44QuickFacts, TM44ScopeSection, TM44ReportSection, TM44PricingSection, TM44ProcessSection, TM44FaqSection, TM44QuoteSection, TM44FinalCTA } from "./tm44-sections";
import { locations, type CoverageLocation } from "../_data/coverage";
import { tm44Path } from "../_data/tm44";

const origin = "https://www.aircareuk.co.uk";
export function tm44LocationMetadata(location: CoverageLocation): Metadata {
  const title = `TM44 Inspections in ${location.name} | Air Care UK`;
  const description = `TM44 air conditioning inspections in ${location.name}. Enquire about an accredited assessment, lodged ACIR and inspection quote for your building or property portfolio.`;
  const url = `${origin}${tm44Path}/${location.slug}`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: "website", images: ["/og-tm44.png"] }, twitter: { card: "summary_large_image", title, description, images: ["/og-tm44.png"] } };
}
export function TM44LocationPage({ location }: { location: CoverageLocation }) {
  const context = `${tm44Path}/${location.slug}`;
  const regional = locations.filter((item) => item.region === location.region && item.slug !== location.slug);
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": "Service", name: `TM44 air conditioning inspections in ${location.name}`, url: origin + context, serviceType: "Air conditioning energy inspection", areaServed: { "@type": "Place", name: location.name }, provider: { "@type": "Organization", name: "Air Care UK", url: origin } }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: origin }, { "@type": "ListItem", position: 2, name: "TM44 inspections", item: origin + tm44Path }, { "@type": "ListItem", position: 3, name: location.name, item: origin + context }] }] };
  return <main className="tm44-location-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <LocationHeader ctaHref="#quote" ctaLabel="Get a TM44 quote" navItems={[{ href: tm44Path, label: "TM44 inspections" }, { href: "#scope", label: "Who needs one?" }, { href: "#pricing", label: "Pricing" }]} />
    <section className="coverage-hero coverage-location-hero"><div><div className="breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href={tm44Path}>TM44 inspections</a><span aria-hidden="true">/</span><span>{location.name}</span></div><span className="eyebrow">Air conditioning energy inspections · {location.region}</span><h1>TM44 inspections<br /><em>in {location.name}.</em></h1><p>Arrange an accredited air conditioning energy assessment for your {location.name} building. A clear inspection scope, a lodged report and practical energy-performance recommendations.</p><div className="hero-actions"><a className="button button-primary" href="#quote">Get a TM44 quote ↗</a><a href="#scope" className="text-link">Check the requirements ↓</a></div></div><HeroLogo /></section>
    <TM44QuickFacts /><TM44QuoteSection context={context} locationName={location.name} />
    <section className="section coverage-local-note"><div><span className="kicker">Planning an inspection in {location.name}</span><h2>{location.focus}</h2></div><div><p>{location.note}</p><p>For your TM44 enquiry in {location.name}, include the site address, any previous report and an approximate equipment list. Identify who can provide access to the indoor units, outdoor equipment and controls. For multiple properties, list each address separately so the inspection scope can be agreed building by building.</p><p>The quoted work covers the energy inspection and reporting. Any maintenance or remedial work can be considered separately after the findings are available.</p></div></section>
    <TM44ScopeSection /><TM44ReportSection /><TM44ProcessSection /><TM44PricingSection /><TM44FaqSection />
    <section className="section coverage-related" id="areas"><div className="section-heading"><div><span className="kicker">TM44 coverage</span><h2>Find your next site.<br /><em>Keep the same point of contact.</em></h2></div></div>{regional.length > 0 && <><h3>Other locations in {location.region}</h3><ul className="coverage-nearby">{regional.map((item) => <li key={item.slug}><a href={`${tm44Path}/${item.slug}`}>TM44 {item.name} ↗</a></li>)}</ul></>}<a className="button button-primary" href={`${tm44Path}#areas`}>Browse all 67 TM44 areas ↗</a><div className="coverage-related-services tm44-supporting-links"><a href={`/air-conditioning/${location.slug}`}>Air conditioning care in {location.name} ↗</a><a href={`/facilities-management/${location.slug}`}>Facilities support in {location.name} ↗</a></div></section>
    <TM44FinalCTA /><LocationFooter />
  </main>;
}
