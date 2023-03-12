/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v2_routeConvention: true,
  },
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: ["**/.*"],
  serverBuildPath: "api/index.js",
  mdx: async () => {
    const [rehypeHighlight, remarkGfm] = await Promise.all([
      import("rehype-prism-plus").then((mod) => mod.default),
      import("remark-gfm").then((mod) => mod.default),
    ]);

    return {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    };
  },
};
