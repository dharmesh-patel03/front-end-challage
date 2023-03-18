import React from 'react'
import { DownArrowIcon, TrendingIcon } from '../icons'

const AllMoviesTable = ({ tHeadData, tBodyData }) => {
    return (
        <>
            <div className='grid grid-cols-7 bg-gray-100 p-2 border rounded-t-md items-center text-sm font-bold'>
            <div className="text-center flex items-center gap-4 justify-center"><span>name</span><DownArrowIcon/></div>
                {
                    tHeadData.map((data, key) => {
                        return (<div key={key} className="text-center">{data}</div>)
                    })
                }
            </div>
            {
                tBodyData.map((data, key) => {
                    return <div key={key}>
                        <div className='grid grid-cols-7 p-2  border-b border-l border-r items-center py-3 text-sm' key={key}>
                            <div className=' flex items-center gap-2 justify-cener'>
                                <img src={data[0].profile} alt="" />
                                {data[0].name}
                            </div>
                            <div className='flex gap-2 items-center '>
                                {
                                    data[1].category.map((data, key) => {
                                        return <div key={key} className="bg-blue-100 text-blue-700 px-3 py-1 uppercase rounded-full text-nano font-bold">{data}</div>
                                    })
                                }
                            </div>
                            <div className='text-center'>
                                {
                                    data[2].trending ? <div className='flex items-baseline gap-1 justify-center'> <span><TrendingIcon /></span> <span className='text-blue-900'>trending</span> </div> : ""
                                }
                            </div>
                            <div className='text-center'>{data[3]}</div>
                            <div className='text-center'>{data[4]}</div>
                            <div className='text-center'>{data[5]}</div>
                            <div className='text-center'>
                                <button className="bg-transparent hover:bg-blue-500 text-black  btn-sm hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded font-bold">
                                    view
                                </button>
                            </div>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default AllMoviesTable