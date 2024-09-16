import carouselImg from "../../assets/carouselImg.jpg";
import Card from "./Card";

export default function CarouselHome() {
  return (
    <>
      <h2 className="text-center m-3">Title</h2>
      <div className="flex justify-between">
        <div className="w-2/4">
          <img src={carouselImg} />
        </div>
        <div className="w-2/4">
          <Card>
            <h2>first</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos eius deserunt hic sit quidem, blanditiis, perspiciatis
              accusamus suscipit rem, tenetur fugiat! Sint laudantium animi quo
              repellendus. Impedit blanditiis sunt quis?
            </p>
          </Card>
          <Card>
            <h2>second</h2>
            <p>dafsdfasdfasfd</p>
            <p>dhfafhfifhFU</p>
          </Card>
          <Card>
            <h2>third</h2>
            <button>See more</button>
          </Card>
        </div>
      </div>
    </>
  );
}
