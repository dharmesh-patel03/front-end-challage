import React from 'react'
import TableComponent from './TableComponent';

const Insights = () => {
    const headingData = ["Category", "Streams", "Watchlists", "Owner", "Release Date"];
    const tBodyData = ["39,823,154","76,923,304","101,783,945","14,895","34,056,147"]
    return (
        <div className='my-5 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
            <div className="heading-part my-4">
                <h6 className='m-0'>Interest Tracking Insights</h6>
                <p className='text-gray-400 text-sm'>Keep track of the insights on this movie</p>
            </div>
            <div>
                <TableComponent tHeadData={headingData} tBodyData={tBodyData}/>
            </div>
        </div>
    )
}

export default Insights