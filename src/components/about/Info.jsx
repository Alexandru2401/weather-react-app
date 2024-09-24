import Card from "../UI/Card";
import bgImg from "../../assets/bg-3.jpg";
export default function Info({isDark}) {
  const cardStyle = `rounded-3xl shadow-md shadow-slate-700 max-w-64 ${
    isDark ? "text-slate-950" : "text-slate-100 shadow-slate-100 border-t-2 border-slate-100"
  }`;

  return (
    <>
      <h2 className={`text-center text-5xl my-10 ${isDark ? "text-slate-950" : "text-slate-100"}`}>Weather forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center sm:my-6 md:my-16">
        <Card className={cardStyle}>
          <h2 className="text-2xl mb-2 border-b-2 border-red-400">
            Interactive Charts
          </h2>
          <p className="text-lg">
            Visualize weather data through intuitive charts that show trends in
            temperature and precipitation over five days. Our charts make it
            easy to quickly understand atmospheric conditions.
          </p>
        </Card>
        <Card
          className={`${cardStyle} z-0 relative p-0 min-h-[350px] mb-16 flex justify-center`}
        >
          <img src={bgImg} className="w-full rounded-t-2xl" alt="bg-img" />
          <div className={`absolute top-2/4 z-10  flex flex-col items-center p-3 rounded-tl-[80px] rounded-tr-[80px] rounded-b-3xl shadow-md bg-slate-300 ${ isDark ? "shadow-slate-700 ":"shadow-slate-100 text-slate-950"}`}>
            <h2 className="text-xl mb-2">5-Day Forecast</h2>
            <p>
              Find out what the weather will be like over the next five days.
              Each forecast details temperature, precipitation, humidity, and
              wind speed, giving you a clear picture of the weather.
            </p>
          </div>
        </Card>

        <Card className={cardStyle}>
          <h2 className="text-xl mb-2 border-b-2 border-red-400">
            Detailed Data
          </h2>
          <p className="text-lg">
            Get comprehensive information about the weather in your area,
            including wind, atmospheric pressure, and humidity. Our application
            gathers data from reliable sources to provide you with the most
            accurate information.
          </p>
        </Card>
      </div>
    </>
  );
}
