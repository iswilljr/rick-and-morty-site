import { type LoaderFunction, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Navbar } from "~/components/Navbar";

export default function Docs() {
  return (
    <div className="flex">
      <aside>
        <Navbar />
      </aside>
      <div className="w-full md:w-[calc(100%-15rem)]">
        <article className="mx-auto max-w-4xl prose lg:prose-xl prose-headings:font-extrabold prose-a:border-b-2 prose-a:no-underline prose-a:duration-100 prose-a:border-b-primary [&_a:hover]:border-b-transparent [&_a:hover]:text-primary [&_li::marker]:text-dark-secondary [&_code::before]:content-none [&_code::after]:content-none prose-code:text-[#476582] prose-code:bg-[#1b1f230d] prose-code:rounded prose-code:py-1 prose-code:px-2 [&_pre_code]:text-green-500 [&_pre+pre]:!mt-0 text-dark-secondary my-[60px] px-3 break-words md:px-6 w-full">
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
