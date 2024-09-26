import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  formattedHours,
  day,
  formattedMinutes,
  currentMonths,
  monthDay,
} from "../../utils/currentDate";
import PlaceIcon from "@mui/icons-material/Place";
import TodayIcon from "@mui/icons-material/Today";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import Button from "../UI/Button";
import { useTheme } from "../store/themeContext";
import Error from "../UI/Error";
export default function CurrentCity() {
  const { isDark } = useTheme();
  const KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Bucharest");
  const [searchCity, setSearchCity] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (city) {
      async function fetchData() {
        setIsFetching(true);
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lang=en&q=${city}&appid=${KEY}`
          );
          const respData = await response.json();
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          setData(respData);
        } catch (error) {
          setError({ message: error.message || "Something went wrong!" });
        }
        setIsFetching(false);
      }
      fetchData();
    }
  }, [city, KEY]);

  if (error) {
    return <Error title="Something went wrong!" message={error.message} />;
  }

  // Extract the properties that i need
  const { main, weather, wind } = data;
  const temperature = main?.temp;
  const feels = main?.feels_like;
  const description = weather?.[0]?.description;
  const icon = weather?.[0]?.icon;
  const windSpeed = wind?.speed;
  const humidity = main?.humidity;
  const tempMax = main?.temp_max;
  const tempMin = main?.temp_min;

  // Converted values
  const celsiusTemperature = Math.round(parseInt(temperature) - 273.15);
  const realFeel = Math.round(parseInt(feels) - 273.15);
  const celsiusMaxTemp = Math.round(parseInt(tempMax) - 273.15);
  const celsiusMinTemp = Math.round(parseInt(tempMin) - 273.15);
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  function handleSearchCity(e) {
    e.preventDefault();
    if (searchCity.trim()) {
      setCity(searchCity);
      setSearchCity("");
    }
  }
  // Style
  const basicStyle =
    "text-xl md:text-2xl text-slate-900 mb-3 shadow-2xl p-1 md:p-3 rounded-2xl backdrop-blur-2xl";
  const bg =
    " linear-gradient(22deg, rgba(142,215,247,1) 1%, rgba(219,219,231,1) 50%, rgba(156,188,235,1) 100%)";
  return (
    <section className="flex flex-col items-center">
      <h2
        className={`mt-10 mb-5 text-center text-5xl font-semibold text-transparent ${
          isDark
            ? "bg-gradient-to-r from-slate-700 via-blue-700 to-cyan-700"
            : "bg-gradient-to-r from-slate-100 via-blue-700 to-cyan-300"
        } bg-clip-text py-3`}
      >
        Current City: {city}
      </h2>
      <form
        action=""
        onSubmit={handleSearchCity}
        className="flex items-center justify-center"
      >
        <input
          className="w-100 h-full text-slate-950 shadow-2xl p-2 shadow-slate-800 rounded-3xl placeholder:text-slate-950 placeholder:p-2"
          placeholder="Search for a city..."
          type="text"
          onChange={(e) => setSearchCity(e.target.value)}
          value={searchCity}
        />
        <button className="mx-2">
          <SearchIcon
            className={`${isDark ? "text-slate-950" : "text-slate-100"}`}
          />
        </button>
      </form>
      {isFetching && (
        <p className="text-center text-slate-900 text-2xl">The data is fetching...</p>
      )}
      {!isFetching && (
        <div
          style={{ background: bg }}
          className="w-full md:w-3/4 my-4 p-3 flex items-center justify-around shadow-md shadow-slate-600 rounded-2xl gap-4"
        >
          <div>
            <h3 className="text-xl md:text-4xl text-slate-900 my-4 shadow-2xl p-1 md:p-3 rounded-2xl backdrop-blur-lg">
              <PlaceIcon /> City: {city}
            </h3>
            <p className={basicStyle}>
              <TodayIcon /> Date: {day}, {monthDay} {currentMonths}
            </p>
            <p className={basicStyle}>
              <AccessTimeIcon />
              {formattedHours}:{formattedMinutes}
            </p>
            <p className={basicStyle}>
              <ThermostatIcon />
              {celsiusTemperature}&deg; C
            </p>
            <p className={basicStyle}>Max temp: {celsiusMaxTemp}&deg; </p>
            <p className={basicStyle}>Min temp: {celsiusMinTemp}&deg;</p>
          </div>
          <div>
            <p className={basicStyle}>Real feel:{realFeel}&deg; C</p>
            <p className={basicStyle}>
              <DescriptionIcon />
              Description: {description}
            </p>
            <img src={iconUrl} alt="" />
            <p className={basicStyle}>
              <AirIcon />
              Wind: {windSpeed}km/h
            </p>
            <p className={basicStyle}>
              <WaterDropIcon />
              Humidity: {humidity}
            </p>
          </div>
        </div>
      )}
      <Link to="/about" className="my-5">
        <Button
          className={`${
            isDark ? "bg-slate-900" : "bg-slate-100 text-slate-950"
          }`}
        >
          See weather forecast for next 5 days!
        </Button>
      </Link>
    </section>
  );
}
