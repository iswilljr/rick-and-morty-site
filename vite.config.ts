import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(async () => {
  const rehypeHighlight = await import("rehype-prism-plus").then((mod) => mod.default)

  return {
    plugins: [
      qwikCity({
        trailingSlash: false,
        mdxPlugins: {
          remarkGfm: true,
          rehypeSyntaxHighlight: false,
          rehypeAutolinkHeadings: true,
        },
        mdx: {
          rehypePlugins: [rehypeHighlight],
        }
      }),
      qwikVite(),
      tsconfigPaths(),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
