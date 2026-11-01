import { quoteHref } from "../_data/quote";
import type { Metadata } from "next";
import { LocationHeader, LocationFooter, LocationQuoteSection } from "./location-page-shared";
import { HeroLogo } from "./hero-logo";
import { ServiceIllustration } from "./service-illustration";
import { serviceLandings, type LandingKey } from "../_data/service-landings";
export function landingMetadata(key: LandingKey): Metadata {
  const copy = serviceLandings[key]; const title = `${copy.title} | Air Care UK`;
  return { title, description: copy.description, alternates: { canonical: `https://www.aircareuk.co.uk${copy.path}` }, openGraph: { title, description: copy.description, url: `https://www.aircareuk.co.uk${copy.path}`, images: ["/og.png"] } };
}
export function ServiceLandingPage({ service }: { service: LandingKey }) {
  const copy = serviceLandings[service];
  return <main><LocationHeader ctaHref={quoteHref({ from: copy.path, service })} ctaLabel={copy.quote} navItems={[]} />
    <section className="coverage-hero"><div><div className="breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>{copy.title}</span></div><span className="eyebrow">Air Care UK · air conditioning care</span><h1>{copy.title}<br /><em>{copy.accent}</em></h1><p>{copy.intro}</p><div className="hero-actions"><a className="button button-primary" href={quoteHref({ from: copy.path, service })}>{copy.quote} ↗</a><a className="text-link" href="/air-conditioning#areas">Explore our areas ↓</a></div></div><HeroLogo /></section>
    <section className="section"><div className="section-heading"><div><span className="kicker">A practical approach</span><h2>{copy.heading}</h2></div><p>{copy.copy}</p></div><div className="service-grid">{copy.checks.map(([title, text], i) => <article className="service-item" key={title}><span className="service-number">0{i + 1}</span><div className="service-icon"><ServiceIllustration service={String(i + 1).padStart(2, "0")} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="section coverage-editorial"><div><span className="kicker light">Before you enquire</span><h2>A clearer brief.<br /><em>A better starting point.</em></h2></div><div><p>{copy.prepare}</p><div className="coverage-related-services"><a href="/tm44-air-conditioning-inspections">Need a TM44 inspection instead? ↗</a><a href="/air-conditioning#areas">Find air conditioning support in your area ↗</a></div>{service === "servicing" && <p><a className="button button-mint" href="/air-conditioning-servicing-york">York servicing information ↗</a></p>}</div></section>
    <section className="section faq"><div className="faq-intro"><span className="kicker">Useful answers</span><h2>Before you<br /><em>book.</em></h2></div><div className="faq-list">{copy.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
    <LocationQuoteSection id="quote" enquiryContext={copy.path} kicker={copy.quote} headline={<>Tell us about the job.<br /><em>We’ll help scope it.</em></>} copy={copy.intro} postcodeLabel="Site postcode" postcodePlaceholder="Your site postcode" selectLabel="What do you need help with?" selectName="Service" options={[...copy.options]} textareaLabel="Site and equipment details" textareaPlaceholder="Address, equipment details, access and what you need help with…" buttonLabel={copy.quote} />
    <LocationFooter /></main>;
}
