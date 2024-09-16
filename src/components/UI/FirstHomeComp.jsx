import Card from "./Card";
import { Link } from "react-router-dom";
import bgImg from "../../assets/carouselImg.jpg";
export default function FirstHomeComp() {
  const cardStyle = "max-w-60 rounded-2xl";

  return (
    <div className="flex align-center justify-center flex-col my-6">
      <h2 className="text-2xl mx-auto my-3">Weahter can be unpredictable</h2>
      <p className="text-xl mx-auto mb-3">Be one step ahead of it!</p>
      <Link to="/about" className="mx-auto">
        <button className="bg-slate-500 w-52 rounded-md p-2 text-slate-200">
          See more!
        </button>
      </Link>
      <p>Benefits</p>
      {/* Here will be listed 3 cards */}
      <div className="flex align-center justify-around">
        <Card className={cardStyle}>
          <img src={bgImg} className="w-80 rounded-md" alt="Weather Forecast" />
          <h3 className="text-xl font-semibold mt-2">
            Accurate Weather Forecasts
          </h3>
          <p>
            Stay ahead of the weather with our precise forecasts. Whether it's a
            sunny day or an incoming storm, our detailed predictions help you
            plan your day with confidence.
          </p>
        </Card>

        <Card className={`${cardStyle} bg-slate-400`}>
          <h2 className="text-xl font-semibold">Weather Warnings</h2>
          <p>
            Never be caught off guard again. Our real-time weather alerts keep
            you informed about severe weather conditions, helping you stay safe
            and prepared for any situation.
          </p>
        </Card>

        <Card className={`${cardStyle} bg-slate-200`}>
          <h2 className="text-xl font-semibold">Outfit Recommendations</h2>
          <p>
            Wondering what to wear? Our outfit recommendations are based on
            current and forecasted weather conditions, ensuring you stay
            comfortable and stylish, no matter the weather.
          </p>
          <button className="bg-amber-600 p-2 rounded">
            See weather forecast
          </button>
        </Card>
      </div>
    </div>
  );
}
