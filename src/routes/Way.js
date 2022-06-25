import React from "react";  
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import {Search, Weather} from "../pages"; 

function Way() {
  return(
    <>
     <Router> 
        <Routes>
            <Route exact  path="/" element={<Search/>} />    
            <Route exact  path="/weather" element={<Weather />} />    
        </Routes>    
     </Router>  
    </> 

  )

} 

export default Way;