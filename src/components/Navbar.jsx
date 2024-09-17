import { Link } from "react-router-dom";
import {
  formattedHours,
  formattedMinutes,
  day,
  currentMonths,
} from "../utils/currentDate";
import Button from "./UI/Button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-around bg-slate-400 text-slate-200 p-4 sticky top-0 z-10 font-semibold text-lg">
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
        {formattedHours}:{formattedMinutes}
      </div>
      <Button className="bg-slate-700">Dark mode</Button>
      <div>
        {day} {currentMonths}
      </div>
      <ul>
        <Link className="m-2">
          <Button className="bg-slate-900">Sign in</Button>
        </Link>
        <Link>
          <Button className="bg-slate-300">Sign in</Button>
        </Link>
      </ul>
    </nav>
  );
}
