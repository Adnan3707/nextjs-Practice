import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import Pi from "../components/pieChart";
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto'; 
import AnalyChart from '../components/barChart.tsx'
import {A as TopicsData} from '../../dummyData.js'
import  '../Styles/about.css'
Chart.register(CategoryScale);

const AboutPage = (props) => {
  let [data,Setdata] = useState()
  // useEffect(()=>{
  //   Setdata({barChart:props.barChartData,pieChart:props.pieChartData})
  // },[data])
  let barChartData = {
    labels: [
      "01-01-2023",
      "01-02-2023",
      "01-03-2023",
      "01-04-2023",
      "01-05-2023",
    ],
    datasets: [
      {
        label: "Topic",
        type : 'bar',
        yAxisID: "SG",
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: ["rgba(255, 26, 104, 0.2)"],
        borderColor: ["rgba(255, 26, 104, 1)"],
        borderWidth: 1,
      },
      {
        type : 'bar',
        yAxisID: "LG",
        label: "Date",
        data: [250, 552, 433, 511, 134, 112, 1114],
        backgroundColor: ["rgba(255, 26, 104, 0.2)"],
        borderColor: ["rgba(255, 26, 104, -1)"],
        borderWidth: 1,
      },
      {
        type:'bar',
        label: "Month",
        data: [25, 55, 4, 5, 14, 2, 4],
        backgroundColor: ["rgba(255, 26, 104, 3)"],
        borderColor: ["rgba(255, 26, 104, 1)"],
        borderWidth: 1,
      },
    ],
  }; 
  let config = {

    scales: {
    y: 
      {
          display: false
      },
      "SG" : {
          type: 'linear',
          position: "right",
          min:7,
          max:70,
          title:{
            display:true,
            text:'token',
            font:'Arial'
          },
      ticks: {
        maxTicksLimit: 6
      },
          display: true
        },
        "LG":
        {
          min:100,
          max:1000,
          title:{
            display:true,
            text:'Login',
            font:'Arial'
          }, 
        }
    },
    plugins:{
      title: {
        display: true,
        align: "left",
        text: "Assignment Chart Title",
      },
    }
  };
  return (
    <div className="analytics">
    {/* <header className="video-container">
      <video autoPlay loop muted>
        <source src="../flower.webm" type="video/webm" />
      </video>
      </header> */}
      <h1>AI Analytics </h1>
      <div>
      <Bar data={barChartData} options={config} width={800} height={400} />
      </div>
      <div>
        <Pi></Pi>
      </div>
      <div>
        <AnalyChart data={TopicsData} config = {config}/>
      </div>
    </div>
  );
};

export default AboutPage;
