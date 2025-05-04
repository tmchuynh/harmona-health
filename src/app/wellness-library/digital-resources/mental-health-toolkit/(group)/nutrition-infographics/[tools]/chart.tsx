import { Nutrition } from "@/lib/interfaces&types/resources";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

export default function Chart({ data }: { data: Nutrition }) {
  const { graphType, title, data: chartData, options } = data;

  return (
    <div className="p-8 border">
      <h2>{title}</h2>
      <div className="h-[15rem] lg:h-[20rem] xl:h-[50rem]">
        {graphType === "pie" && (
          <Pie
            data={chartData}
            options={options as ChartOptions<"pie">}
            className="my-5"
          />
        )}
        {graphType === "bar" && (
          <Bar data={chartData} options={options as ChartOptions<"bar">} />
        )}
        {graphType === "line" && (
          <Line data={chartData} options={options as ChartOptions<"line">} />
        )}
        {graphType === "doughnut" && (
          <Doughnut
            data={chartData}
            options={options as ChartOptions<"doughnut">}
          />
        )}
      </div>
    </div>
  );
}
