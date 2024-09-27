import rain from "../../assets/rain.jpg";
import Card from "../UI/Card";
import { items } from "../../api/carouselContent";
import { useState, useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlaceIcon from "@mui/icons-material/Place";
import AirIcon from "@mui/icons-material/Air";
import { useTheme } from "../store/themeContext";
import { motion, useScroll, useTransform} from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function CarouselHome() {
  const [index, setIndex] = useState(0);
  const { isDark } = useTheme();

  function handleNext() {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  function handlePrev() {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }

  let item = items[index];

  const { scrollY } = useScroll();
  const spanOpacity = useTransform(scrollY, [1100, 1200, 1300], [0, 0.5, 1]);
  const spanScale = useTransform(scrollY, [1200, 1400, 1400], [0.5, 1.2, 1]);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const spanStyle =
    "shadow-2xl p-3 rounded-2xl backdrop-blur-lg absolute text-xl text-slate-100 shadow-md";
  const bg =
    " radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";

  return (
    <div className="flex flex-col justifi-center lg:flex-row lg:justify-around my-10 md:my-32">
      <motion.div
        className="w-full md:w-2/3 lg:w-1/3 min-h-[450px] md:min-h-[550px] flex items-center justify-center rounded-3xl relative shadow-md shadow-slate-600 mb-3 mx-auto lg:mx-0"
        style={{ background: bg }}
      >
        <motion.span
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0}}
          transition={{ duration: 0.5 }}
          style={{ opacity: spanOpacity, scale: spanScale }}
          className={`${spanStyle} right-4 top-1/4`}
        >
          <AirIcon />
          Wind 5.2km/h
        </motion.span>
        <motion.span
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0}}
          transition={{ duration: 0.5 }}
          style={{ opacity: spanOpacity, scale: spanScale }}
          className={`${spanStyle} left-14`}
        >
          23&deg; C
        </motion.span>
        <motion.span
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0}}
          transition={{ duration: 0.5 }}
          style={{ opacity: spanOpacity, scale: spanScale }}
          className={`${spanStyle} bottom-3`}
        >
          <PlaceIcon />
          Bucharest
        </motion.span>
        <img
          src={rain}
          className="rounded-full h-96 w-64 object-cover outline-dashed outline-offset-8 outline-blue-400"
          alt="rain"
        />
      </motion.div>
      <div
        className={`flex items-center rounded-xl relative mx-2 md:mx-auto lg:mx-0 ${
          isDark ? "bg-slate-200" : "bg-slate-950"
        }`}
      >
        <button onClick={handlePrev}>
          <ArrowBackIosIcon
            className={`${isDark ? "text-slate-950" : "text-slate-100"}`}
          />
        </button>

        <Card
          className={`w-80 relative mb-7 lg:mb-0 min-h-[400px] ${
            isDark ? "text-slate-950" : "text-slate-100"
          }`}
        >
          {item.content}
        </Card>

        <button onClick={handleNext}>
          <ArrowForwardIosIcon
            className={`${isDark ? "text-slate-950" : "text-slate-100"}`}
          />
        </button>

        <span
          className={`dots1 ${index === 0 ? "bg-white" : "bg-cyan-500"}`}
        ></span>
        <span
          className={`dots2 ${index === 1 ? "bg-white" : "bg-cyan-500"}`}
        ></span>
        <span
          className={`dots3 ${index === 2 ? "bg-white" : "bg-cyan-500"}`}
        ></span>
      </div>
    </div>
  );
}
