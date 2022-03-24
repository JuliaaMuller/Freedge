import React, { useState, useContext } from 'react';
import NavMenu from './NavMenu';
import { Form, FormGroup, FormControl, FormCheck, Button } from 'react-bootstrap';
import { MdAlternateEmail } from 'react-icons/md';
import { BiUserCircle, BiPhone } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsHouseDoor } from 'react-icons/bs';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';

function Settings (props) {
  const { userLog } = useContext(UserContext)
  
  return (
<>
<main>
{!userLog && <Navigate to='/welcome'/>}
  <h2>Settings</h2>
  <p> Did you need to update some informations ? </p>

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

  <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
    <Form.Label><BiPhone/> Your phone number</Form.Label>
    <Form.Control type="phoneNumber" placeholder="Phone Number" />
  </Form.Group>

  <Button variant="btn btn-outline-secondary" type="submit">
      Edit
    </Button>

    <Button variant="btn btn-outline-secondary" type="submit">
      Save
    </Button>
  </Form>
</main>
</>
  )
}

export default Settings;