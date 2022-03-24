import React, { useContext, useState } from 'react';
import LogInForm from './LogInForm';
import './LogIn.scss';
import Cookies from "js-cookie";


function LogIn () {

  const myCookie = Cookies.get('session')

  console.log('mycookie = ',myCookie)
  return (
<>
<main>
 <div className='login-form-container'>
 <LogInForm/>
 </div>
</main>
</>
  )
}

export default LogIn;