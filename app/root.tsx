import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch } from "@remix-run/react";
import Layout from "./components/Layout";
import styles from "./styles/tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "The Rick And Morty API",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.png", type: "image/png" },
  { rel: "stylesheet", href: styles },
  { rel: "apple-touch-icon", sizes: "48x48", href: "/icon-48x48.png" },
  { rel: "apple-touch-icon", sizes: "72x72", href: "/icon-72x72.png" },
  { rel: "apple-touch-icon", sizes: "96x96", href: "/icon-96x96.png" },
  { rel: "apple-touch-icon", sizes: "144x144", href: "/icon-144x144.png" },
  { rel: "apple-touch-icon", sizes: "192x192", href: "/icon-192x192.png" },
  { rel: "apple-touch-icon", sizes: "256x256", href: "/icon-256x256.png" },
  { rel: "apple-touch-icon", sizes: "384x384", href: "/icon-384x384.png" },
  { rel: "apple-touch-icon", sizes: "512x512", href: "/icon-512x512.png" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html lang="en" className="overflow-auto">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Oh Jeez Rick!</title>
        <Links />
      </head>
      <body>
        <Layout className="min-h-[calc(100vh-180px)] h-auto p-6 bg-dark flex flex-col justify-center items-center text-center text-white font-black">
          <h1 className="max-w-2xl text-6xl md:text-7xl">You you broke the page</h1>
          <h2 className="mt-10 xl:mt-20 text-5xl md:text-6xl">{caught.status}</h2>
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}
