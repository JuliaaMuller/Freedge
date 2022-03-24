import React, { useState, useContext } from 'react';
import { Form,  Button } from 'react-bootstrap';
import './Welcome.scss';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';

function Welcome () {
  const { userLog } = useContext(UserContext)

  return (
<> 
{userLog && <Navigate to='/'/>}
<div className='welcome'>

<img className='logo'  src='images/brand-logo.png'/>

  <div className='welcome-button'>
  <Button variant="btn btn-outline-secondary" type="submit" href='/register'>
        Register
  </Button>

  <Button variant="btn btn-outline-secondary" type="submit" href='/login'>
        Login
  </Button>
  </div>
</div>
</>
  )
}

export default Welcome;