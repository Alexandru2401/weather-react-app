export default function Card({ children, className }) {
  return <div className={`m-3 p-3 ${className}`}>{children}</div>;
}
