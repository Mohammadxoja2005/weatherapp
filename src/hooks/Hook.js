import {useState, useEffect} from 'react';  
import WeatherHelper from '../helpers/WeatherHelper'; 

const Hook = () => { 
  const [todaysWeatherData, setTodaysWeatherData] = useState([]);  

  const submitRequest = (location) => { 
    TodaysWeather(location); 
  } 

   const TodaysWeather = async (location) => {
      const TodaysWeatherData = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API}`)).json();   
      const  ActualWeather = WeatherHelper(TodaysWeatherData);
      setTodaysWeatherData(ActualWeather); 
    }  

    return [
    submitRequest,  
    todaysWeatherData 
  ]
} 

export default Hook; 