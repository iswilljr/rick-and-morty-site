import { LoaderFunction, redirect } from "@remix-run/node";
import { Link, NavLink, Outlet } from "@remix-run/react";
import clsx from "clsx";

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
      { label: "Info and Pagination", href: "#info-and-pagination" },
    ],
  },
  createDocLinks("character"),
  createDocLinks("location"),
  createDocLinks("episode"),
];

export default function Docs() {
  return (
    <div className="flex">
      <aside>
        <nav className="hidden md:block w-60 sticky p-6 overflow-y-auto top-[60px] h-[calc(100vh-60px)]">
          <ul className="[&_a]:duration-100 [&_a:hover]:text-primary">
            {docLinks.map((doc) => (
              <li key={doc.href} className="mb-6 last:mb-0">
                <NavLink
                  className={({ isActive }) => clsx("text-xl font-bold", { "text-primary": isActive })}
                  to={doc.href}
                >
                  {doc.label}
                </NavLink>
                <ul className="mt-2">
                  {doc.categories.map((category) => (
                    <li key={category.href} className="my-1">
                      <Link
                        className="sidebar__Link-sc-1qv9b7u-2 dGSzEX"
                        to={{ pathname: doc.href, hash: category.href }}
                      >
                        {category.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="w-full md:w-[calc(100%-15rem)]">
        <article className="mx-auto max-w-4xl prose lg:prose-xl prose-headings:font-extrabold prose-a:border-b-2 prose-a:no-underline prose-a:duration-100 prose-a:border-b-primary [&_a:hover]:border-b-transparent [&_a:hover]:text-primary [&_li::marker]:text-dark-secondary [&_code::before]:content-none [&_code::after]:content-none prose-code:text-[#476582] prose-code:bg-[#1b1f230d] prose-code:rounded prose-code:py-1 prose-code:px-2 [&_pre_code]:text-green-500 [&_pre+pre]:!mt-0 text-dark-secondary my-[60px] px-6 w-full">
          <Outlet />
        </article>
      </div>
    </div>
  );
}

export const loader: LoaderFunction = async ({ request }) => {
  const { pathname } = new URL(request.url);

  if (pathname.replace(/\/$/, "") === "/docs") return redirect("/docs/introduction");

  return null;
};
