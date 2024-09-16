export default function CurrentCity() {
  return (
    <>
      <h2 className="m-4 text-center">Current City</h2>
      <div className="my-4 bg-slate-400 p-3 flex items-center justify-around">
        <div>
          <h3>Bucharest</h3>
          <p>
            Day <span>Hours</span>
          </p>
          <p>
            deg <span>icon</span>
          </p>
        </div>
        <div>
          <p>Real feel: 12 C</p>
          <p>Description</p>
          <p>Wind: 10km/h</p>
        </div>
      </div>
    </>
  );
}

// Here will be displayed information about current city
