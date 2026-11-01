export const quoteServices = [
  { value: "tm44", label: "TM44 air conditioning inspection" },
  { value: "servicing", label: "Air conditioning servicing" },
  { value: "installations", label: "Air conditioning installation" },
  { value: "repairs", label: "Air conditioning repairs" },
  { value: "maintenance", label: "Planned air conditioning maintenance" },
  { value: "care-plan", label: "Care plan" },
  { value: "facilities-management", label: "Facilities management" },
  { value: "air-conditioning", label: "Air conditioning — help choosing a service" },
] as const;
export type QuoteService = (typeof quoteServices)[number]["value"];
export function inferQuoteRequest(from = "/") {
  let service: QuoteService = "tm44";
  if (from.includes("facilities-management")) service = "facilities-management";
  else if (from.includes("servicing")) service = "servicing";
  else if (from.includes("installations")) service = "installations";
  else if (from.includes("repairs")) service = "repairs";
  else if (from.includes("maintenance")) service = "maintenance";
  else if (from.includes("care-plan")) service = "care-plan";
  else if (from.startsWith("/air-conditioning")) service = "air-conditioning";
  const area = from.endsWith("-york") ? "york" : from.split("/")[2];
  return { service, area, from };
}
export function quoteHref({ service, area, from = "/" }: { service?: QuoteService; area?: string; from?: string } = {}) {
  const inferred = inferQuoteRequest(from);
  const params = new URLSearchParams({ service: service ?? inferred.service });
  if (area ?? inferred.area) params.set("area", area ?? inferred.area!);
  params.set("from", from);
  return `/quote?${params.toString()}`;
}
