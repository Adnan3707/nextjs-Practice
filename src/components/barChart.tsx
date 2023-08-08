import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto'; 
import npl from 'natural'
Chart.register(CategoryScale);

const AnalyChart = (props:any) =>{
  var tokenGenerator = new npl.WordTokenizer()

//   console.log(tokenGenerator.tokenize("This sentence is very short. It is ok."))
//  console.log(props.data)
interface IKeys { tokens: string; date: string }
  let data =  props.data.map((obj:any)=>({
    tokens: tokenGenerator.tokenize(obj.instruction)?.length ,
    date : obj.createdAt.$date.split('T').join(' ') 
  }))
  console.log(data)
  let barChartData = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
    datasets: [
      {
        label: "instruction",
        type : 'bar',
        yAxisID: "token",
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: ["rgba(255, 26, 104, 0.2)"],
        borderColor: ["rgba(255, 26, 5, 2)"],
        borderWidth: 1,
        categoryPercentage:.2,
        borderRadius: 20, // This will round the corners
        borderSkipped: false, // To make all side rounded
      }
    ],
  }; 
  let config = {

    scales: {
        y:{
            display:false
        },
        "token":{
            type: 'linear',
            position: "left",
            min:7,
            max:20,
            title:{
              display:true,
              text:'Token utilized',
              font:'Arial'
            },
        }
    },
    plugins:{
      title: {
        display: true,
        align: "left",
        text: "Token Analyzer",
      },
    }
  };
    return (<div>
      <Bar data={barChartData} options={config} width={800} height={400} />
    </div>)
}
export default AnalyChart
