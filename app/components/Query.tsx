const baseURL = "https://therickandmortyapi.vercel.app/api";

export function Query({ endpoint = "" }: { endpoint?: string }) {
  return (
    <pre className="language-javascript" style={{ marginBottom: 2 }}>
      <code className="language-javascript">
        <span className="token property">GET </span>
        <span className="token string">{baseURL}</span>
        <span className="token number">{endpoint}</span>
      </code>
    </pre>
  );
}
