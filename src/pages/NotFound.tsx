import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSeo } from "@/hooks/use-seo";

const SERVICES = [
  { to: "/services/carpet-cleaning/", label: "Carpet cleaning" },
  { to: "/services/carpet-maintenance-programs/", label: "Carpet maintenance programs" },
  { to: "/services/tile-grout-cleaning/", label: "Tile and grout cleaning" },
  { to: "/services/grout-restoration/", label: "Grout restoration" },
  { to: "/services/floor-maintenance/", label: "Hard surface / VCT" },
];

const NotFound = () => {
  const location = useLocation();

  useSeo({
    title: "Page Not Found — PHL Clean",
    description: "That page is not on phlclean.com. Call (215) 550-1414 or schedule a walkthrough.",
    noindex: true,
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-phl-ground px-6">
      <div className="max-w-xl">
        <p className="font-mono text-[11px] tracking-[0.13em] uppercase text-phl-blue mb-3">404</p>
        <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] text-phl-ink mb-4">That page is not here</h1>
        <p className="text-phl-ink-2 leading-relaxed mb-8">
          It may have been an old janitorial URL we retired, or a broken link.
          Floor work is still the same place: walk the floor, write the scope, then work.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <Link to="/" className="btn-primary px-6 py-3 text-[15px]">Back to home</Link>
          <a href="tel:+12155501414" className="btn-ghost px-6 py-3 text-[15px]">(215) 550-1414</a>
          <Link to="/#contact" className="btn-ghost px-6 py-3 text-[15px]">Schedule a walkthrough</Link>
        </div>
        <p className="spec-label mb-3">Services</p>
        <ul className="space-y-2">
          {SERVICES.map(s => (
            <li key={s.to}>
              <Link to={s.to} className="text-phl-ink-2 hover:text-phl-blue text-[15px]">{s.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotFound;
