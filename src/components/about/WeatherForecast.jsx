import { useState, useEffect } from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
export default function WeatherForecast({ data, city, onSubmit, isDark }) {
  const { list } = data;
  const [searchCity, setSearchCity] = useState("");

  // Set an empty object for days
  const days = {};

  if (list) {
    list.forEach((elem) => {
      const { dt } = elem;
      const date = new Date(dt * 1000);
      const day = date.toLocaleDateString("en-EN", { weekday: "long" });
      const hour = date.getHours();

      // Set just one hour for displaying weather
      if (hour === 12) {
        if (!days[day]) {
          days[day] = elem;
        }
      }
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    if (searchCity.trim()) {
      onSubmit(searchCity); 
      setSearchCity("");
    }
  }
  const basicStyle =
    "text-xl text-slate-900 my-2 shadow-2xl p-2 rounded-2xl bg-slate-200 shadow-xl shadow-slate-600";
  const bg =
    "linear-gradient(22deg, rgba(142,215,247,1) 1%, rgba(219,219,231,1) 50%, rgba(156,188,235,1) 100%)";

  return (
    <section className="flex flex-col items-center">
      <h2 className={`mt-10 mb-5 text-center text-5xl font-semibold text-transparent ${isDark ? "bg-gradient-to-r from-slate-300 via-gray-700 to-black": "bg-gradient-to-r from-slate-300 via-gray-500 to-zinc-300"} bg-clip-text py-3`}>
        Current City: {city}
      </h2>
      <form
        action=""
        onSubmit={handleSubmit}
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
          <SearchIcon />
        </button>
      </form>
      <section
        className="w-full my-4 p-5 rounded-3xl"
        style={{ background: bg }}
      >
        {Object.keys(days).map((day) => (
          <div key={day}>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{day}</h3>
            <div className="my-2 p-2 flex justify-between items-center shadow-md shadow-slate-600 rounded-2xl">
              <div className="flex flex-wrap justify-between w-full">
                <p className={basicStyle}>
                  <ThermostatIcon /> Temperature: {days[day].main.temp}&deg;C
                </p>
                <p className={basicStyle}>
                  Real feel: {days[day].main.feels_like}&deg;C
                </p>
                <p className={basicStyle}>
                  <DescriptionIcon /> Description:{" "}
                  {days[day].weather[0].description}
                </p>
                <p className={basicStyle}>
                  <AirIcon /> Wind: {days[day].wind.speed} km/h
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
