export function HeroLogo({ className = "" }: { className?: string }) {
  return <img className={`hero-logo-art ${className}`.trim()} src="/air-care-uk-hero.svg" width={1254} height={1000} alt="Air Care UK — TM44 and Air Conditioning" fetchPriority="high" />;
}
