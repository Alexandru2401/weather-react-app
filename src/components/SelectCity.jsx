export default function SelectCity() {
  return (
    <div>
      <div>
        <label htmlFor="searchCity">Search</label>
        <input type="text" name="searchCity" id="" />
      </div>
      <div className="my-4 bg-slate-400 p-3 flex items-center justify-around">
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
  );
}
