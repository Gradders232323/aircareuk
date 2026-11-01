import { notFound } from "next/navigation";
import { locations, locationFor } from "../../_data/coverage";
import { TM44LocationPage, tm44LocationMetadata } from "../../_components/tm44-location-page";
type Props = { params: Promise<{ location: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return locations.map((item) => ({ location: item.slug })); }
export async function generateMetadata({ params }: Props) {
  const item = locationFor((await params).location);
  if (!item) notFound();
  return tm44LocationMetadata(item);
}
export default async function Page({ params }: Props) {
  const item = locationFor((await params).location);
  if (!item) notFound();
  return <TM44LocationPage location={item} />;
}
