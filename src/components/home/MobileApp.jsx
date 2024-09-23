import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import ShareIcon from "@mui/icons-material/Share";
import rain from "../../assets/rain.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function MobileApp() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleShow() {
    setIsExpanded((prevState) => !prevState);
  }

  const spanStyle =
    "shadow-2xl p-1 lg:p-3 text-md rounded-2xl backdrop-blur-lg absolute lg:text-xl text-slate-700 shadow-md";
  const shadow = "shadow-md shadow-slate-700";
  return (
    <section className="flex flex-col justify-center items-center relative">
      <h2 className="text-2xl lg:text-5xl font-semibold my-10 text-slate-950">
        Weather forecast in your pocket!
      </h2>
      <div className="w-full lg:w-2/4 min-h-[500px] lg:min-h-[700px] flex items-center justify-center rounded-full shadow-sm border-dashed border-black border-2 mb-10 md:mb-20 lg:my-9 relative">
        <div className={`${spanStyle} ${shadow} -top-5`}>
          <h3>Get Weather Alerts Fast</h3>
          <p>Be Prepared for Anything with Instant Notifications!</p>
        </div>
        <div className={`${spanStyle} ${shadow} lg:-left-72`}>
          <h3>Plan Your Day with Confidence</h3>
          <p>Get Precise Weather Updates Anytime, Anywhere!</p>
        </div>
        <div className={`${spanStyle} ${shadow} -bottom-6`}>
          <h3>Rain or Shine, We've Got You Covered</h3>{" "}
          <p> The Ultimate Weather Companion!</p>
        </div>
        <span className={`${spanStyle} ${shadow} top-1/4 -left-2 lg:-left-20`}>
          Temperature in your location
        </span>
        <span className={`${spanStyle} ${shadow} top-2/3 right-5 md:-right-12`}>
          Daily forecast
        </span>
        <img
          src={rain}
          className="rounded-full h-96 w-64 object-cover outline-dashed outline-offset-8 outline-blue-400"
          alt="img-phone"
        />
      </div>
      <div className="md:absolute md:-bottom-8 bottom-4 left-2 p-3 rounded-3xl bg-slate-400 flex items-center justify-center">
        <Link className="mx-2 bg-slate-100 rounded-full p-1">
          <DownloadIcon />
        </Link>
        <Link className="bg-slate-100 rounded-full p-1">
          <AppleIcon />
        </Link>
        <Link className="mx-2  bg-slate-100 rounded-full p-1">
          <AndroidIcon />
        </Link>
        <span className="text-slate-900 mx-2 bg-slate-200 rounded-3xl p-2">
          App in your pocket! Download it!
        </span>
      </div>
      <div className="mt-10 sm:absolute sm:bottom-0 sm:right-0 lg:absolute lg:top-12 lg:right-3 flex lg:flex-col gap-2">
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
    </section>
  );
}
