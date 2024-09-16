import CurrentCity from "../components/CurentCity";
import Header from "../components/Header";
import FirstHomeComp from "../components/UI/FirstHomeComp";
import CarouselHome from "../components/UI/CarouselHome";
export default function Home() {
  return (
    <>
      <Header />
      <main className="w-10/12 m-auto">
      <FirstHomeComp />
      <CarouselHome />
      <CurrentCity />
      </main>
    </>
  );
}

// return header
