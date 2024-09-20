import Button from "../components/UI/Button";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import ShareIcon from "@mui/icons-material/Share";

export default function Header() {
  const basicCardStyle =
    "flex flex-col bg-transparent p-3 m-2 text-xl text-slate-100 rounded-md shadow-md shadow-slate-600 backdrop-blur-md";

  return (
    <header className="relative h-auto sm:h-[50vh] md:h-[80vh] flex justify-around w-full bg-bgImg bg-no-repeat bg-top bg-cover rounded-b-3xl">
      <section>
        <h1 className="my-16 font-semibold  text-transparent bg-gradient-to-r from-slate-300 via-gray-700 to-black bg-clip-text py-3 md:text-4xl lg:text-5xl xl:text-7xl md:my-10">
          See wheather in your city!
        </h1>
        <div className="w-60 my-12">
          <p className="text-slate-950 md:text-lg xl:text-xl shadow-2xl shadow-slate-600 p-3 rounded-2xl backdrop-blur-md">
            Whether it's a sunny day or an incoming storm, our detailed
            predictions help you plan your day with confidence.
          </p>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Button className="bg-slate-400 w-44 shadow-md shadow-slate-800">
              <Link to="/about">
                Get started! <ArrowForwardIcon />
              </Link>
            </Button>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
            <div className={basicCardStyle}>
              <p>
                20&deg;<span>C</span>
              </p>
              <p>Weather type</p>
              <p>City</p>
            </div>
            <div className={basicCardStyle}>
              <p>
                20&deg;<span>C</span>
              </p>
              <p>Weather type</p>
              <p>City</p>
            </div>
            <div className={basicCardStyle}>
              <p>
                20&deg;<span>C</span>
              </p>
              <p>Weather type</p>
              <p>City</p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-11 sm:min-h-24 sm:p-1 md:h-52 md:p-3 lg:h-72 lg:p-4 sm:my-2 md:my-36 lg:my-44 lg:mx-10 backdrop-blur-md shadow-md rounded-xl">
        <div>
          <p className="sm:mb-1 md:mb-5 md:text-4xl lg:text-8xl text-slate-100">40&deg; C</p>
          <p className="sm:mb-1 md:mb-5 md:text-lg xl:text-2xl text-slate-100">
            Real feel: 40&deg; C
          </p>
          <p className="sm:mb-1 md:mb-5 md:text-lg xl:text-2xl text-slate-100">
            Weather today: sunny
          </p>
          <p className="sm:mb-1 md:mb-5 md:text-lg xl:text-2xl text-slate-100">
            Wind: <span>20km/h</span>
          </p>
        </div>
      </section>

      <div className="flex flex-col gap-2 sm:gap-1 my-3 fixed top-1/3 right-3">
        <span className="bg-slate-100 rounded-full p-2">
          <ShareIcon />
        </span>
        <span className="bg-slate-100 rounded-full p-2">
          <InstagramIcon />
        </span>
        <span className="bg-slate-100 rounded-full p-2">
          <FacebookIcon />
        </span>
        <span className="bg-slate-100 rounded-full p-2">
          <XIcon />
        </span>
      </div>
    </header>
  );
}
