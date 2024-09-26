import { useState, useEffect } from "react";
import WeatherForecast from "../components/about/WeatherForecast";
import LineChart from "../components/about/LineChart";
import BarChart from "../components/about/BarChart";
import PieChart from "../components/about/PieChart";
import WhyUs from "../components/about/WhyUs";
import Info from "../components/about/Info";
import { useTheme } from "../components/store/themeContext";
import Error from "../components/UI/Error";

export default function About() {
  const KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Bucharest");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const { isDark } = useTheme();

  useEffect(() => {
    async function fetchCity() {
      setIsFetching(true);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&units=metric&appid=${KEY}`
        );
        const responseCity = await response.json();

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        setData(responseCity);
      } catch (error) {
        setError({ message: error.message || "Something went wrong!" });
      }
      setIsFetching(false);
    }

    fetchCity();
  }, [city, KEY]);

  if (error) {
    return <Error title="Something went wrong!" message={error.message} />;
  }
  // Extract all humidity data
  const allHumidityData = data.list
    ? data.list.map((item) => ({
        humidity: item.main.humidity,
      }))
    : [];

  // Extract latest 5 days humidity data
  const humidityData = allHumidityData.slice(35, 40);

  // Extract all pressure data
  const allPressureData = data.list
    ? data.list.map((item) => ({
        pressure: item.main.pressure,
      }))
    : [];

  // Extract latest 5 days pressure data
  const pressureData = allPressureData.slice(35, 40);

  // Extract all wind data
  const allWindData = data.list
    ? data.list.map((item) => ({
        windSpeed: +item.wind.speed,
        windDegree: +item.wind.deg,
        windGust: +item.wind.gust,
      }))
    : [];

  // Extract latest 5 days wind data
  const windData = allWindData.slice(35, 40);

  // Calculate the median value for each wind data for the last 5 days
  const medianWindSpeed = (
    windData.reduce((total, item) => total + item.windSpeed, 0) / 5
  ).toFixed(2);
  const medianWindDegree = (
    windData.reduce((total, item) => total + item.windDegree, 0) / 5
  ).toFixed(2);
  const medianWindGust = (
    windData.reduce((total, item) => total + item.windGust, 0) / 5
  ).toFixed(2);

  function handleSearchCity(newCity) {
    if (newCity.trim()) {
      setCity(newCity);
    }
  }

  return (
    <div className="w-10/12 m-auto">
      <Info isDark={isDark} />
      <WhyUs isDark={isDark} />
      <WeatherForecast
        data={data}
        city={city}
        onSubmit={handleSearchCity}
        fallback="No data available"
        loadingText="Fetching data..."
        isLoading={isFetching}
      />
      <h2
        className={`text-2xl text-center ${
          isDark ? "text-slate-950" : "text-slate-100"
        }`}
      >
        Humidity, pressure and wind details in:{" "}
        <span className="font-bold mt-10">{city}</span>
      </h2>
      <LineChart data={humidityData} isDark={isDark} />
      <BarChart data={pressureData} isDark={isDark} />
      <PieChart
        medianWindSpeed={medianWindSpeed}
        medianWindDegree={medianWindDegree}
        medianWindGust={medianWindGust}
      />
    </div>
  );
}
