import React from 'react'

function Block({category,setCategory}) {
    const removeCategoryHandle=(select_cat)=>{
      const index = category.indexOf(select_cat);
      category.splice(index, 1);
      setCategory([...category]);
      
    }
  return (
    <div
    style={{height:"200px",
    width:"450px",
    }}
    >
        {category.map((select_cat)=>(

          <button
          style={{
            background:"green",
            height:"40px",
            width:"150px",
            borderRadius:"22px",
            margin:"10px",
            color:"white",
            }}
            
            onClick={()=>removeCategoryHandle(select_cat)}
          >
            {select_cat}{" "}
            <span style={{color:"#085C00",
                          marginLeft:"5px",
                          }}>X</span>
          </button>
        ))}

    </div>
  )
}      
export default Block
          
       
          