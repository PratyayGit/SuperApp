import React from 'react'
import style from  './ProfileLogo.module.css'
import logo from '../../assets/profilelogo.png'
import { useNavigate } from 'react-router-dom'
const ProfileLogo=()=> {
    const navigate=useNavigate();
    const toggleTohome=()=>{
        navigate('./home')
    }
  return (
    <img src={logo} className={style.logo}
    onClick={toggleTohome}
    />
  )
}

export default ProfileLogo