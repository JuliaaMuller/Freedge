import React, { useState } from 'react';
import NavMenu from './NavMenu';
import { Form, FormGroup, FormControl, FormCheck, Button } from 'react-bootstrap';


function Register (props) {
  return (
<><NavMenu /> 
<main>
  <h2>Register page </h2>
  <p> Welcome to Freedge - Give us some informations about you : </p>

  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicFirstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="firstName" placeholder="First Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicLastName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="lastName" placeholder="Last Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Label>Your address</Form.Label>
    <Form.Control type="address" placeholder="Adress" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
    <Form.Label>Your phone number</Form.Label>
    <Form.Control type="phoneNumber" placeholder="Phone Number" />
  </Form.Group>

    <Button variant="primary" type="submit">
      Edit
    </Button>

    <Button variant="primary" type="submit">
      Save
    </Button>
  </Form>
</main>
</>
  )
}

export default Register;