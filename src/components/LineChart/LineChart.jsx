import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';
import "./LineChart.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
  );

export default function LineChart({title, labels, data}){
    const chartData ={labels,
    datasets: [
      {
        label: title,
        data: data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  
    return (
      <div className="chart">
        <h2>{title}</h2>
        <Line 
          data={chartData} 
          options={{
          }
          }
        />
      </div>
    );
  };
