import Card from "./Card";
import { Link } from "react-router-dom";
import bgImg from "../../assets/carouselImg.jpg";
import Button from "./Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function FirstHomeComp() {
  const cardStyle = "max-w-60 rounded-2xl";

  return (
    <div className="flex align-center justify-center flex-col my-6 relative">
      <h2 className="text-5xl font-semibold mx-auto my-3">
        Weahter can be unpredictable<ThunderstormIcon style={{fontSize:"35px"}}/>
      </h2>
      <p className="text-xl mx-auto mb-3">Be one step ahead of it!</p>
      <Link to="/about" className="mx-auto">
        <Button className="bg-slate-400 w-44">
          Explore benefits <ArrowForwardIcon />
        </Button>
      </Link>
      {/* Here will be a line to connect all the cards */}
      {/* <hr className="border-t-2 border-dashed border-red-500 my-5 w-full absolute z-10" /> */}
      <div className="flex align-center justify-around my-5">
        <Card className={`${cardStyle} bg-slate-300`}>
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

        <Card className={`${cardStyle} bg-slate-100`}>
          <h2 className="text-xl font-semibold">Outfit Recommendations</h2>
          <p>
            Wondering what to wear? Our outfit recommendations are based on
            current and forecasted weather conditions, ensuring you stay
            comfortable and stylish, no matter the weather.
          </p>
          <Button className="bg-amber-600 w-52">
            See weather forecast <ArrowForwardIcon />
          </Button>
        </Card>
      </div>
    </div>
  );
}
