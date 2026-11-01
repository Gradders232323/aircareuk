const serviceLinks = [
  { href: "/tm44-air-conditioning-inspections", label: "TM44" },
  { href: "/air-conditioning-servicing", label: "Servicing" },
  { href: "/air-conditioning-installations", label: "Installations" },
  { href: "/air-conditioning-repairs", label: "Repairs" },
];
export function MainNav() {
  return <nav aria-label="Main navigation">{serviceLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>;
}
export function DirectoryNav() {
  return <nav className="directory-nav" aria-label="Mobile service navigation">{serviceLinks.map((link, index) => <a className={index === 0 ? "directory-nav-primary" : undefined} key={link.href} href={link.href}>{link.label}</a>)}</nav>;
}
