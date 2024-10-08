import Button from "../components/UI/Button";
import { Link } from "react-router-dom";
export const items = [
  {
    title: "First Card",
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-2">Explore Weather Trends</h2>
        <p className="text-xl">
          Discover the latest weather trends and updates. Our comprehensive data
          and forecasts help you stay ahead of the weather, whether you're
          planning a trip or just looking to dress appropriately for the day.
        </p>
      </>
    ),
  },
  {
    title: "Second Card",
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-2">Real-Time Alerts</h2>
        <p  className="text-xl">
          Get real-time alerts for severe weather conditions. We provide timely
          updates to keep you informed and safe during extreme weather events.
          Stay prepared and act quickly with our reliable warnings.
        </p>
        <p  className="text-xl">
          Stay connected and receive updates via push notifications or email.
          Our service ensures you never miss an important alert.
        </p>
      </>
    ),
  },
  {
    title: "Third Card",
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-2">Plan Your Day</h2>
        <p  className="text-xl">
          Use our detailed forecasts to plan your activities for the day.
          Whether it's a sunny day or a rainy afternoon, our accurate
          p redictions help you make the most out of your schedule.
        </p >
        <Button className="bg-blue-500 text-white p-2 rounded mt-3 hover:bg-blue-600">
          <Link to="/about">See More</Link>
        </Button>
      </>
    ),
  },
];
