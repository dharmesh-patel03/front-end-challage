

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from "chart.js";
// import { callback } from 'chart.js/dist/helpers/helpers.core';
ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler
)

const Chart = () => {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            data: [250 ,300, 365, 200, 400,250, 485, 500, 650, 675,350, 700,267, 450, 265,250, 255],
            backgroundColor: "#A6B3F04D",
            borderColor: "#4755A8",
            pointBorderColor: "transparent",
            pointBorderWidth: "4",
            tension: 0.5,
            fill:true
        }]
    }

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend:false
        },
        scales: {
            x: {
                grid: {
                    display:false
                }
            },
            y: {
                min: 0,
                max: 1000,
                ticks: {
                    stepSize:250,
                    callback: (value) => value===1000?1+"M":value+"K"
                }
            }
        }
    }
    return (
        <div className="w-auto border rounded-4 py-4 px-3 ">
            <div className="heading-part">
                <p className="m-0 font-bold">Average watch time</p>
                <p className="text-gray-500 text-xs">This tracks the average watch by users every month</p>
            </div>
            <div className="flex flex-col items-center w-full">
                <div className="flex items-center w-full">
                    <div><div className='-rotate-90 text-gray-500 hidden sm:block'>Watch-time</div></div>
                    <div className='w-100 h-56'><Line data={data} className="" options={options}  /></div>
                </div>
                <h6 className='hidden sm:block'>Month</h6>
            </div>

        </div>
    )
}

export default Chart