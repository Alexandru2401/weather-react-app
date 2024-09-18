import Button from "../components/UI/Button";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function Header() {
  const basicCardStyle =
    "flex flex-col bg-transparent p-3 m-2 text-xl text-slate-100 rounded-md shadow-md shadow-slate-600 backdrop-blur-md";

  return (
    <header className=" realative h-[80vh] flex justify-around w-full bg-bgImg bg-no-repeat bg-left bg-cover rounded-b-3xl">
      <section>
        <h1 className="text-7xl my-16 font-semibold  text-transparent bg-gradient-to-r from-slate-100 via-gray-700 to-black bg-clip-text py-3">
          See wheather in your city!
        </h1>
        <div className="w-60 my-12">
          <p className="text-slate-950 text-xl shadow-2xl shadow-slate-600 p-3 rounded-2xl backdrop-blur-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            eius voluptatibus, recusandae suscipit quas harum omnis nam
            blanditiis.
          </p>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Button className="bg-slate-400 w-44 shadow-md shadow-slate-600">
              <Link to="/about">
                Get started! <ArrowForwardIcon />
              </Link>
            </Button>
          </div>
          <div className="w-80 flex my-16">
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
      <section className="my-44 backdrop-blur-md p-4 shadow-md rounded-xl">
        <div>
          <p className="mb-5">
            <span className="text-8xl text-slate-100">40&deg; C</span>
          </p>
          <p className="mb-5 text-2xl text-slate-100">Real feel: 40&deg; C</p>
          <p className="mb-5 text-2xl text-slate-100">Weahter totday: sunny</p>
          <p className="mb-5 text-2xl text-slate-100">
            Wind: <span>20km/h</span>
          </p>
        </div>
      </section>
    </header>
  );
}
