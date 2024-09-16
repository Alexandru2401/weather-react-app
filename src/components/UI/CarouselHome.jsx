import carouselImg from "../../assets/carouselImg.jpg";
import Card from "./Card";
import { items } from "../../api/carouselContent";
import { useState } from "react";
export default function CarouselHome() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <h2 className="text-center m-3">Title</h2>
      <div className="flex justify-between">
        <div className="w-2/4">
          <img src={carouselImg} />
        </div>
        <div className="w-2/4">
          {items.map((item) => (
            <Card>{item.content}</Card>
          ))}
        </div>
      </div>
    </>
  );
}
