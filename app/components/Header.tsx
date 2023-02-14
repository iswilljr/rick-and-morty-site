import { Link, useLocation } from "@remix-run/react";
import clsx from "clsx";
import { Logo } from "~/icons/Logo";

export function Header() {
  const { pathname } = useLocation();

  const isDocsPathname = pathname.startsWith("/docs");

  return (
    <header
      className={clsx("bg-white z-10", {
        sticky: isDocsPathname,
        "top-0": isDocsPathname,
      })}
    >
      <nav
        className={clsx(
          "min-h-[60px] flex justify-between items-center mx-auto w-full px-2 md:px-6 border border-transparent",
          {
            "border-b-slate-200": isDocsPathname,
          }
        )}
      >
        <Link to="/">
          <Logo />
        </Link>
        <ul className="flex justify-center items-center space-x-3 md:space-x-7 text-sm md:text-base uppercase">
          <li>
            <Link className="duration-100 hover:text-primary font-bold text-dark-secondary" to="/api" reloadDocument>
              API
            </Link>
          </li>
          <li>
            <Link className="duration-100 hover:text-primary font-bold text-dark-secondary" to="/docs/introduction">
              Docs
            </Link>
          </li>
          <li>
            <Link
              className="duration-100 hover:text-primary font-bold text-dark-secondary"
              to="/official"
              reloadDocument
            >
              Official API
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
