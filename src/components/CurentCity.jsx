import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  formattedHours,
  day,
  formattedMinutes,
  currentMonths,
} from "../utils/currentDate";
export default function CurrentCity() {
  const KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState([]);
  const city = "Bucharest";
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lang=en&q=${city}&appid=${KEY}`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [KEY]);

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

  // Style
  const basicStyle = "text-2xl text-slate-100 mb-3";

  return (
    <>
      <h2 className="my-10 text-center text-5xl">Current City</h2>
      <div className="my-4 bg-slate-400 p-3 flex items-center justify-around">
        <div>
          <h3 className="text-4xl text-slate-100 my-4">City: {city}</h3>
          <p className={basicStyle}>
            Date: {day} {currentMonths}
          </p>
          <p className={basicStyle}>
            {formattedHours}:{formattedMinutes}
          </p>
          <p className={basicStyle}>{celsiusTemperature}&deg; C</p>
          <p className={basicStyle}>Max temp: {celsiusMaxTemp}&deg; </p>
          <p className={basicStyle}>Min temp: {celsiusMinTemp}&deg;</p>
        </div>
        <div>
          <p className={basicStyle}>Real feel:{realFeel}&deg; C</p>
          <p className={basicStyle}>Description {description}</p>
          <img src={iconUrl} alt="" />
          <p className={basicStyle}>Wind: {windSpeed}km/h</p>
          <p className={basicStyle}>Humidity: {humidity}</p>
        </div>
      </div>
      <Link to="/about" className="my-5">See weather forecast for next 10 days!</Link>
    </>
  );
}

// Here will be displayed information about current city
