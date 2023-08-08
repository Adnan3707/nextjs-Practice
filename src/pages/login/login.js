function Login(){
    return(
<div>This is login route /login</div>
    )
}
export default Login;
const rand = () => Math.round(Math.random() * 500);

const data = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      yAxisID: "right-y-axis",
      type: "line",
      label: "CTR",
      borderColor: "#ba78cb",
      borderWidth: 3,
      fill: true,
      cubicInterpolationMode: "monotone",

      backgroundColor: "rgba(186, 120, 203, 0.05)",
      data: [1,2,3,4,5,6,7]
    },
    {
      yAxisID: "right-y-axis",
      type: "line",
      label: "CTR",
      borderColor: "#badbad",
      borderWidth: 3,
      fill: true,
      cubicInterpolationMode: "monotone",

      backgroundColor: "rgba(186, 120, 203, 0.05)",
      data: [7,6,5,4,3,2,1]
    },
    {
      yAxisID: "left-y-axis",
      type: "bar",
      label: "Clicks",
      borderWidth: 0,
      borderRadius: 6,
      borderSkipped: false,
      backgroundColor: "#1096a5",
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      barThickness: 10,
      borderSkipped: ["bottom"]
    }
  ]
};

const options = {
  scales: {
    x: {
      grid: {
        display: false
      }
    },

    "left-y-axis": {
      type: "linear",
      position: "left",
      grid: {
        borderDash: [8, 6],
        lineWidth: 2
      },
      ticks: {
        maxTicksLimit: 6
      },
      scaleLabel:{
        display:true ,
        labelString:'count'
      }
    },
    "right-y-axis": {
      type: "linear",
      position: "right",
      grid: {
        display: false
      },
      ticks: {
        callback: (v) => v + "%",
        maxTicksLimit: 6
      }
    }
  }
};