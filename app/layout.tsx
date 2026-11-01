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
    title: "TM44 Air Conditioning Inspections | Air Care UK",
    description: "TM44 air conditioning inspections, lodged reports and clear inspection quotes. Air conditioning care and facilities support across England.",
    openGraph: {
      title: "Air Care UK",
      description: "TM44 inspections. Clear scope. Lodged reports.",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Air Care UK — inspections, maintenance and servicing" }],
    },
    twitter: { card: "summary_large_image", title: "Air Care UK", description: "TM44 inspections. Clear scope. Lodged reports.", images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
