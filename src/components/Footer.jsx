import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

export default function Footer() {
  const basicStyle = "text-md lg:xl text-slate-200 xl:font-semibold mb-3";
  const linkStyle = "text-gray-950 underline decoration-1 list-none text-lg font-semibold"
  return (
    <footer className="bg-slate-400 py-5 flex flex-col justify-center items-center lg:flex-row lg:justify-around mt-10 rounded-t-3xl gap-5">
      <div>
        <p className={basicStyle}>© 2024 WeatherApp. All rights reserved.</p>
        <p className={basicStyle}>
          Data provided by{" "}
          <Link
            className="text-gray-950 underline decoration-1"
            to="https://openweathermap.org/api"
            target="_blank"
          >
            OpenWeatherMap API
          </Link>
          .
        </p>
      </div>
      <div>
        <h2 className={basicStyle}>Follow us on:</h2>
        <li className={linkStyle}>
          <FacebookIcon className="mx-1"/>
          Facebook
        </li>
        <li className={linkStyle}>
          <InstagramIcon className="mx-1"/>
          Instagram
        </li>
        <li className={linkStyle}>
          <XIcon className="mx-1" />
          Twitter
        </li>
      </div>
      <div className="p-5">
        <h2 className={basicStyle}>Importance note!</h2>
        <p className={basicStyle}>
          Please don't forget that this is an application for testing my skills.
        </p>
        <p className={basicStyle}>
          No social media links will work. Thank you for your understanding!
        </p>
      </div>
    </footer>
  );
}
