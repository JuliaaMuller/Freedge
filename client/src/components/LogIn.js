import React, { useContext, useState } from 'react';
import LogInForm from './LogInForm';
import './LogIn.scss';



function LogIn () {
  return (
<>
<main>
 <div className='login-form'>
 <LogInForm/>
 </div>
</main>
</>
  )
}

export default LogIn;