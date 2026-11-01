import type { Metadata } from "next";
import { LocationHeader, LocationFooter } from "../_components/location-page-shared";
import { HeroLogo } from "../_components/hero-logo";
import { QuoteForm } from "../_components/tm44-quote-form";
import { quoteServices, type QuoteService } from "../_data/quote";
import { locationFor, allPagePaths } from "../_data/coverage";

export const metadata: Metadata = {
  title: "Request a Quote | TM44 & Air Conditioning | Air Care UK",
  description: "Request a quote for TM44 inspections, servicing, installations or repairs. Share your site and equipment details with Air Care UK.",
  alternates: { canonical: "https://www.aircareuk.co.uk/quote" },
  openGraph: { title: "Request a Quote | Air Care UK", description: "TM44 inspections and air conditioning enquiries, all in one place.", url: "https://www.aircareuk.co.uk/quote", images: ["/og-tm44.png"] },
};
type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };
export default async function QuotePage({ searchParams }: Props) {
  const query = await searchParams;
  const initialService: QuoteService = quoteServices.find((item) => item.value === query.service)?.value ?? "tm44";
  const area = typeof query.area === "string" ? locationFor(query.area) : undefined;
  const context = typeof query.from === "string" && allPagePaths.includes(query.from) ? query.from : "/quote";
  return <main className="dedicated-quote-page"><LocationHeader ctaHref="#quote-form" ctaLabel="Complete your enquiry" navItems={[]} />
    <section className="coverage-hero quote-page-hero"><div><div className="breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>Request a quote</span></div><span className="eyebrow">TM44 · servicing · installations · repairs</span><h1>Get your quote.<br /><em>Start with the site details.</em></h1><p>Choose the work you need, tell us about the building and add your contact details. You can review the selected service and update any details below.</p><a className="button button-primary" href="#quote-form">Start your enquiry ↓</a></div><HeroLogo /></section>
    <section className="quote-section dedicated-quote-section" id="quote-form"><div className="quote-copy"><span className="kicker light">Your enquiry</span><h2>One building.<br />Several sites.<br /><em>A clear starting point.</em></h2><p>Include the postcode, approximate number of units and any information you already have. For TM44, a previous inspection date or report reference is useful, but you can enquire without them.</p><ul className="tm44-quote-points"><li>Choose or change the service you need</li><li>Enquire about a single building or several sites</li><li>Scope, availability and pricing are agreed before booking</li></ul><p className="tm44-enquiry-note">This form prepares an email draft. Review it in your email app and send it to our team. You can attach any existing report or equipment schedule there.</p><a href="mailto:hello@aircareuk.co.uk">Prefer to email directly? <b>hello@aircareuk.co.uk</b></a></div><QuoteForm context={context} locationName={area?.name} initialService={initialService} /></section><LocationFooter /></main>;
}
