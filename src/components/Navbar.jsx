import { Link } from "react-router-dom";
import {
  formattedHours,
  formattedMinutes,
  day,
  currentMonths,
  monthDay,
} from "../utils/currentDate";
import Button from "./UI/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { useTheme } from "./store/themeContext";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { isDark, toggleDarkMode } = useTheme();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 800) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
        setShowMenu(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleShowMenu() {
    setShowMenu(true);
  }

  function handleCloseMenu() {
    setShowMenu(false);
  }

  return (
    <nav className={`p-4 sticky top-0 z-10 font-semibold text-lg ${isDark ? 'bg-slate-700 text-slate-200' : 'bg-slate-400 text-slate-800'}`}>
      {isVisible ? (
        <div className="flex items-center justify-between">
          <div>Weather Forecast</div>
          <ul className="flex items-center justify-center space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div>{formattedHours}:{formattedMinutes}</div>
          <div>{day}, {monthDay} {currentMonths}</div>
          <Button className="bg-slate-700" onClick={toggleDarkMode}>
            {isDark ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      ) : (
        <div>
          <button onClick={handleShowMenu}>
            <MenuIcon style={{ fontSize: "30px" }} />
          </button>
          <div
            className={`fixed top-0 left-0 h-full w-64 p-4 bg-slate-400 transform transition-transform duration-300 ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
          >
            <button onClick={handleCloseMenu} className="mb-4">
              <CloseIcon style={{ fontSize: "30px" }} />
            </button>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link to="/" onClick={handleCloseMenu}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={handleCloseMenu}>About</Link>
              </li>
              <li>
                <Button className="bg-slate-700" onClick={toggleDarkMode}>
                  {isDark ? "Light Mode" : "Dark Mode"}
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
