import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'



const Home = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className="homeContainer">

      <Featured/>
      <h1 className="homeTitle">Brouse by property type</h1>
      <PropertyList/>
      <h1 className="homeTitle" > Homes guests love  </h1>
    </div>
    </div>

    )
}

export default Home