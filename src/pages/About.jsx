import WeatherForecast from "../components/about/WeatherForecast";

export default function About() {
  return (
    <div>
      <section>
        <WeatherForecast />
      </section>
    </div>
  );
}
// 1. A short description about the application
// 2. Here will be displayed weather forecast fot 10 days for a selected city (by default Bucharest)
// 3. Extra info about weather alerts, road risk, etc.
