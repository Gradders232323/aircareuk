import locationData from "./locations.json";

export const locations = locationData;
export type CoverageLocation = (typeof locations)[number];
export type ServiceKey = "air-conditioning" | "facilities-management";
export const regions = [...new Set(locations.map((location) => location.region))];
export const locationFor = (slug: string) => locations.find((location) => location.slug === slug);
export const regionId = (region: string) => region.toLowerCase().replace(/[^a-z0-9]+/g, "-");
export const serviceNames: Record<ServiceKey, string> = {
  "air-conditioning": "Air conditioning",
  "facilities-management": "Facilities management",
};
export const allPagePaths = ["/quote", "/air-conditioning-servicing", "/air-conditioning-installations", "/air-conditioning-repairs", "/", "/care-plan", "/tm44-air-conditioning-inspections", "/air-conditioning-maintenance-york", "/air-conditioning-servicing-york", "/air-conditioning", "/facilities-management", ...locations.flatMap((location) => [`/air-conditioning/${location.slug}`, `/facilities-management/${location.slug}`, `/tm44-air-conditioning-inspections/${location.slug}`])];
