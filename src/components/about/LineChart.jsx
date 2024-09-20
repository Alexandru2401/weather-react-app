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
} from "chart.js";

Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
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
        text: 'Humidity Levels in the last 40 days',
      },
    },
  };

  return (
    <div className="w-full h-[500px] flex items-center justify-center">
      <Line options={options} data={chartData} />
    </div>
  );
}
