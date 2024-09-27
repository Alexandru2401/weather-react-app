import { Link } from "react-router-dom";
import bgImg from "../../assets/carouselImg.jpg";
import Button from "../UI/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useTheme } from "../store/themeContext";
import WeatherCard from "../UI/WeatherCard";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FirstHomeComp() {
  const { isDark } = useTheme();
  const cardStyle = "max-w-60 rounded-2xl shadow-md shadow-slate-700";

  const { scrollY } = useScroll();
  const opacityTitle = useTransform(scrollY, [0, 200, 300], [0, 0.5, 1]);
  const opacitySubtitle = useTransform(scrollY, [0, 300, 750], [0, 0.5, 1]);
  const divOpacity = useTransform(scrollY, [0, 500, 800], [0, 0.5, 1]);
  const textScale = useTransform(scrollY, [0, 200], [0.5, 1]);
  return (
    <div className="flex align-center justify-center flex-col my-5 md:my-20 relative">
      <motion.h2
        style={{ opacity: opacityTitle, scale: textScale }}
        className={`text-2xl sm:text-3xl lg:text-5xl font-semibold mx-auto my-3 ${
          isDark ? "text-slate-950" : "text-slate-100"
        }`}
      >
        Weather can be <br />
        <span className="mx-2">
          unpredictable
          <ThunderstormIcon style={{ fontSize: "35px" }} className="mx-2" />
        </span>
      </motion.h2>
      <motion.p
        style={{ opacity: opacitySubtitle }}
        className={`sm:text-xl lg:text-2xl mx-auto mb-3 ${
          isDark ? "text-slate-950" : "text-slate-100"
        }`}
      >
        Be one step ahead of it!
      </motion.p>
      <Link to="/about" className="mx-auto">
        <Button
          className={`bg-slate-400 w-44 mb-5 ${
            isDark ? "shadow-slate-500 shadow-md" : "shadow-slate-100 shadow-sm"
          }`}
        >
          Explore benefits <ArrowForwardIcon />
        </Button>
      </Link>
      <motion.div
        style={{ opacity: divOpacity }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center sm:my-6 md:my-16"
      >
        <WeatherCard
          className={`${cardStyle} bg-slate-300`}
          title="Accurate Weather Forecasts"
          description="Stay ahead of the weather with our precise forecasts. Whether it's a sunny day or an incoming storm, our detailed predictions help you plan your day with confidence."
          image={bgImg}
        />
        <WeatherCard
          className={`${cardStyle} bg-slate-400`}
          title="Weather Warnings"
          description="Never be caught off guard again. Our real-time weather alerts keep you informed about severe weather conditions, helping you stay safe and prepared for any situation."
          icon={<WarningAmberIcon />}
        />
        <WeatherCard
          className={`${cardStyle} bg-slate-100`}
          title="Outfit Recommendations"
          description="Wondering what to wear? Our outfit recommendations are based on current and forecasted weather conditions, ensuring you stay comfortable and stylish, no matter the weather."
        >
          <Button className="bg-amber-600 w-52 mt-3">
            See weather forecast <ArrowForwardIcon />
          </Button>
        </WeatherCard>
      </motion.div>
    </div>
  );
}
