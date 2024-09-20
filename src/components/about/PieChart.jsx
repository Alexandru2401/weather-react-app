import { Pie } from "react-chartjs-2";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";

Chartjs.register(ArcElement, Tooltip, Legend);

export default function PieChart({
  medianWindDegree,
  medianWindGust,
  medianWindSpeed,
}) {
  const labels = [
    "Median wind degree in the last 5 days",
    "Median wind speed in the last 5 days",
    "Median wind gust in the last 5 days",
  ];
  const pieData = {
    labels: labels,
    datasets: [
      {
        label: "Wind",
        data: [medianWindDegree, medianWindSpeed, medianWindGust],
        hoverOffset: 4,
        backgroundColor: [
            "rgb(253 186 116)",
            "rgb(190 18 60)",
            "rgb(34 211 238)",
        ],
        borderColor:"#000",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const options = {
    circumference: "360",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Median wind speed, degree and gust for the last 5 days",
      },
    },
  };

  return (
    <div className="w-1/2 mx-auto h-72 flex items-center justify-center">
      <Pie options={options} data={pieData} />
    </div>
  );
}
