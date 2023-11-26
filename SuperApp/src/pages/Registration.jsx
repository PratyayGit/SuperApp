import React from 'react'
import RegistrationImage from '../assets/image 13.png'

function Registration() {
  return (
    // <img src={RegistrationImage} alt='regimg'/>
    <form>
        <input type='text' placeholder='Name' name='name'/>
        <input type='text' placeholder='Username' name='username'/>
        <input type='email' placeholder='Email' name='email'/>
        <input type='number' placeholder='Phone Number' name='phonenumber'/>
    </form>
  )
}

export default Registration