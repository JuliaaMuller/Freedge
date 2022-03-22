import React, { useState, useContext } from 'react';
import { Form, FormGroup, FormControl, FormCheck, Button } from 'react-bootstrap';
import { MdAlternateEmail } from 'react-icons/md';
import { BiUserCircle, BiPhone, BiBuildingHouse } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsHouseDoor } from 'react-icons/bs';
import { Navigate } from 'react-router-dom';
import {UserContext} from '../registerContext'


const RegisterForm = () => {
  
  return (
<>
<div>
<UserContext.Consumer>
        {(value) => {
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><MdAlternateEmail/> Email address</Form.Label>
    <Form.Control name ="email" value={value.user.email} onChange={ value.handleChange } type="input" placeholder="Enter Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><RiLockPasswordLine/> Password</Form.Label>
    <Form.Control name ="password" value={value.user.password} onChange={ value.handleChange } type="input" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicFirstName">
    <Form.Label><BiUserCircle/> First Name</Form.Label>
    <Form.Control name ="first_name" value={value.user.first_name} onChange={ value.handleChange } type="input" placeholder="First Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicLastName">
    <Form.Label><BiUserCircle/> Last Name</Form.Label>
    <Form.Control name ="last_name" value={value.user.last_name} onChange={ value.handleChange } type="input" placeholder="Last Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Label><BsHouseDoor/> Your address</Form.Label>
    <Form.Control name ="address" value={value.user.address} onChange={ value.handleChange } type="input" placeholder="Adress" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCity">
    <Form.Label><BiBuildingHouse/> City</Form.Label>
    <Form.Control name ="city" value={value.user.city} onChange={ value.handleChange } type="input" placeholder="City" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
    <Form.Label><BiPhone/> Your phone number</Form.Label>
    <Form.Control name ="phone_number"  value={value.user.phone_number} onChange={ value.handleChange } type="input" placeholder="Phone Number" />
  </Form.Group>

    <Button variant="btn btn-outline-secondary" type="submit" onClick={value.handleSubmit}>
      Save
    </Button>
    {value.alert && <span>Error: this user already exists!</span>}
    {value.auth && <Navigate to = "/"/>}
  </Form>
        }
      }
  </UserContext.Consumer>
  </div>
</>
  )
}

export default RegisterForm;