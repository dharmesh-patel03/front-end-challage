// import React from 'react'
// import CanvasJSReact from './canvasjs.react';
// // var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const Chart = () => {

//     const options = {
//         animationEnabled: true,
//         title: {
//             text: "Nuclear Electricity Generation in US"
//         },
//         axisY: {
//             title: "watch time",
//             suffix: "k"
//         },
//         data: [{
//             type: "splineArea",
//             xValueFormatString: "MM",
//             yValueFormatString: "###",
//             dataPoints: [
//                 { x: new Date(2008,1), y: 225 },
//                 { x: new Date(2009, 0), y: 74.102 },
//                 { x: new Date(2010, 0), y: 72.569 },
//                 { x: new Date(2011, 0), y: 72.743 },
//                 { x: new Date(2012, 0), y: 72.381 },
//                 { x: new Date(2013, 0), y: 71.406 },
//                 { x: new Date(2014, 0), y: 73.163 },
//                 { x: new Date(2015, 0), y: 74.270 },
//                 { x: new Date(2016, 0), y: 72.525 },
//                 { x: new Date(2017, 0), y: 125 }
//             ]
//         }]
//     }
//     console.log(new Date(2008,0))

//     return (
//         <div className='p-5 border border-gray-100 rounded-3'>
//             <CanvasJSChart options={options}
//             />
//         </div>
//     )
// }

// export default Chart

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from "chart.js";
ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler
)

const Chart = () => {
    const [data, setData] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "First Dataset",
                data: [250, 255, 267, 277, 265, 255, 235, 250, 295, 275, 233, 234],
                backgroundColor: '#A6B3F04D',
                pointBorderColor: "transparent",
                opacity: 0.5,
                borderColor: "blue",
                tension: 0.5,
                borderWidth: "1",
                fill: true,
            }
        ]
    })
    return (
        <div className="w-auto border rounded-4 py-4 px-3 hidden sm:block">
            <div className="heading-part">
                <h6>Average watch time</h6>
                <p className="text-gray-500">This tracks the average watch by users every month</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex items-center">
                    <h6 className='-rotate-90 text-gray-500'>Watch time</h6>
                    <Line data={data} className="chart-part" />
                </div>
                <h6>Month</h6>
            </div>

        </div>
    )
}

export default Chart