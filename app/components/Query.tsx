import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

const baseURL = "https://therickandmortyapi.vercel.app/api";

const preStyles = dracula['pre[class*="language-"]'];
const codestyles = dracula['code[class*="language-"]'];
const methodStyles = dracula.property;
const urlStyles = dracula.string;
const highlightStyles = dracula.number;

export function Query({ endpoint = "" }: { endpoint?: string }) {
  return (
    <>
      <pre style={{ ...preStyles, marginBottom: 2 }}>
        <code className="language-javascript" style={codestyles}>
          <span className="token" style={methodStyles}>
            GET{" "}
          </span>
          <span className="token" style={urlStyles}>
            {baseURL}
          </span>
          <span className="token" style={highlightStyles}>
            {endpoint}
          </span>
        </code>
      </pre>
    </>
  );
}
