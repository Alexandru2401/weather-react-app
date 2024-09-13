import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-center bg-slate-700 text-slate-200">
      <div>Logo</div>
      <ul className="flex items-center justify-center">
        <li className="p-1 m-1">
          <Link to="/">Home</Link>
        </li>
        <li className="p-1 m-1">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div>Hours</div>
      <div>Dark mode</div>
      <div>Day Months</div>
      <ul>
        <li>Sing in</li>
        <li>Log in</li>
      </ul>
    </nav>
  );
}
