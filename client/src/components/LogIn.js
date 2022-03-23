import React, { useContext, useState } from 'react';
import LogInForm from './LogInForm';
import { LoginProvider } from '../loginContext'


function LogIn () {
  return (
<>
<main>
  <h2>Log in </h2>
 <LoginProvider>
 <LogInForm/>
 </LoginProvider>
</main>
</>
  )
}

export default LogIn;