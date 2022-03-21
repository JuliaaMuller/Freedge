import React, { useState } from 'react';
import NavMenu from './NavMenu';
import { Form, FormGroup, FormControl, FormCheck, Button } from 'react-bootstrap';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';

function LogIn (props) {
  return (
<><NavMenu /> 
<main>
  <h2>Log in </h2>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><MdAlternateEmail/> Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      {/* We'll never share your email with anyone else. */}
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><RiLockPasswordLine/> Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember my info" />
  </Form.Group>
  <Button variant="btn btn-outline-secondary" type="submit">
    Login
  </Button>
</Form>
</main>
</>
  )
}

export default LogIn;