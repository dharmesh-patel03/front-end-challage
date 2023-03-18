import React from 'react'
import Chart from './Chart'
import movieImage from "../images/MovieImage.png"

const Preview = () => {
    return (
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4 '>
            <div className="poster ">
                <img src={movieImage} alt="" />
            </div>
            <div className="chart w-100 sm:w-100">
               <Chart/>
            </div>
            
        </div>
    )
}

export default Preview