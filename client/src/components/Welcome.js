import React, { useState } from 'react';
import { Form,  Button } from 'react-bootstrap';
import './Welcome.scss';

function Welcome (props) {
  return (
<> 
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