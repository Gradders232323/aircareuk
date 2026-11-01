import { QuotePageLink } from "./quote-page-link";
import { DirectoryNav, MainNav } from "./directory-nav";
import type { ReactNode } from "react";

type NavItem = {
  href: string;
  label: string;
};

type LocationHeaderProps = {
  ctaHref: string;
  ctaLabel: string;
  navItems: NavItem[];
};

type LocationQuoteSectionProps = {
  id: string;
  enquiryContext?: string;
  kicker: string;
  headline: ReactNode;
  copy: string;
  postcodeLabel?: string;
  postcodePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  selectLabel: string;
  selectName: string;
  options: string[];
  textareaLabel: string;
  textareaPlaceholder: string;
  buttonLabel: string;
};

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? " brand-footer" : ""}`} href="/" aria-label="Air Care UK home">
      <img className="brand-logo" src="/air-care-uk-retro-logo.svg" alt="Air Care UK — TM44 &amp; Air Conditioning" width={1254} height={1254} />
    </a>
  );
}

export function LocationHeader({ ctaHref, ctaLabel }: LocationHeaderProps) {
  return (
    <><header className="site-header york-header">
      <Brand />
      <MainNav />
      <a className="header-cta" href={ctaHref}>{ctaLabel} <span aria-hidden="true">↗</span></a>
    </header><DirectoryNav /></>
  );
}

export function LocationQuoteSection({ id, enquiryContext = "/", kicker, headline, copy, buttonLabel }: LocationQuoteSectionProps) {
  return <section className="quote-section york-quote" id={id}><div className="quote-copy"><span className="kicker light">{kicker}</span><h2>{headline}</h2><p>{copy}</p><a href="mailto:hello@aircareuk.co.uk">Prefer email? <b>hello@aircareuk.co.uk</b></a></div><QuotePageLink context={enquiryContext} label={buttonLabel} /></section>;
}

export function LocationFooter() {
  return (
    <footer>
      <Brand footer />
      <p>TM44 air conditioning inspections, maintenance and facilities support for buildings and property portfolios.</p>
      <div><a href="/quote">Request a quote</a><a href="/tm44-air-conditioning-inspections">TM44 inspections &amp; areas</a><a href="mailto:hello@aircareuk.co.uk">hello@aircareuk.co.uk</a><a href="/#services">View all services</a><a href="/air-conditioning">Air conditioning &amp; areas</a><a href="/facilities-management">Facilities management &amp; areas</a></div>
      <small>© 2026 Air Care UK. All rights reserved.</small>
    </footer>
  );
}
