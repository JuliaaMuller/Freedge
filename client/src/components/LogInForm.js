import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormControl, FormCheck, Button } from 'react-bootstrap';
import { RiLockPasswordLine, RiTextDirectionL } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { LoginContext } from '../loginContext';



const LogInForm = () => {

  return (
    <>
    <div>
      <LoginContext.Consumer>
        {(value) => {
          return (
      
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><MdAlternateEmail /> Email address</Form.Label>
              <Form.Control type="email" name="email" value ={value.email} onChange={value.loginHandleChange} placeholder="Enter email" />
              <Form.Text className="text-muted">
                {/* We'll never share your email with anyone else. */}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><RiLockPasswordLine /> Password</Form.Label>
              <Form.Control type="password" name="password" value ={value.password} onChange={value.loginHandleChange} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember my info" />
            </Form.Group>
            <Button variant="btn btn-outline-secondary" type="submit" onClick={value.loginHandleSubmit} >
              Login
            </Button>
            {value.alert && <span>Error: Password or email incorrect!</span>}
            {value.input && <span>Error: Password and email cannot be blank!</span>}
            {value.auth && <Navigate to="/" />}
          </Form>
          )
        }
      }  
      </LoginContext.Consumer>
      </div>
    </>
  )
}


export default LogInForm;