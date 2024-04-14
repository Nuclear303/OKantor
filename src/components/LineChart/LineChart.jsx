import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';
import React from "react";
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

export default class LineChart extends React.Component{
    state = { 
        chartData:{
            labels:this.props.labels,
            datasets: [
            {
                label: this.props.title,
                data: this.props.data,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
            ],
        }
    };

    render(){
        return (
            <div className="chart">
              <h2>{this.props.title}</h2>
              <Line 
                data={this.state.chartData} 
                options={{}}
              />
            </div>
          );
    }
    
  };
