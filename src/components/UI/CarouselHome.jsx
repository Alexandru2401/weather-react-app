import carouselImg from "../../assets/carouselImg.jpg";
import Card from "./Card";
import { items } from "../../api/carouselContent";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function CarouselHome() {
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  function handlePrev() {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }

  let item = items[index];
  return (
    <>
      <h2 className="text-center m-3">Title</h2>
      <div className="flex justify-around">
        <div className="w-2/4">
          <img src={carouselImg} className="rounded-2xl" />
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
    </>
  );
}
