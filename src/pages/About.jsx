import { useState, useEffect } from "react";
import WeatherForecast from "../components/about/WeatherForecast";
import LineChart from "../components/about/LineChart";
import BarChart from "../components/about/BarChart";
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
    console.log(data);
  }, [city, KEY]);

  const allHumidityData = data.list
    ? data.list.map((item) => ({
        humidity: item.main.humidity,
      }))
    : [];

  const humidityData = allHumidityData.slice(35, 40);
  // console.log(hum)

  const allPressureData = data.list
    ? data.list.map((item) => ({
        pressure: item.main.pressure,
      }))
    : [];

  const pressureData = allPressureData.slice(35, 40);

  function handleSearchCity(newCity) {
    if (newCity.trim()) {
      setCity(newCity);
    }
  }

  return (
    <div className="w-10/12 m-auto">
      <WeatherForecast data={data} city={city} onSubmit={handleSearchCity} />
      <LineChart data={humidityData} />
      <BarChart data={pressureData} />
    </div>
  );
}
