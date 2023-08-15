import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto'; 
import npl from 'natural'
Chart.register(CategoryScale);

const AnalyChart = (props) =>{
  var tokenGenerator = new npl.WordTokenizer()

  function getLast12Months(currentMonth) {
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    
    const currentMonthIndex = monthNames.indexOf(currentMonth);
    const last12MonthsArray = [];

    for (let i = 0; i < 12; i++) {
        const monthIndex = (currentMonthIndex - i + 12) % 12;
        last12MonthsArray.unshift(monthNames[monthIndex]);
    }
    
    return last12MonthsArray;
}
function getMonthFromDate(dateString) {
  const date = new Date(dateString);
  const month = date.getUTCMonth() + 1; // Adding 1 to match human-readable month indexing
  
  return month;
}
function updateArray(arraySize, index, newData) {
  const array = [];
  for (let i = 0; i < arraySize; i++) {
    if (i === index) {
      array.push(newData);
    } else {
      array.push(undefined);
    }
  }

  return array;
}
function getCurrentMonth() {
  const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  
  return months[currentMonthIndex];
}

let Months = getLast12Months(getCurrentMonth())
 console.log(new Date().getMonth().toLocaleString('en-US', { month: 'short' }))
  
  let data =  props.data.map((obj)=>({
    label: obj.topic_name ,
    type : 'bar',
    data : updateArray(Months.length,getMonthFromDate(obj.createdAt.$date),tokenGenerator.tokenize(obj.instruction)?.length),
    backgroundColor: [`rgba(7, 77, 6, 0)`],
    borderColor: ["rgba(255, 26, 5)"],
    borderWidth: 1,
    categoryPercentage:1,
    borderRadius: 20, // This will round the corners
    borderSkipped: false, // To make all side rounded
  }))

  let barChartData = {
    labels: [],
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
      },
      {
        label: "instruction",
        type : 'bar',
        yAxisID: "token",
        data: [14, 12, 6, 9, 1, 3, 9],
        backgroundColor: ["rgba(255, 26, 104, 0.2)"],
        borderColor: ["rgba(255, 26, 5, 2)"],
        borderWidth: 1,
        categoryPercentage:.2,
        borderRadius: 20, // This will round the corners
        borderSkipped: false, // To make all side rounded
      }
    ],
  }; 
  let barChartDataN = {
    labels:Months,
    datasets:data
  }
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
      <Bar data={barChartDataN} options={config} width={800} height={400} />
    </div>)
}
export default AnalyChart
