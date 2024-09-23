export default function Card({ children, className, ...props}) {
  return <div className={`m-3 p-3 ${className}`} {...props}>{children}</div>;
}
