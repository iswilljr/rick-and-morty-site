import { Link } from "@remix-run/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

function Highlighter(props: React.HtmlHTMLAttributes<HTMLPreElement> & { children: React.ReactElement<any, "code"> }) {
  return (
    <SyntaxHighlighter language="json" style={dracula}>
      {props.children.props.children}
    </SyntaxHighlighter>
  );
}

const createHeading = (Component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  return function Heading(props: React.HtmlHTMLAttributes<HTMLHeadingElement>) {
    return (
      <Component
        {...props}
        style={{
          paddingTop: Component !== "h1" ? 84 : 0,
          marginTop: -28,
          marginBottom: Component === "h1" ? "unset" : undefined,
        }}
        id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      />
    );
  };
};

export const components = {
  h1: createHeading("h1"),
  h2: createHeading("h2"),
  h3: createHeading("h3"),
  h4: createHeading("h4"),
  h5: createHeading("h5"),
  h6: createHeading("h6"),
  pre: Highlighter as any,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return props.href?.startsWith("/") ? <Link to={props.href} {...props} /> : <a {...props} />;
  },
};
