import React from 'react'
import AllMovies from '../components/AllMovies'
import Header from '../components/Header'
import Insights from '../components/Insights'
import MovieProperties from '../components/MovieProperties'
import Preview from '../components/Preview'

const Home = () => {
  return (
    <>
      <Header />
      <Preview />
      <MovieProperties />
      <Insights />
      <AllMovies />
    </>
  )
}

export default Home