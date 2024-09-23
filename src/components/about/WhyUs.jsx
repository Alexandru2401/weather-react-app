import Card from "../UI/Card";
export default function WhyUs() {
  const cardStyle = "rounded-2xl shadow-md shadow-slate-700";

  return (
    <>
      <h2 className="text-center my-10 text-5xl">Why us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center sm:my-6 md:my-16">
        <Card className={cardStyle}>
          <h3 className="text-2xl mb-3">Accessibility</h3>
          <p className="text-lg">
            Our application is available on all mobile devices, so you can check
            the weather anytime, anywhere.
          </p>
        </Card>

        <Card className={cardStyle}>
          <h3 className="text-2xl mb-3">User-Friendly Interface</h3>
          <p className="text-lg">
            We’ve created an intuitive interface that allows you to quickly find
            the information you need.
          </p>
        </Card>

        <Card className={cardStyle}>
          <h3 className="text-2xl mb-3">Real-Time Updates</h3>
          <p className="text-lg">
            Stay informed about the latest weather changes with real-time
            notifications. You’ll never be caught off guard by unexpected rain
            or sudden weather changes!
          </p>
        </Card>
      </div>
    </>
  );
}
