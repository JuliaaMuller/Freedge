import React, { useState, useContext } from 'react';
import { Form,  Button } from 'react-bootstrap';
import './Welcome.scss';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';

function Welcome () {
  const { userLog } = useContext(UserContext)
  const isAuth = window.localStorage.getItem("user_id")
  return (
<> 
{isAuth && <Navigate to='/'/>}
<div className='welcome'>

<img className='logo'  src='images/brand-logo.png'/>

  <div id='welcome-button'>
  <Button id='register-b' variant="btn btn-outline-secondary" type="submit" href='/register'>
        Register
  </Button>

  <Button id='login-b' variant="btn btn-outline-secondary" type="submit" href='/login'>
        Login
  </Button>
  </div>
</div>
</>
  )
}

export default Welcome;