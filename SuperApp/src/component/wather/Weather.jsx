import React, { useEffect, useState } from 'react'
import axios from 'axios'
import pressure from '../../assets/pressur.png'
import wind from '../../assets/wind.png'
import humidity from '../../assets/humidity.png'
// import fetchData from '../../utility/api/WeatherApi';

import style from './Weather.module.css'

const Weather=()=> {
    const [timeDate, setTimeDate] = useState({ hour: '', minute: '', period: '',day:'',month:'',year:'' });
    const [weatherData,setWeatherData]=useState({});
    useEffect(()=>{
        const fetchData= async ()=>{
           
            
                fetch(
                 "http://api.weatherapi.com/v1/current.json?key=c0e59d85c6f24d4aa06191134230212&q=Kolkata&aqi=no"
                )
                .then(async (data) => await data.json())
                .then((data) => setWeatherData(data));
                
                   
        };
        fetchData();
        // setWeatherData(fetchData)
    },[]);
    
    
    

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();  
      

      let hour = now.getHours();
      let minute = now.getMinutes();
      const period = hour >= 12 ? 'PM' : 'AM';
      
      if(hour>12){
        hour=hour-12;
        if(hour<10){
          hour="0"+hour
        }
        
      }
      if(hour<10){
        hour="0"+hour;
      }
      let day=now.getDate();
      day=day<10?"0"+day:day;
      let month=now.getMonth()+1;
      month=month<10?"0"+month:month;

      
      minute=minute<10? "0"+minute:minute;
      setTimeDate(preevTime=>({
        hour,
        minute,
        period,
        day,
        
        month,
        year:now.getFullYear()
      }));

      
    };

    // Update the local date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId)

    
  }, [])
  return (
   <div className={style.main_container}>
     <div className={style.datetime_container}>
            <p className={style.date_section}>{timeDate.day}-{timeDate.month}-{timeDate.year}</p>
            <p className={style.time_section}>{timeDate.hour}:{timeDate.minute} {timeDate.period}</p>
     </div>
     <div className={style.weather_container}>
        <div className={style.weather_image}>
          <img src={weatherData.current?.condition?.icon}/>
          <p>{weatherData.current?.condition?.text}</p>
        </div>
        <div className={style.vertical_line}>
        </div>
        <div>
          <p className={style.temp_c}> 
              {weatherData.current?.temp_c}&deg;C
          </p >
          <div className={style.pressure_heading}>
            <img src={pressure}/>
            <p>{weatherData.current?.pressure_mb}{" "}mbar<br/>pressure</p>
            {/* <p>pressure</p> */}
          </div>
        </div>
        <div className={style.vertical_line2}>
        </div>
        <div>
          <div className={style.wind_kph}>
          <img src={wind} />
          <p>{weatherData.current?.wind_kph}kp/h<br/>Wind</p>
          </div>
          <div className={style.humidity}>
            <img src={humidity}/> <p>{weatherData.current?.humidity}%<br/>Humidity</p>
          </div>
        </div>

     </div>
   </div>
  )
}

export default Weather