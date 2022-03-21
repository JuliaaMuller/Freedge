import React, { useState } from 'react';
import NavMenu from './NavMenu';
import { Form, FormGroup, FormControl, FormCheck, Button } from 'react-bootstrap';
import { MdAlternateEmail } from 'react-icons/md';
import { BiUserCircle, BiPhone, BiBuildingHouse } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsHouseDoor } from 'react-icons/bs';


function Register (props) {
  return (
<><NavMenu /> 
<main>
  <h2>Register page </h2>
  <p> Welcome to Freedge - Give us some informations about you : </p>

  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><MdAlternateEmail/> Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><RiLockPasswordLine/> Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicFirstName">
    <Form.Label><BiUserCircle/> First Name</Form.Label>
    <Form.Control type="firstName" placeholder="First Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicLastName">
    <Form.Label><BiUserCircle/> Last Name</Form.Label>
    <Form.Control type="lastName" placeholder="Last Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Label><BsHouseDoor/> Your address</Form.Label>
    <Form.Control type="address" placeholder="Adress" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCity">
    <Form.Label><BiBuildingHouse/> City</Form.Label>
    <Form.Control type="city" placeholder="City" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
    <Form.Label><BiPhone/> Your phone number</Form.Label>
    <Form.Control type="phoneNumber" placeholder="Phone Number" />
  </Form.Group>

    <Button variant="btn btn-outline-secondary" type="submit">
      Save
    </Button>
  </Form>
</main>
</>
  )
}

export default Register;