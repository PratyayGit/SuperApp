import React, { useEffect, useState } from 'react'
import RegistrationImage from '../assets/image 13.png'
import style from '../style/Registration.module.css'

function Registration() {
  let [formData,setformData]=useState({
    name:'',
    email:'',
    username:'',
    mobile:''
  });

  let [formError,setformError]=useState({});

  let [ischaked, setisCheaked]=useState(false);

  const chengeHandler=(e)=>{
    const {name,value}=e.target;
    setformData({
      ...formData,
      [name]:value
    });
    setisCheaked(!ischaked);
  }
  const cheakValidForm=(data)=>{
    const errors={};
    for(const key in data){
      if(!data[key]){
        errors[key]='This data is required';
      }
    }
    if(!ischaked){
      errors.tnc='You need to accept term & condition';
    }
    return errors;
  }
  // useEffect(()=>{
  //       setformError(validForm(setformData,ischaked));
  // },[errors]);
  const submitHandler=(e)=>{
    e.preventDefault();
    const validForm=cheakValidForm(formData);
    setformError(validForm);

    if(Object.keys(validForm).length===0){
      console.log("Form Submitted")
      localStorage.setItem('formData',JSON.stringify(formData));
    }
  }

  return (
    <form onSubmit={submitHandler}>
        <div className={style.Registration}>
        <div className={style.r}>
            <img src={RegistrationImage} alt='registrationimg' className={style.Registration_img}/>
        </div>
        <div className={style.inputField}>
            <h1 className={style.logo}>Super app</h1>
            <h6 className={style.logo_text}>Create your new account</h6>
            <input placeholder='Name' type='text' name='name' value={formData.name} onChange={chengeHandler} className='inputes inputes1'/>
            <span className={style.error_msg}>{formError.name}</span>
            <input placeholder='Email' type='email' name='email' value={formData.email} onChange={chengeHandler} className='inputes'/>
            <span className={style.error_msg}>{formError.email}</span>
            <input placeholder='Username' type='text' name='username' value={formData.username} onChange={chengeHandler} className='inputes'/>
            <span className={style.error_msg}>{formError.username}</span>
            <input placeholder='Mobile' type='number' name='mobile' value={formData.mobile} onChange={chengeHandler} className='inputes'/>
            <span className={style.error_msg}>{formError.mobile}</span>
            <div className='cheak_box'>
              <input type='checkbox' name='tnc' checked={ischaked}  onChange={chengeHandler}/>
              <h1 className='cheakbox_text'>Share my registration data with Superapp</h1>
              
            </div>
            <span className={style.error_msg}>{formError.tnc}</span>
            <button className='signup_button' type='submit'>SIGN UP</button>
            <p>By clicking on Sign up. you agree to Superapp <span className='highlight'>Terms and<br/>Conditions of Use</span></p>
            <p className='tandc'>To learn more about how Superapp collects, uses, shares and<br/>protects your personal data please head Superapp <span className='highlight'>Privacy<br/>Policy</span></p>
        </div>
            
        </div>
    </form>
  )
}

export default Registration