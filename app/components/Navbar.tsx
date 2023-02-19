import { Link, NavLink } from "@remix-run/react";
import clsx from "clsx";
import { useEffect, useState } from "react";

const createDocLinks = (id: string) => {
  const capitalized = id[0].toUpperCase() + id.slice(1);

  return {
    label: capitalized,
    href: `/docs/${id}`,
    categories: [
      { label: `${capitalized} schema`, href: `#${id}-schema` },
      { label: `Get all ${id}s`, href: `#get-all-${id}s` },
      { label: `Get a single ${id}`, href: `#get-a-single-${id}` },
      { label: `Get multiple ${id}s`, href: `#get-multiple-${id}s` },
      { label: `Filter ${id}s`, href: `#filter-${id}s` },
    ],
  };
};

const docLinks = [
  {
    label: "Introduction",
    href: "/docs/introduction",
    categories: [
      { label: "REST", href: "#rest" },
      { label: "GraphQL", href: "#graphql" },
      { label: "Info and Pagination", href: "#info-and-pagination" },
    ],
  },
  createDocLinks("character"),
  createDocLinks("location"),
  createDocLinks("episode"),
];

export function Navbar() {
  const [isNavbarOpened, setNavbarOpen] = useState(false);

  const handleClick = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    if (!isNavbarOpened) return;

    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "initial";
    };
  }, [isNavbarOpened]);

  return (
    <>
      <nav
        className={clsx(
          "fixed w-full md:translate-x-0 z-10 bg-white md:sticky md:w-60 p-6 overflow-y-auto top-[60px] h-[calc(100vh-60px)] duration-100",
          {
            "-translate-x-full": !isNavbarOpened,
          }
        )}
      >
        <ul className="[&_a]:duration-100 [&_a:hover]:text-primary">
          {docLinks.map((doc) => (
            <li key={doc.href} className="mb-6 last:mb-0">
              <NavLink
                className={({ isActive }) => clsx("text-xl font-bold", { "text-primary": isActive })}
                to={doc.href}
                onClick={handleClick}
              >
                {doc.label}
              </NavLink>
              <ul className="mt-2">
                {doc.categories.map((category) => (
                  <li key={category.href} className="my-1">
                    <Link to={{ pathname: doc.href, hash: category.href }} onClick={handleClick}>
                      {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="z-50 md:hidden flex justify-center items-center fixed bottom-4 right-4 w-[60px] h-[60px] bg-primary rounded-full"
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        onClick={() => setNavbarOpen((o) => !o)}
        aria-label="Open Navbar"
      >
        <svg
          className={clsx("duration-700", { "rotate-45": isNavbarOpened })}
          width={20}
          height={20}
          viewBox="0 0 459 459"
        >
          <path d="M459.319,229.668c0,22.201-17.992,40.193-40.205,40.193H269.85v149.271c0,22.207-17.998,40.199-40.196,40.193 c-11.101,0-21.149-4.492-28.416-11.763c-7.276-7.281-11.774-17.324-11.769-28.419l-0.006-149.288H40.181 c-11.094,0-21.134-4.492-28.416-11.774c-7.264-7.264-11.759-17.312-11.759-28.413C0,207.471,17.992,189.475,40.202,189.475h149.267 V40.202C189.469,17.998,207.471,0,229.671,0c22.192,0.006,40.178,17.986,40.19,40.187v149.288h149.282 C441.339,189.487,459.308,207.471,459.319,229.668z"></path>
        </svg>
      </button>
    </>
  );
}
