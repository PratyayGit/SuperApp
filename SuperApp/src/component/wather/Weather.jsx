import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather=()=> {
    const [weatherData,setWeatherData]=useState("");
    useEffect(()=>{
        const fetchData= async ()=>{
           
                try {
                  //  const response=await axios.get('http://api.weatherapi.com/v1/current.json?key=374beda11d09433ea8e105438230112&q=Kolkata&aqi=no');
                   setWeatherData(response.data);
                } catch (error) {
                  console.error(error);
                }
            
        };
        fetchData();
    },[]);
  return (
    <div>{weatherData?(<>{weatherData.current.wind_kph}</>):<></>}</div>
  )
}

export default Weather