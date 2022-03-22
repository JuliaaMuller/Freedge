import React, { useState } from 'react';
import NavMenu from './NavMenu';
import LogInForm from './LogInForm';

function LogIn (props) {
  return (
<><NavMenu /> 
<main>
  <h2>Log in </h2>
 <LogInForm />
</main>
</>
  )
}

export default LogIn;