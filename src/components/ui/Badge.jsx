export default function Badge({ type = "neutral", children }) {
  return <span className={`badge badge--${type}`}>{children}</span>;
}
