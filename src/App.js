
import {

  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

 <Route path="/" element={<Home/>}/>

 <Route path="/hotels" element={<List/>}/>
 <Route path="/hotel/:id" element={<Hotel/>}/>

      </Routes>
    
    </BrowserRouter>
 
  )
}

export default App