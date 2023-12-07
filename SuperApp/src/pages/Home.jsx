import React from 'react'
import User from '../component/user/User'
import Weather from '../component/wather/Weather'
import News from '../component/news/News'
import Timer from '../component/timer/Timer'
import Note from '../component/note/Note'
import BrowserBtn from '../component/browser/BrowserBtn'

function Home() {
  return (
    <div style={{display:"flex",
    backgroundColor:"black",
    height:"100vh",
    width:"100vw"
    }}
    >
      <div>
        <User/>
        <Note/>
        <Weather/>
        <Timer/>
        
      </div>
      <div>
        <News/>
        <BrowserBtn/>
      </div>
    
    </div>
  )
}

export default Home