import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'



const Home = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className="homecontainer"></div>
    </div>

    )
}

export default Home