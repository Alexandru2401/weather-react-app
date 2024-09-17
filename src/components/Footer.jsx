import { Link } from "react-router-dom";
export default function Footer() {
  const basicStyle = "text-2xl text-slate-100 mb-3";
  return (
    <footer className="bg-slate-400 p-3 flex justify-around">
      <div>
        <p className={basicStyle}>© 2024 WeatherApp. All rights reserved.</p>
        <p className={basicStyle}>Data provided by <Link to="https://openweathermap.org/api">OpenWeatherMap API</Link>.</p>
      </div>
      <div>
        <h2 className={basicStyle}>Follow us on:</h2>
        <li className="text-slate-100">Facebook</li>
        <li className="text-slate-100">Instagram</li>
        <li className="text-slate-100">Twitter</li>
      </div>
      <div>
        <h2 className={basicStyle}>Importance note</h2>
        <p className={basicStyle}>
          Please don't forget that this is an application for testing my skills.
        </p><br />
        <p className={basicStyle}>
          {" "}
          No social media links will work. Thank you for your understanding
        </p>
      </div>
    </footer>
  );
}
