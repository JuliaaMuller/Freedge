import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormControl, FormCheck, Button } from 'react-bootstrap';
import { RiLockPasswordLine, RiTextDirectionL } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';




const LogInForm = () => {
  const [user, setUser] = useState({
    email: '',
    password:'',
  })
  const [alert, setAlert] = useState(false)
  const [auth, setAuth] = useState(false)
  const [input, setInput] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser(prev => ({
      ...prev,
      [name]:value
    }))
  }
  const handleSubmit= (e) => {
    e.preventDefault();
    setInput(false);
    const {email, password } = user
    if (!email || !password){
      setInput(true)
      return
    }
    axios.post('/login', user)
    .then((res) => {
      if(res.status === 403){
        setAlert(true)
      } else if(res.status === 200){
        
        console.log(res.data.name)
       
        setAuth(true);
        console.log(auth)
      }
    })
    .catch(err => console.log(err))
  }
  
  return (
    <>
  <div className='login-form'>
          <Form onSubmit={handleSubmit}>
          <h2>Log in </h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><MdAlternateEmail /> Email address</Form.Label>
              <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
              <Form.Text className="text-muted">
                {/* We'll never share your email with anyone else. */}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><RiLockPasswordLine /> Password</Form.Label>
              <Form.Control type="password" name="password"  onChange={handleChange} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember my info" />
            </Form.Group>
            <Button variant="btn btn-outline-secondary" type="submit"  >
              Login
            </Button>
            {alert && <span>Error: Password or email incorrect!</span>}
            {input && <span>Error: Password and email cannot be blank!</span>}
            {auth && <Navigate to="/" />}
          </Form>
  </div>
        
    

  
    </>
  )
}


export default LogInForm;