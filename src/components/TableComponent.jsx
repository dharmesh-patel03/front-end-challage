import React from 'react'

const TableComponent = ({ tHeadData, tBodyData,button,badgeData }) => {
    return (
        <>
            <div className='grid grid-cols-5 bg-gray-100 p-2 border rounded-t-md items-center font-bold text-sm'>

                {
                    tHeadData.map((data, key) => {
                        return <div key={key} className="text-center">{data}</div>
                    })
                }
            </div>
            <div className='grid grid-cols-5 p-2 py-3  border-b border-l border-r rounded-b-md items-center'>
            
                {
                    button?<div className='flex gap-2 items-center text-center justify-center'>
                        {badgeData.map((data, key) => {
                        return <div key={key} className="bg-blue-100 font-bold text-blue-700 px-2 py-1 rounded-full text-nano">{data}</div>
                    })}
                </div>:""
                }
                {
                    tBodyData.map((data, key) => {
                        return (
                            <div key={key} className="text-center">
                                {data}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TableComponent