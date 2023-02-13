import { Link } from "@remix-run/react";
import { Logo } from "~/icons/Logo";

export function Header() {
  return (
    <header>
      <nav className="min-h-[60px] flex justify-between items-center mx-auto w-full px-2 md:px-6">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="flex justify-center items-center space-x-3 md:space-x-7 text-sm md:text-base">
          <li>
            <Link className="duration-100 hover:text-primary font-bold text-dark-secondary" to="/api" reloadDocument>
              API
            </Link>
          </li>
          <li>
            <Link
              className="duration-100 hover:text-primary font-bold text-dark-secondary uppercase"
              to="/docs"
              reloadDocument
            >
              Docs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
