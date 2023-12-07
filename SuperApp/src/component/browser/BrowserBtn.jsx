import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './BrowserBtn.module.css'
const BrowserBtn=()=> {
    const navigate =useNavigate();
    const onbtnClick=()=>{
        navigate('/browseentertainment');
    }
  return (
    <button className={style.btn}
    
    onClick={onbtnClick}>
        Browser
    </button>
  )
}

export default BrowserBtn