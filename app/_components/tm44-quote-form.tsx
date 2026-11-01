"use client";

import { useState, type FormEvent } from "react";

type Props = { context: string; locationName?: string };
export function TM44QuoteForm({ context, locationName }: Props) {
  const [draft, setDraft] = useState<string | null>(null);
  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [...data.entries()].map(([name, value]) => `${name}: ${String(value).trim() || "Not provided"}`);
    const subject = `TM44 quote enquiry — ${data.get("Building postcode") || locationName || "Air Care UK"}`;
    const href = `mailto:hello@aircareuk.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setDraft(href);
    window.location.href = href;
  }
  return <form className="quote-form tm44-quote-form" action="mailto:hello@aircareuk.co.uk" method="post" encType="text/plain" onSubmit={prepareEnquiry}>
    <input type="hidden" name="Service" value="TM44 air conditioning inspection" />
    <input type="hidden" name="Enquiry page" value={context} />
    {locationName && <input type="hidden" name="Area" value={locationName} />}
    <div className="field-row"><label>Your name<input required name="Name" autoComplete="name" placeholder="Your name" maxLength={100} /></label><label>Organisation<input name="Organisation" autoComplete="organization" placeholder="Business or managing agent" maxLength={150} /></label></div>
    <div className="field-row"><label>Email<input required name="Email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={150} /></label><label>Phone<input name="Phone" type="tel" autoComplete="tel" placeholder="Best contact number" maxLength={40} /></label></div>
    <div className="field-row"><label>Building postcode<input required name="Building postcode" autoComplete="postal-code" placeholder="Site postcode" maxLength={12} /></label><label>Building type<select required name="Building type" defaultValue=""><option value="" disabled>Select building type</option><option>Office</option><option>Retail or showroom</option><option>Hotel or hospitality</option><option>School or education</option><option>Healthcare premises</option><option>Warehouse or industrial</option><option>Mixed use or other</option><option>Several buildings</option></select></label></div>
    <div className="field-row"><label>Approximate number of units<select name="Approximate units" defaultValue="Not sure"><option>Not sure</option><option>1–5 units</option><option>6–15 units</option><option>16–30 units</option><option>31+ units</option><option>Several sites — details below</option></select></label><label>Combined cooling capacity<select name="Combined output" defaultValue="Not sure — please help me check"><option>Not sure — please help me check</option><option>More than 12kW</option><option>12kW or below</option></select></label></div>
    <div className="field-row"><label>Previous inspection report<select name="Previous report" defaultValue="Not sure"><option>Not sure</option><option>Yes — report available</option><option>Yes — need to locate it</option><option>No previous report</option></select></label><label>Last inspection date, if known<input type="date" name="Last inspection date" /></label></div>
    <label>Site and system details<textarea name="System details" rows={3} maxLength={2000} placeholder={`${locationName ? `${locationName}: ` : ""}Site address, unit types, access, existing report reference or additional locations…`} /></label>
    <button className="button button-mint" type="submit">Request my TM44 quote <span aria-hidden="true">↗</span></button>
    <small>Opens your email app with the enquiry details. Review and send the email to hello@aircareuk.co.uk. If you have an existing report, you can attach it there.</small>
    {draft && <p className="tm44-draft-status" role="status">Your email enquiry is prepared. <a href={draft}>Open it again</a>, or email <a href="mailto:hello@aircareuk.co.uk">hello@aircareuk.co.uk</a> directly. It has not been sent by this website.</p>}
  </form>;
}
