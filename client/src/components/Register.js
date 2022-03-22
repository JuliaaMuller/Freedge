import React, { useState } from 'react';
import NavMenu from './NavMenu';
import { Form, FormGroup, FormControl, FormCheck, Button } from 'react-bootstrap';
import { MdAlternateEmail } from 'react-icons/md';
import { BiUserCircle, BiPhone, BiBuildingHouse } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsHouseDoor } from 'react-icons/bs';
import RegisterForm from './RegisterForm';


function Register (props) {

  return (
<><NavMenu /> 
<main>
  <h2>Register page </h2>
  <p> Welcome to Freedge - Give us some informations about you : </p>
<RegisterForm />
</main>
</>
  )
}

export default Register;