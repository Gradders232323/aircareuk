import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "aircareuk.co.uk";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: "Air Care UK | Air Conditioning Specialists",
    description: "Expert air conditioning inspections, maintenance and servicing for homes and workplaces. Clear advice, upfront pricing and reliable care.",
    openGraph: {
      title: "Air Care UK",
      description: "Cleaner air. Lower bills. No surprises.",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Air Care UK — inspections, maintenance and servicing" }],
    },
    twitter: { card: "summary_large_image", title: "Air Care UK", description: "Cleaner air. Lower bills. No surprises.", images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
