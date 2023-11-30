import React, { useEffect, useState } from 'react'
import userProfile from '../../assets/user.png'

import style from './User.module.css'
function User() {
    
   

    const userInfo = JSON.parse(localStorage.getItem("formData"));
    
    const userChoice = JSON.parse(localStorage.getItem("categoryChoice"));


    
    

  return (
    <div className={style.main_container}>
        <img  src={userProfile} alt={"userprofile"} className={style.user_image}/>
        <div className={style.user_info}>
            <h2 className={style.user_name}>{userInfo.name}</h2>
            <h2 className={style.user_email}>{userInfo.email}</h2>
            <h1  className={style.user_username}>{userInfo.username}</h1>
            <div className={style.blocks_item}>
                <Blocks category={userChoice}/>
            </div>
        </div>

    </div>

  );
};

export default User

const Blocks=({category})=>{
   return(
    <div 
    style={{
        height:"200px",
        width:"390px",
        fontSize:"15px",
        display:"grid",
        gridTemplateColumns:"1fr 1fr",    
        }}
    >
    {category.map((data)=>(
        
           <button 
            style={{
            height:"40px",
            width:"150px",
            backgroundColor:"#9F94FF", 
            margin:"20px",
            borderRadius:"12px",
            textAlign:"center"
           }}>
            <span
            style={{
                height:"40px"
            }}>{data}</span>
           </button>
       
    ))}
    </div>
   )
}