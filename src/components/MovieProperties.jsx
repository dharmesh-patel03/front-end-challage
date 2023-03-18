import React from 'react'
import TableComponent from './TableComponent'

const MovieProperties = () => {
    const headingData = ["Category", "Streams", "Watchlists", "Owner", "Release Date"];
    const tBodyData = ["24,512,232", "389,234", "Sony Entertainment", "21th May, 2022",]
    const badgeData = ["ACTION", "THRILLER"]

    return (
        <div className='my-3 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
            <div className="heading-part my-4">
                <h6 className='m-0'>Movie Properties</h6>
                <p className='text-gray-400 text-sm'>A list of the details for this movie</p>
            </div>
            <div>
                <div>
                    <TableComponent tHeadData={headingData} tBodyData={tBodyData} button={true} badgeData={badgeData} />
                </div>
            </div>
        </div>
    )
}

export default MovieProperties