import React, { useEffect, useState } from 'react'

import style from './Form.module.css'
import signupImage from '../../assets/formimage.png'
import { useNavigate } from 'react-router-dom';
const Form=()=> {
  let [formData,setformData]=useState({
    name:'',
    username:'',
    email:'',
    mobile:''
  });
  let [isChaked,setIsChaked]=useState(false);
  let [formError,setFormError]=useState({});
  const navigate=useNavigate();

  const changeHandler=(e)=>{
      const {name,value}=e.target;
      setformData({
        ...formData,
        [name]:value
      });
      setIsChaked(!isChaked);
  }
  const cheakValidForm=(data)=>{
    const errors={};
    const rejex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    for (const key in data){
       if (!data[key]) {
        errors[key]='This data is required';
       }
       else if(key === 'email' &&!rejex.test(data.email)){
        errors[key]='This is not a valid email';
       }
       else if(key ==='mobile' && (data.mobile).length<10 )
       {
        errors[key]='Enter a valid phone number';
       }
    
    }
      if(!isChaked){
        errors.tnc='Check this box if you want to proceed';
      } 
    return errors;
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    const validForm =cheakValidForm(formData);
    setFormError(validForm);
    if (Object.keys(validForm).length===0) {
      localStorage.setItem('formData',JSON.stringify(formData));
      navigate('/category')

    }
  }
  
  return (
    <div className={style.main_section}>
      <div>
      <img src={signupImage} alt={'Image'} className={style.form_image}/>
      </div>
      <div className={style.right_side}>
        <h1 className={style.logo}>Super app</h1>
        <p className={style.form_heading}>Create your new account</p>
        <form className={style.input_form}>

          <input className={style.inputs_lable} type='text' placeholder='Name' name='name' value={formData.name} onChange={changeHandler}/>
          <span className={style.error_msg}>{formError.name}</span>
          <input className={style.inputs_lable} type='text' placeholder='Username' name='username' value={formData.username} onChange={changeHandler}/>
          <span className={style.error_msg}>{formError.username}</span>
          <input className={style.inputs_lable} type='email' placeholder='Email'name='email' value={formData.email} onChange={changeHandler}/>
          <span className={style.error_msg}>{formError.email}</span>
          <input className={style.inputs_lable} type='number' placeholder='Mobile' name='mobile' value={formData.mobile} onChange={changeHandler}/>
          <span className={style.error_msg}>{formError.mobile}</span>
          <div className={style.term_condition}>
              <input className={style.cheak_box} type='checkbox' checked={isChaked} name='tnc' onChange={changeHandler}/>
              <span className={style.cheakbox_label}>Share my registration data with Superapp</span>
          </div>
          <span className={style.error_msg}>{formError.tnc}</span>
          <button className={style.signup_btn} onClick={(e) => submitHandler(e)}>SIGN UP</button>
          <p className={style.tc}>By clicking on Sign up. you agree to Superapp <span className={style.highlight}>Terms and<br/>Conditions of Use</span></p>
          <p className={style.tc}>To learn more about how Superapp collects, uses, shares and<br/>protects your personal data please head Superapp <span className={style.highlight}>Privacy<br/>Policy</span></p>

        </form>
      </div>
    </div>

  )
    
}

export default Form