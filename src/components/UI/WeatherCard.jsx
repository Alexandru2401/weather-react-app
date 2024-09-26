import Card from "./Card";
export default function WeatherCard({
  title,
  description,
  image,
  icon,
  className,
}) {
  return (
    <Card className={`${className} sm:mx-auto`}>
      {image && <img src={image} className="w-80 rounded-md" alt={title} />}
      <h2 className="text-xl font-semibold my-2 border-b-2 border-blue-500">
        {title} {icon}
      </h2>
      <p>{description}</p>
    </Card>
  );
}
