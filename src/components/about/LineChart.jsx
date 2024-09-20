import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LineChart({ data }) {
  // Mapping through labels - i want to return all 40 data from humidity
  const labels = data.map((_, index) => index + 1);

  const chartData = {
    labels: labels, 
    datasets: [
      {
        label: "Humidity",
        data: data.map((item) => item.humidity),
        hoverOffset: 4,
        backgroundColor: "rgba(255, 0, 0, 0.26)",
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
        position: 'top',
      },
      title: {
        display: true,
        text: 'Humidity Levels in the last 5 days',
      },
    },
  };

  return (
    <div className="w-1/2 min-h-72 mx-auto flex items-center justify-center">
      <Line options={options} data={chartData} />
    </div>
  );
}
