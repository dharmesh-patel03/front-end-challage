import React from 'react'
import AllMoviesTable from './AllMoviesTable'
import AvengerBlackWidow from "../images/avenger-black-widow.png"
import AfterHours from "../images/after-hours.png"
import AntMan from "../images/ant-man.png"
import Grimsby from "../images/grimsby.png"
import CaptainMarvel from "../images/captain-marvel.png"
import { NavLink } from 'react-router-dom'
import { SearchIcon } from '../icons'

const AllMovies = () => {
    const tHeadData = [ "Category", "Popularity/Interest", "Watchlists", "Streams", "Release Date", ""]
    const tBodyData =
        [
            [{ name: "Avengers Black Widow", profile: AvengerBlackWidow }, { category: ["ACTION", "blockbuster"] }, { trending: true }, "590,972,542", "21,452", "21th May, 2003", { button: true }],
            [{ name: "After Hours", profile: AfterHours }, { category: ["horror", "crime"] }, { trending: false }, "88,458,892", "32,892", "21th May, 2003", { button: true }],
            [{ name: "Ant-man", profile: AntMan }, { category: ["horror", "crime"] }, { trending: false }, "22,008,901", "345,321", "21th May, 2003", { button: true }],
            [{ name: "Captain Marvel", profile: Grimsby }, { category: ["ACTION", "fantasy"] }, { trending: false }, "80,961", "903", "21th May, 2003", { button: true }],
            [{ name: "Grimsby", profile: CaptainMarvel }, { category: ["comedy", "crime"] }, { trending: true }, "590,972,542", "21,452", "21th May, 2003", { button: true }]
        ]

    return (
        <div className='my-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
            <div className="flex gap-5 w-100 border-b  my-3">
                <NavLink to="/" className="no-underline gradient-border text-black py-2  ">All Movies</NavLink>
                <NavLink to="/" className="no-underline text-gray-400 py-2 ">Trending</NavLink>
                <NavLink to="/" className="no-underline text-gray-400 py-2 ">Upcoming Premier</NavLink>
            </div>
            <div className="heading-part flex items-center justify-between my-4">
                <div>
                    <h6 className='m-0'>Collection of all movies</h6>
                    <p className='text-gray-400 text-sm m-0'>Keep track of all the movies on moviebox</p>
                </div>
                <div className='flex items-center relative'>
                    <SearchIcon className='search-icon'/>
                    <input className=" appearance-none border rounded-3 w-60 py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
                </div>
            </div>
            <div>
                <AllMoviesTable tHeadData={tHeadData} tBodyData={tBodyData} />
            </div>
        </div>
    )
}

export default AllMovies