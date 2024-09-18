import CurrentCity from "../components/CurentCity";
import Header from "../components/Header";
import FirstHomeComp from "../components/UI/FirstHomeComp";
import CarouselHome from "../components/UI/CarouselHome";
import MobileApp from "../components/MobileApp";
export default function Home() {
  return (
    <>
      <Header />
      <main className="w-10/12 m-auto">
        <FirstHomeComp />
        <CarouselHome />
        <CurrentCity />
        <MobileApp />
      </main>
    </>
  );
}

// return header
