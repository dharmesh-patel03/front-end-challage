// import React from 'react';

import React from 'react'
import Home from './container/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./container/Navbar";
import "./css/preview.css"
import Footer from './container/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
