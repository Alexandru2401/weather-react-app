import carouselImg from "../../assets/carouselImg.jpg";
import Card from "./Card";
import { items } from "../../api/carouselContent";
import { useState } from "react";
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
      <div className="flex justify-between">
        <div className="w-2/4">
          <img src={carouselImg} />
        </div>
        <div className="w-2/4">
          <button onClick={handlePrev}>Prev</button>

          <Card>{item.content}</Card>

          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}
