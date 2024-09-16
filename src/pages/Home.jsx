import CurrentCity from "../components/CurentCity";
import Header from "../components/Header";
import CarouselHome from "../components/UI/CarouselHome";
import FirstHomeComp from "../components/UI/FirstHomeComp";
export default function Home() {
  return (
    <div>
      <Header />
      <FirstHomeComp />
      <CarouselHome />
      <CurrentCity />
    </div>
  );
}

// return header
