/** A supporting brand mark between the main hero and footer. */
export function BrandStamp({ className = "" }: { className?: string }) {
  return <img className={`brand-stamp ${className}`.trim()} src="/air-care-uk-retro-logo.svg" width={1254} height={1254} alt="Air Care UK" loading="lazy" decoding="async" />;
}
