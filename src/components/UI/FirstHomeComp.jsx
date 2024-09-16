import Card from "./Card";
import { Link } from "react-router-dom";

export default function FirstHomeComp() {
  return (
    <div className="flex align-center justify-center flex-col my-6">
      <h2 className="text-2xl mx-auto my-3">Weahter can be unpredictable</h2>
      <p className="text-xl mx-auto mb-3">Be one step ahead of it!</p>
      <Link to="/about" className="mx-auto">
        <button className="bg-slate-500 w-52 rounded-md p-2 text-slate-200">
          See more!
        </button>
      </Link>
      <p>Benefits</p>
      {/* Here will be listed 3 cards */}
      <div className="flex align-center justify-center">
        <Card>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            molestiae labore
          </p>
        </Card>
        <Card>
          <p>
            ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae
            labore minus{" "}
          </p>
        </Card>
        <Card>
          <p>
            {" "}
            Quam molestiae labore minus obcaecati aspernatur consectetur,
            similique quo ad saepe veritatis excepturi, odio alias{" "}
          </p>
        </Card>
      </div>
    </div>
  );
}
