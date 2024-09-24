import Card from "../UI/Card";
import { Link } from "react-router-dom";
import bgImg from "../../assets/carouselImg.jpg";
import Button from "../UI/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useTheme } from "../store/themeContext";
export default function FirstHomeComp() {
  const {isDark} = useTheme();
  const cardStyle = "max-w-60 rounded-2xl shadow-md shadow-slate-700";

  return (
    <div className="flex align-center justify-center flex-col my-5 md:my-20 relative">
      <h2 className={`text-2xl sm:text-3xl lg:text-5xl font-semibold mx-auto my-3 ${ isDark ? 'text-slate-950':"text-slate-100"}`}>
        Weather can be <br/>
        <span className="mx-2">
          unpredictable
          <ThunderstormIcon style={{ fontSize: "35px" }} className="mx-2" />
        </span>
      </h2>
      <p className={`sm:text-xl lg:text-2xl mx-auto mb-3 ${ isDark ? 'text-slate-950':"text-slate-100"}`}>
        Be one step ahead of it!
      </p>
      <Link to="/about" className="mx-auto">
        <Button className={`bg-slate-400 w-44 mb-5 ${isDark ? "shadow-slate-500 shadow-md":"shadow-slate-100 shadow-sm" }`}>
          Explore benefits <ArrowForwardIcon />
        </Button>
      </Link>
      {/* Here will be a line to connect all the cards */}
      {/* <hr className="border-t-2 border-dashed border-red-500 my-5 w-full absolute z-10" /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center sm:my-6 md:my-16">
        <Card className={`${cardStyle} bg-slate-300 sm:mx-auto`}>
          <img src={bgImg} className="w-80 rounded-md" alt="Weather Forecast" />
          <h2 className="text-xl font-semibold my-2  border-b-2 border-blue-500">
            Accurate Weather Forecasts
          </h2>
          <p>
            Stay ahead of the weather with our precise forecasts. Whether it's a
            sunny day or an incoming storm, our detailed predictions help you
            plan your day with confidence.
          </p>
        </Card>

        <Card className={`${cardStyle} bg-slate-400 sm:mx-auto`}>
          <h2 className="text-xl font-semibold mb-2 border-b-2 border-blue-500">Weather Warnings <WarningAmberIcon/></h2>
          <p>
            Never be caught off guard again. Our real-time weather alerts keep
            you informed about severe weather conditions, helping you stay safe
            and prepared for any situation.
          </p>
        </Card>

        <Card className={`${cardStyle} bg-slate-100 sm:mx-auto`}>
          <h2 className="text-xl font-semibold mb-2  border-b-2 border-blue-500">Outfit Recommendations</h2>
          <p>
            Wondering what to wear? Our outfit recommendations are based on
            current and forecasted weather conditions, ensuring you stay
            comfortable and stylish, no matter the weather.
          </p>
          <Button className="bg-amber-600 w-52 mt-3">
            See weather forecast <ArrowForwardIcon />
          </Button>
        </Card>
      </div>
    </div>
  );
}
