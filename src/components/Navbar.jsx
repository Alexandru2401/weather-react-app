import { Link } from "react-router-dom";
import {
  formattedHours,
  minutes,
  day,
  currentMonths,
} from "../utils/currentDate";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-around bg-slate-700 text-slate-200">
      <div>Weather Forecast</div>
      <ul className="flex items-center justify-center">
        <li className="p-1 m-1">
          <Link to="/">Home</Link>
        </li>
        <li className="p-1 m-1">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div>
        {formattedHours}:{minutes}
      </div>
      <div>Dark mode</div>
      <div>
        {day} {currentMonths}
      </div>
      <ul className="flex">
        <li>Sing in</li>
        <li>Log in</li>
      </ul>
    </nav>
  );
}
