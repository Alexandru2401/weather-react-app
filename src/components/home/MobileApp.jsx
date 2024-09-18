import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import ShareIcon from "@mui/icons-material/Share";
import rain from "../../assets/rain.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import { Link } from "react-router-dom";

export default function MobileApp() {
  const spanStyle =
    "shadow-2xl p-3 rounded-2xl backdrop-blur-lg absolute text-xl text-slate-700 shadow-md";
  const shadow = "shadow-md shadow-slate-700";
  return (
    <section className="flex flex-col justify-center items-center relative">
      <h2 className="text-5xl font-semibold my-10 text-slate-950">
        Weather forecast in your pocket!
      </h2>
      <div className="w-2/4 min-h-[700px] flex items-center justify-center rounded-full shadow-sm border-dashed border-black border-2 my-9">
        <div className={`${spanStyle} ${shadow} right-20 top-1/4`}>
          <h3>Get Weather Alerts Fast</h3>
          <p>Be Prepared for Anything with Instant Notifications!</p>
        </div>
        <div className={`${spanStyle} ${shadow} left-14 `}>
          <h3>Plan Your Day with Confidence</h3>
          <p>Get Precise Weather Updates Anytime, Anywhere!</p>
        </div>
        <div className={`${spanStyle} ${shadow} bottom-3`}>
          <h3>Rain or Shine, We've Got You Covered</h3>{" "}
          <p> The Ultimate Weather Companion!</p>
        </div>
        <span className={`${spanStyle} ${shadow} right-32`}>
          Temperature in your location
        </span>
        <span className={`${spanStyle} ${shadow} left-80 top-1/3`}>
          Daily forecast
        </span>
        <img
          src={rain}
          className="rounded-full h-96 w-64 object-cover outline-dashed outline-offset-8 outline-blue-400"
          alt="img-phone"
        />
      </div>
      <div className="absolute bottom-4 left-2 p-3 rounded-3xl bg-slate-400 flex items-center justify-center">
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
      <div className="absolute top-12 right-3 flex flex-col gap-2">
        {" "}
        <span className="bg-slate-100 rounded-full p-1">
          <ShareIcon />
        </span>
        <span className=" bg-slate-100 rounded-full p-1">
          <InstagramIcon />
        </span>
        <span className=" bg-slate-100 rounded-full p-1">
          <FacebookIcon />
        </span>
        <span className=" bg-slate-100 rounded-full p-1">
          <XIcon />
        </span>
      </div>
    </section>
  );
}
