import bgImg from "../assets/bg-img.jpg";

export default function Header() {
  const basicCardStyle =
    "flex flex-col bg-orange-300 p-2 text-orange-100 m-1 rounded-md shadow-2xl opacity-80";

  return (
    <header className="h-[80vh] flex justify-around w-full bg-bgImg bg-no-repeat bg-top">
      <div className="left ">
        <h1 className="text-3xl text-slate-300 underline my-20">
          See wheather in your city!
        </h1>
        <div className="w-60 my-20">
          <p className="text-slate-100 shadow-2xl p-2 rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            eius voluptatibus, recusandae suscipit quas harum omnis nam
            blanditiis voluptatum ab perspiciatis tempore exercitationem
            accusamus reiciendis beatae unde! In, temporibus quis.
          </p>
          {/* Here will be output wheater from 3 city bu default */}
          <div className="w-50 flex my-20">
            <div className={basicCardStyle}>
              <p>
                deg <span>Celsius</span>
              </p>
              <p>Weather type</p>
              <p>City</p>
            </div>
            <div className={basicCardStyle}>
              <p>
                deg <span>Celsius</span>
              </p>
              <p>Weather type</p>
              <p>City</p>
            </div>
            <div className={basicCardStyle}>
              <p>
                deg <span>Celsius</span>
              </p>
              <p>Weather type</p>
              <p>City</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right my-44">
        <div>
          <h2 className="mb-5">Real feel</h2>
          <p className="mb-5">Weahter totday</p>
          <p className="mb-5">
            Wind <span>km/h</span>
          </p>
        </div>
      </div>
    </header>
  );
}
