import React from 'react'
import { CloudDownloadIcon } from '../icons'

const Header = () => {
    return (
        <div className='border-b-2 border-gray-100'>
            <div className='flex items-center  justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4 '>
                <h3 className='font-bold'>Avengers Black Widow</h3>
                <button className="bg-white hover:bg-gray-400 text-gray-800 py-1 px-2 border border-gray-400 rounded flex items-center gap-1">
                    <CloudDownloadIcon />
                    Export
                </button>
            </div>
        </div>
    )
}

export default Header