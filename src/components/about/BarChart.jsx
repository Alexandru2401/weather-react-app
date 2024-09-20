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

export default function BarChart({data}) {
  const labels = [1, 2, 3, 4, 5]
  const barData = {
    labels: labels,
    datasets: [
      {
        label: "Pressure",
        data: data.map((item) => item.pressure),
        hoverOffset: 4,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Pressure Levels in the last 5 days',
      },
    },
  };

  return (
    <div  className="w-1/2 mx-auto flex items-center justify-center">
      <Bar options={options} data={barData} />
    </div>
  );
}
