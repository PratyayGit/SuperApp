import React, { useState ,useEffect} from 'react'
import style from './News.module.css'
const News=()=> {
  const[news,setNews]=useState("")
  useEffect(()=>{
    const fetchNews= async ()=>{
      const url = 'https://newsdata.io/api/1/news?apikey=pub_33983b96bf9decd5866ce62a4e37dc653eca2&q=food&country=in&language=en&category=food ';
  //     const options = {
	//     method: 'GET',
	//     headers: {
	// 	'X-RapidAPI-Key': 'b6694d5caemshd83a8b0a3993adcp103f8bjsn4975cb65648b',
	// 	'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
	// }
      // };
      try {
        const response = await fetch(url);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchNews()
},[]);
  return (
    <div style={{
      marginLeft:"150vh"
    }}>
        
        <div>this is news api</div>
        <p>{news?.description}</p>
    </div>
  )
}

export default News