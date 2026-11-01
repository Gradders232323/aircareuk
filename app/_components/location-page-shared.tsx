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
  kicker: string;
  headline: ReactNode;
  copy: string;
  postcodeLabel?: string;
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
      <img className="brand-logo" src="/air-care-uk-retro-logo.svg" alt="Air Care UK — Heating &amp; Cooling" width={1254} height={1254} />
    </a>
  );
}

export function LocationHeader({ ctaHref, ctaLabel, navItems }: LocationHeaderProps) {
  return (
    <header className="site-header york-header">
      <Brand />
      <nav aria-label="Main navigation">
        {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
      </nav>
      <a className="header-cta" href={ctaHref}>{ctaLabel} <span aria-hidden="true">↗</span></a>
    </header>
  );
}

export function LocationQuoteSection({
  id,
  kicker,
  headline,
  copy,
  postcodeLabel = "York postcode",
  emailLabel = "Email",
  emailPlaceholder = "you@example.com",
  selectLabel,
  selectName,
  options,
  textareaLabel,
  textareaPlaceholder,
  buttonLabel,
}: LocationQuoteSectionProps) {
  return (
    <section className="quote-section york-quote" id={id}>
      <div className="quote-copy">
        <span className="kicker light">{kicker}</span>
        <h2>{headline}</h2>
        <p>{copy}</p>
        <a href="mailto:hello@aircareuk.co.uk">Prefer email? <b>hello@aircareuk.co.uk</b></a>
      </div>
      <form className="quote-form" action="mailto:hello@aircareuk.co.uk" method="post" encType="text/plain">
        <div className="field-row">
          <label>Name<input required name="Name" autoComplete="name" placeholder="Your name" /></label>
          <label>{postcodeLabel}<input required name="Postcode" autoComplete="postal-code" placeholder="e.g. YO10" /></label>
        </div>
        <div className="field-row">
          <label>{emailLabel}<input required name="Email" type="email" autoComplete="email" placeholder={emailPlaceholder} /></label>
          <label>Phone<input name="Phone" type="tel" autoComplete="tel" placeholder="Best number" /></label>
        </div>
        <label>{selectLabel}<select name={selectName} defaultValue=""><option value="" disabled>Select one</option>{options.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label>{textareaLabel}<textarea name="System details" rows={3} placeholder={textareaPlaceholder} /></label>
        <button className="button button-mint" type="submit">{buttonLabel} <span>↗</span></button>
        <small>By submitting, you agree that we may contact you about your enquiry.</small>
      </form>
    </section>
  );
}

export function LocationFooter() {
  return (
    <footer>
      <Brand footer />
      <p>Air conditioning inspections, maintenance and servicing for homes and workplaces.</p>
      <div><a href="mailto:hello@aircareuk.co.uk">hello@aircareuk.co.uk</a><a href="/#services">View all services</a></div>
      <small>© 2026 Air Care UK. All rights reserved.</small>
    </footer>
  );
}
