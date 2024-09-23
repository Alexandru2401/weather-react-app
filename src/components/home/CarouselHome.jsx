import rain from "../../assets/rain.jpg";
import Card from "../UI/Card";
import { items } from "../../api/carouselContent";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlaceIcon from "@mui/icons-material/Place";
import AirIcon from "@mui/icons-material/Air";

export default function CarouselHome() {
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  function handlePrev() {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }

  let item = items[index];
  const spanStyle =
    "shadow-2xl p-3 rounded-2xl backdrop-blur-lg absolute text-xl text-slate-100 shadow-md";
  const bg =
    " radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
  
  return (
    <div className="flex flex-col justifi-center lg:flex-row lg:justify-around my-10 md:my-32">
      <div
        className="w-full md:w-2/3 lg:w-1/3 min-h-[450px] md:min-h-[550px] flex items-center justify-center rounded-3xl relative shadow-md shadow-slate-600 mb-3 mx-auto lg:mx-0"
        style={{ background: bg }}
      >
        <span className={`${spanStyle} right-4 top-1/4`}>
          <AirIcon />
          Wind 5.2km/h
        </span>
        <span className={`${spanStyle} left-14`}>23&deg; C</span>
        <span className={`${spanStyle} bottom-3`}>
          <PlaceIcon />
          Bucharest
        </span>
        <img
          src={rain}
          className="rounded-full h-96 w-64 object-cover outline-dashed outline-offset-8 outline-blue-400"
          alt="rain"
        />
      </div>
      <div className="flex items-center bg-slate-200 rounded-xl relative mx-2 md:mx-auto lg:mx-0">
        <button onClick={handlePrev}>
          <ArrowBackIosIcon />
        </button>

        <Card className="w-80 relative mb-7 lg:mb-0 min-h-[400px]">
          {item.content}
        </Card>

        <button onClick={handleNext}>
          <ArrowForwardIosIcon />
        </button>

        <span
          className={`dots1 ${index === 0 ? "bg-white" : "bg-black"}`}
        ></span>
        <span
          className={`dots2 ${index === 1 ? "bg-white" : "bg-black"}`}
        ></span>
        <span
          className={`dots3 ${index === 2 ? "bg-white" : "bg-black"}`}
        ></span>
      </div>
    </div>
  );
}
