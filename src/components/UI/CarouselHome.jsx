import rain from "../../assets/rain.jpg";
import Card from "./Card";
import { items } from "../../api/carouselContent";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlaceIcon from '@mui/icons-material/Place';
import AirIcon from '@mui/icons-material/Air';

export default function CarouselHome() {
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  function handlePrev() {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }

  let item = items[index];

  const bg =
    " radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
  return (
    <div className="flex justify-around my-4">
      <div
        className="w-1/3  min-h-[550px] flex items-center justify-center rounded-3xl"
        style={{ background: bg }}
      >
        <span><AirIcon/>Wind 5.2km/h</span>
        <span>23&deg; C</span>
        <span><PlaceIcon/>Bucharest</span>
        <img
          src={rain}
          className="rounded-full h-96 w-64 object-cover outline-dashed outline-offset-8 outline-blue-400"
        />
      </div>
      <div className="flex items-center bg-slate-200 rounded-xl relative">
        <button onClick={handlePrev}>
          <ArrowBackIosIcon />
        </button>

        <Card className="w-80 relative">{item.content}</Card>

        <button onClick={handleNext}>
          <ArrowForwardIosIcon />
        </button>
        <span className="dots1"></span>
        <span className="dots2"></span>
        <span className="dots3"></span>
      </div>
    </div>
  );
}
