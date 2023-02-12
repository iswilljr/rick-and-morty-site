import { Link } from "@remix-run/react";
import { Github } from "~/icons/Github";
import { Support } from "~/icons/Support";
import { Twitter } from "~/icons/Twitter";

export function Footer() {
  return (
    <footer className="relative flex flex-col flex-wrap justify-center items-center bg-dark text-secondary w-full min-h-[120px]">
      <ul className="flex justify-center items-center flex-wrap space-x-3">
        <li>
          <a
            className="hover:text-primary"
            href="https://github.com/iswilljr/rick-and-morty-api"
            aria-label="github"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github />
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary"
            href="https://twitter.com/iswilljr"
            aria-label="twitter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <Link className="hover:text-primary" aria-label="support us" to="/support" reloadDocument>
            <Support />
          </Link>
        </li>
      </ul>
      <div className="mt-5">
        <span>
          ❮❯ by{" "}
          <a
            className="hover:text-primary"
            href="https://github.com/iswilljr"
            rel="noopener noreferrer"
            target="_blank"
          >
            Will
          </a>
        </span>
        <span> 2023</span>
      </div>
    </footer>
  );
}
