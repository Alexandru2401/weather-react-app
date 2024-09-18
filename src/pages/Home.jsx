import CurrentCity from "../components/home/CurentCity";
import Header from "../components/Header";
import FirstHomeComp from "../components/home/FirstHomeComp";
import CarouselHome from "../components/home/CarouselHome";
import MobileApp from "../components/home/MobileApp";
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
