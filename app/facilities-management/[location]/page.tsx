import { notFound } from "next/navigation";
import { CoverageLocationPage, coverageMetadata } from "../../_components/coverage-pages";
import { locations, locationFor } from "../../_data/coverage";
type Props = { params: Promise<{ location: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return locations.map((item) => ({ location: item.slug })); }
export async function generateMetadata({ params }: Props) {
  const item = locationFor((await params).location);
  if (!item) notFound();
  return coverageMetadata("facilities-management", item);
}
export default async function Page({ params }: Props) {
  const item = locationFor((await params).location);
  if (!item) notFound();
  return <CoverageLocationPage service="facilities-management" location={item} />;
}
