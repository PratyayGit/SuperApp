import React from 'react'
import User from '../component/user/User'
import Weather from '../component/wather/Weather'
import News from '../component/news/News'

function Home() {
  return (
    <div style={{display:"flex"}}>
      <div style={{ 
      position:"absolute",
      top:"7vh",
      left:"8vh"

    
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