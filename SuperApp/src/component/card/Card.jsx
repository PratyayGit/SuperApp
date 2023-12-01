import React, { useState,useEffect } from 'react'

import action from '../../assets/action.png'
import drama from '../../assets/drama.png'
import fantasy from '../../assets/fantasy.png'
import friction from '../../assets/friction.png'
import horror from '../../assets/horror.png'
import music from '../../assets/music.png'
import romance from '../../assets/romance.png'
import thriller from '../../assets/thriller.png'
import western from '../../assets/western.png'
import warning from '../../assets/warning.png'

import style from './Card.module.css'
import Block from '../block/Block'
import { useNavigate } from 'react-router-dom'

const ImageArray=[
    { 
        id:1,
        title: "Action",
        img: action,
        color: "#11B800" 
    },
    { 
        id:2, 
        title: "Drama", 
        img: drama,
        color: "#D7A4FF" 
    },
    { 
        id:3, 
        title: "Romance",
        img: romance,
        color: "#11B800"
    },
    { 
        id:4, 
        title: "Thriller", 
        img: thriller,
        color: "#84C2FF"
     },
    { 
        id:5, 
        title: "Western", 
        img: western,
        color: "#902500"
     },
    { 
        id:6, 
        title: "Horror", 
        img: horror,
        color: "#7358FF"
     },
    { 
        id:7, 
        title: "Fantasy", 
        img: fantasy,
        color: "#FF4ADE"
     },
    { 
        id:8, 
        title: "Music", 
        img: music,
        color: "#11B800"
     },
    { 
        id:9, 
        title: "Fiction",
        img: friction,
        color: "#6CD061"
     }
]

function Card() {
    const [category,setCategory]=useState([]);
    const [minLengthError,setMinLengthError]=useState(false);
    const navigate=useNavigate();
    const nextPageHandle=()=>{
        if(category.length<3){
            setMinLengthError(true);
        }else{
            setMinLengthError(false)
            // Local Storage data save
            localStorage.setItem('categoryChoice',JSON.stringify([...category]))
            navigate('/home');
        }
    }
  return (
    <div className={style.main_body}>
        <div className={style.left_body}>
            <h1 className={style.heading}>Super app</h1>
            <h1 className={style.subheading}>Choose your<br/>entertainment<br/>category</h1>
            {/* this section for select category appear */}

            <div className={style.block_cat}
            >
                {/* this component will work when select a category */}
                <Block
                category={category}
                setCategory={setCategory}
                />
            </div>
            {/* warning sigh with msg */}
            {minLengthError?(<><img src={warning} alt={"warning"}  className={style.warning_msg}/><span style={{color:"red"}}>Minimum 3 category required</span></>):<></>}

        </div>
        <div className={style.right_body}>
           <div>
           <div className={style.cardbox}>
                {/* movie card section */}
                {ImageArray.map((data)=>(
                    <CardBlocks 
                        data={data}
                        category={category}
                        setCategory={setCategory}
                    />
                ))}
            </div>
           </div>
            
            <button className={style.nextPage_btn}
             onClick={nextPageHandle}>Next Page</button>
        </div>
    </div>
  );
};
const CardBlocks=({data,category,setCategory})=>{
    
    const [select,setSelect]=useState();
    
    const handleClick=(e)=>{
        if(category.includes(data.title)){
            const index=category.indexOf(data.title);
            category.splice(index,1);
            setCategory([...category]);
        }else{
            setCategory([...category,data.title])      
        }
    }
    useEffect(() => {
        // Check if the current CardBlock (data.title) is included in the categories array.
        setSelect(category.includes(data.title) === true);
      });
    return(
        
            <div 
            data={data}
            key={data.id}
            onClick={(e)=>handleClick(e)}
            style={{width:"200px",height:"200px",
                    margin:"0 0 0 0",
                    background:data["color"],borderRadius:"13px",zIndex:"1",
                    cursor:"pointer",
                    // marginLeft:"4vh",
                    border: `${select? "4px solid green" : "4px solid white"}`
                }}
            >
                <h2 style={{height:"29px", margin:"20px"}}>{data.title}</h2>
                <img src={data.img} alt={data.title} style={{ width: "160px", height: "120px",margin:"0 0 0 10px"}}/>
            </div>
        
    )
}
export default Card