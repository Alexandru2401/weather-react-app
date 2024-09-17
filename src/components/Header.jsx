export default function Header() {
  const basicCardStyle =
    "flex flex-col bg-orange-300 p-2 text-orange-100 m-1 rounded-md shadow-2xl";

  return (
    <header className="h-[80vh] flex justify-around w-full bg-bgImg bg-no-repeat bg-left bg-cover rounded-b-3xl">
      <div className="left ">
        <h1 className="text-5xl text-slate-200 my-20 font-semibold">
          See wheather in your city!
        </h1>
        <div className="w-60 my-20">
          <p className="text-slate-950 text-xl shadow-2xl p-3 rounded-2xl backdrop-blur-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            eius voluptatibus, recusandae suscipit quas harum omnis nam
            blanditiis.
          </p>
          {/* Here will be output wheater from 3 city bu default */}
          <div className="w-80 flex my-20">
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
      </div>
      <div className="right my-44">
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
      </div>
    </header>
  );
}
