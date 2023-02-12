import { Link } from "@remix-run/react";
import { Logo } from "~/icons/Logo";

export function Header() {
  return (
    <header>
      <nav className="min-h-[60px] flex justify-between items-center mx-auto w-full px-2 md:px-6">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="flex justify-center items-center space-x-3 md:space-x-7 text-sm md:text-lg">
          <li>
            <Link className="duration-100 hover:text-primary font-bold text-dark-secondary" to="/api" reloadDocument>
              API
            </Link>
          </li>
          <li>
            <Link className="duration-100 hover:text-primary font-bold text-dark-secondary" to="/docs" reloadDocument>
              Docs
            </Link>
          </li>
          <li>
            <Link className="duration-100 hover:text-primary font-bold text-dark-secondary" to="/about" reloadDocument>
              About
            </Link>
          </li>
          <li>
            <Link
              className="duration-100 hover:bg-primary hover:text-white font-bold text-dark-secondary text-sm rounded-lg border-2 border-primary py-2 px-4"
              to="/support"
              reloadDocument
            >
              SUPPORT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
