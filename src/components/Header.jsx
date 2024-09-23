import Button from "../components/UI/Button";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleShow() {
    setIsExpanded((prevState) => !prevState);
  }

  const basicCardStyle =
    "w-[350px] flex flex-col bg-transparent p-3 m-2 text-xl text-slate-100 rounded-md shadow-md shadow-slate-600 backdrop-blur-md";

  return (
    <header className="relative min-h-[80vh] flex flex-col w-full justify-around bg-bgImg bg-no-repeat bg-top bg-cover rounded-b-3xl">
      <div className="flex mx-auto">
        <h1 className="m-2 lg:my-4 font-semibold  text-transparent bg-gradient-to-r from-slate-300 via-gray-700 to-black bg-clip-text py-3 text-4xl lg:text-5xl xl:text-7xl md:my-10">
          See wheather in your city!
        </h1>
      </div>
      <section className="flex flex-col">
        <div className="my-5 items-center gap-3 lg:my-2 flex flex-col lg:flex-row lg:justify-evenly">
          <div className="w-3/4 lg:w-1/3">
            <p className="text-slate-950 md:text-lg xl:text-xl shadow-2xl shadow-slate-600 p-3 rounded-2xl backdrop-blur-md">
              Whether it's a sunny day or an incoming storm, our detailed
              predictions help you plan your day with confidence.
            </p>
          </div>
          <div>
            <Button className="bg-slate-400 w-44 shadow-md shadow-slate-800">
              <Link to="/about">
                Get started! <ArrowForwardIcon />
              </Link>
            </Button>
          </div>
          <div className="w-3/4 lg:w-1/3 backdrop-blur-md shadow-md rounded-xl p-3">
            <p className="sm:mb-1 md:mb-5 md:text-4xl lg:text-8xl text-slate-100">
              40&deg; C
            </p>
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
        </div>
        <section className="flex items-center flex-col lg:flex-row lg:justify-evenly">
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
        </section>
      </section>
      <div className="flex flex-col gap-2 sm:gap-1 my-3 top-1/3 right-3 absolute">
        <button className="bg-slate-100 rounded-full p-2" onClick={handleShow}>
          <ShareIcon />
        </button>
        {isExpanded && (
          <>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              className="bg-slate-100 rounded-full p-2"
            >
              <InstagramIcon />
            </Link>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="bg-slate-100 rounded-full p-2"
            >
              <FacebookIcon />
            </Link>
            <Link
              to="https://x.com/"
              target="_blank"
              className="bg-slate-100 rounded-full p-2"
            >
              <XIcon />
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
