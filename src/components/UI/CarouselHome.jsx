import carouselImg from "../../assets/carouselImg.jpg";
import Card from "./Card";

export default function CarouselHome() {
  return (
    <div className="flex justify-between">
      <div className="w-2/4">
        <img src={carouselImg} />
      </div>
      <div className>
        <Card>
          <h2>first</h2>
        </Card>
        <Card>
          <h2>second</h2>
        </Card>
        <Card>
          <h2>third</h2>
        </Card>
      </div>
    </div>
  );
}
