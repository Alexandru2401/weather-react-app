import { Bar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ data, isDark }) {
  const labels = [1, 2, 3, 4, 5];
  const barData = {
    labels: labels,
    datasets: [
      {
        label: "Pressure",
        data: data.map((item) => item.pressure),
        hoverOffset: 4,
        backgroundColor: [
          "rgb(253 186 116)",
          "rgb(190 242 100)",
          "rgb(34 211 238)",
          "rgb(190 18 60)",
          "rgb(55 65 81)",
        ],
        borderColor: "#000",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Pressure Levels in the last 5 days",
      },
    },
  };

  return (
    <div className="w-full lg:w-1/2 min-h-72  mx-auto flex items-center justify-center my-10 bg-slate-200 p-3 rounded-2xl">
      <Bar options={options} data={barData} />
    </div>
  );
}
