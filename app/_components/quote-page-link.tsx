import { BrandStamp } from "./brand-stamp";
import { quoteHref, type QuoteService } from "../_data/quote";
export function QuotePageLink({ context = "/", service, label = "Continue to quote form" }: { context?: string; service?: QuoteService; label?: string }) {
  return <div className="quote-page-card"><BrandStamp className="brand-stamp-quote" /><span className="kicker">Your next step</span><h3>One place for<br /><em>your enquiry.</em></h3><p>Add your contact details, site postcode and the work you need on our dedicated quote page.</p><a className="button button-mint" href={quoteHref({ from: context, service })}>{label} <span aria-hidden="true">↗</span></a><small>Review your details before preparing the enquiry.</small></div>;
}
