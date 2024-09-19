import { useState, useEffect } from "react";
import WeatherForecast from "../components/about/WeatherForecast";

export default function About() {
  const KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Bucharest");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&units=metric&appid=${KEY}`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [city, KEY]);

  function handleSearchCity(newCity) {
    if (newCity.trim()) {
      setCity(newCity);
    }
  }

  return (
    <div className="w-10/12 m-auto">
      <WeatherForecast data={data} city={city} onSubmit={handleSearchCity} />
    </div>
  );
}
