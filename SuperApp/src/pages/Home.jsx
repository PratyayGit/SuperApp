import React from 'react'
import User from '../component/user/User'
import Weather from '../component/wather/Weather'
import News from '../component/news/News'

function Home() {
  return (
    <div style={{display:"flex",
    justifyContent:"space-between",
    flex:"1vh"}}>
      <div style={{ 
      position:"absolute",
      top:"1vh",
      left:"8vh",
      border:"1px solid yellow",
      height:"2vh"

    
       }}>
        <User/>
      </div>
      <div
      style={{ 
        position:"absolute",
        top:"65vh",
        left:"11.5vh"
    
        
        }}
      >
          <Weather/>
      </div>
      <div>
        <News/>
      </div>
    
    </div>
  )
}

export default Home