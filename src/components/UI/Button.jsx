export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`${className} rounded-3xl p-2 text-slate-200 font-semibold`}
      {...props}
    >
      {children}
    </button>
  );
}
