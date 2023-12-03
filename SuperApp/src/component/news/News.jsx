import React, { useState ,useEffect} from 'react'
import style from './News.module.css'
const News=()=> {
  const[news,setNews]=useState({articles: []});
  const [dateTime,setDateTime]=useState({dateToday: '',timeNow:''})
  useEffect(()=>{
    const fetchNews= async ()=>{
      const url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3ed64d13e53a4ca8a3c97837b3ee7ef4';
  
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(  result.articles[1]);
        setNews(result)
      } catch (error) {
        console.error(error);
      }
    }
    fetchNews()
    
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
    let year=now.getFullYear();
    
    minute=minute<10? "0"+minute:minute;
    const timeNow=hour+':'+minute+' '+period;
    const dateToday=day+'-'+month+'-'+year;
    setDateTime(preevTime=>({
      
      dateToday,
      timeNow
    }));

    
  };
      // Update the local date and time every second
      const intervalId = setInterval(updateDateTime, 1000);

      // Clean up the interval when the component is unmounted
      return () => clearInterval(intervalId)
  
      
    }, [])
  return (
    <div className={style.news_mainconainer}>
        
        <div>
          <img src={news.articles[1]?.urlToImage}/>
          <div className={style.news_title}>
            {news.articles[1]?.title}<br/>
            <p style={{color:"white",marginTop:"2px",marginLeft:"-15px"}}>{dateTime.dateToday}{" "}{dateTime.timeNow}</p>
          </div>
        </div>
        <div className={style.news_conttent}>
            <p>{news.articles[1]?.content}</p>
        </div>
    </div>
  )
}

export default News