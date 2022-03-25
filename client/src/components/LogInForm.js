import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Form, FormControl, FormCheck, Button, InputGroup } from 'react-bootstrap';
import { RiLockPasswordLine, RiTextDirectionL } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';
import './LogInForm.scss';





const LogInForm = () => {
  const [user, setUser] = useState({
    email: '',
    password:'',
  })
  const [alert, setAlert] = useState(false)
  const [auth, setAuth] = useState(false)
  const [input, setInput] = useState(false)
  const { setIsLoggedIn, setUserLog, setUserId } = useContext(UserContext)

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
        // setUserLog()
        setIsLoggedIn(true)
        setUserLog(res.data.name)
        setUserId(res.data.id)
        setAuth(true);
        
      }
    })
    .catch(err => console.log(err))
  }
  
  return (
    <>
  <div className='login-form'>
    <Form onSubmit ={handleSubmit}>
    <h2 id='login-form-title'>Log in </h2>
      <InputGroup size="sm" className="mb-3" >
        <InputGroup.Text id="inputGroup-sizing-sm"><MdAlternateEmail/></InputGroup.Text>
        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name ="email"  onChange={ handleChange } type="input" placeholder="Enter Email" />
      </InputGroup>
      <br />
      <InputGroup size="sm" className="mb-3" >
        <InputGroup.Text id="inputGroup-sizing-sm"><RiLockPasswordLine/></InputGroup.Text>
        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name ="password"  onChange={ handleChange } type="password" placeholder="Password" />
      </InputGroup>
      <br />
      <Button id='login-button' variant="btn btn-outline-secondary" type="submit"  >
        Login
      </Button>
      <br />
      {alert && <span className='error-span'>Error: Password or email incorrect!</span>}
      {input && <span className='error-span'>Error: Password and email cannot be blank!</span>}
      {auth && <Navigate to="/" />}
    </Form>
  </div>
    </>
  )
}


export default LogInForm;