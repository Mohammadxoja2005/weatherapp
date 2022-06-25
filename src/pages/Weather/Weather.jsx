import {useState} from "react"; 
import "./Weather.css"
import {useLocation} from "react-router-dom"; 

function Weather() { 
  
  const location = useLocation();  
    console.log(location); 
     
    return( 
        <>
         <div className="weather-wrapper">
    <div className="weather-card madrid">
      <div className="weather-icon sun" />
      <h1>26º</h1>
      <p>Madrid</p>
    </div>
    <div className="weather-card london">
      <div className="weather-icon cloud" />
      <h1>14º</h1>
      <p>London</p> 
    </div>
  </div>
  </>
     )
} 

export default Weather; 
 
 