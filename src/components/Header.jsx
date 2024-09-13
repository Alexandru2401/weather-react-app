export default function Header() {
  const basicCardStyle =
    "flex flex-col bg-orange-300 p-2 text-orange-100 m-1 rounded-md";

  return (
    <header className="bg-slate-500 p-3 h-[80vh]">
      <h1 className="text-3xl text-slate-300 underline my-20 mx-10">
        See wheather in your city!
      </h1>
      <div className="w-60 my-20 mx-10">
        <p className="text-slate-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          eius voluptatibus, recusandae suscipit quas harum omnis nam blanditiis
          voluptatum ab perspiciatis tempore exercitationem accusamus reiciendis
          beatae unde! In, temporibus quis.
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
    </header>
  );
}
