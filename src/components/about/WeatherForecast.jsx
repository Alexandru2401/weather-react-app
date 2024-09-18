import { useState, useEffect } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import TodayIcon from "@mui/icons-material/Today";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import DescriptionIcon from "@mui/icons-material/Description";
export default function WeatherForecast() {
  const KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState([]);

  const city = "Bucharest";
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${KEY}`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
  }, [city, KEY]);
  
  const basicStyle =
    "text-2xl text-slate-900 mb-3 shadow-2xl p-3 rounded-2xl backdrop-blur-2xl";
  const bg =
    " linear-gradient(22deg, rgba(142,215,247,1) 1%, rgba(219,219,231,1) 50%, rgba(156,188,235,1) 100%)";
  return (
    <section className="flex flex-col items-center">
      <h2 className="mt-10 mb-5 text-center text-5xl font-semibold  text-transparent bg-gradient-to-r from-slate-300 via-gray-700 to-black bg-clip-text py-3">
        Current City:
      </h2>
      <div
        style={{ background: bg }}
        className="w-3/4 my-4 p-3 flex items-center justify-around shadow-md shadow-slate-600 rounded-2xl"
      >
        <div>
          <h3 className="text-4xl text-slate-900 my-4 shadow-2xl p-3 rounded-2xl backdrop-blur-lg">
            <PlaceIcon /> City:
          </h3>
          <p className={basicStyle}>
            <TodayIcon /> Date:
          </p>
          <p className={basicStyle}>
            <AccessTimeIcon />
          </p>
          <p className={basicStyle}>
            <ThermostatIcon />
          </p>
        </div>
        <div>
          <p className={basicStyle}>Real feel:&deg; C</p>
          <p className={basicStyle}>
            <DescriptionIcon />
            Description:
          </p>
          {/* <img src={iconUrl} alt="" /> */}
          <p className={basicStyle}>
            <AirIcon />
            Wind: km/h
          </p>
        </div>
      </div>
    </section>
  );
}
