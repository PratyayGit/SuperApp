import React, { useState } from 'react'

import style from './Note.module.css'

const Note=()=> {
    const [noteText,setNoteText]=useState(
        JSON.parse(localStorage.getItem('notes'))
    );
    const changeHandler=(e)=>{
        setNoteText(e.target.value);
        localStorage.setItem('notes',JSON.stringify(noteText))
    }
  return (
    <div className={style.main_container}>
        <h1 className={style.heading}>All notes</h1>
        <textarea 
        className={style.writeing_section}
        value={noteText}
        onChange={(e)=>changeHandler(e)}
        />
    </div>
  )
}

export default Note