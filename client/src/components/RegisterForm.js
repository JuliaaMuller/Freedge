import React, { useState, useContext } from 'react';
import { Form, FormGroup, FormControl, FormCheck, Button } from 'react-bootstrap';
import { MdAlternateEmail } from 'react-icons/md';
import { BiUserCircle, BiPhone, BiBuildingHouse } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsHouseDoor } from 'react-icons/bs';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterForm.scss';



const RegisterForm = () => {
  const [user, setUser] = useState({
    email: '',
    password:'',
    first_name:'',
    last_name:'',
    address:'',
    city:'',
    phone_number:'',
  })
  const [alert, setAlert] = useState(false)
  const [auth, setAuth ] = useState(false)
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
    const {email, password, address, first_name, last_name, city, phone_number } = user
    if (!email || !password || !address || !first_name || !last_name || !city || !phone_number){
      setInput(true)
      return
    }
      axios.post('/register', user)
      .then(res => {  
        if (res.status === 200) {
        setAuth(true)
        }else if (res.status === 409) {
        setAlert(true)
        }
      })
      .catch(err => console.warn(err));
    }

  return (
<>
<div className='register-form'>
  <p> Welcome to Freedge</p>
  <p>Give us some informations about you :</p>
  <Form onSubmit ={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><MdAlternateEmail/> Email address</Form.Label>
    <Form.Control name ="email"  onChange={ handleChange } type="input" placeholder="Enter Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><RiLockPasswordLine/> Password</Form.Label>
    <Form.Control name ="password"  onChange={ handleChange } type="input" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicFirstName">
    <Form.Label><BiUserCircle/> First Name</Form.Label>
    <Form.Control name ="first_name"  onChange={ handleChange } type="input" placeholder="First Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicLastName">
    <Form.Label><BiUserCircle/> Last Name</Form.Label>
    <Form.Control name ="last_name"  onChange={ handleChange } type="input" placeholder="Last Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Label><BsHouseDoor/> Your address</Form.Label>
    <Form.Control name ="address"  onChange={ handleChange } type="input" placeholder="Adress" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCity">
    <Form.Label><BiBuildingHouse/> City</Form.Label>
    <Form.Control name ="city"  onChange={ handleChange } type="input" placeholder="City" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
    <Form.Label><BiPhone/> Your phone number</Form.Label>
    <Form.Control name ="phone_number"   onChange={ handleChange } type="input" placeholder="Phone Number" />
  </Form.Group>

    <Button variant="btn btn-outline-secondary" type="submit" >
      Save
    </Button>
    {alert && <span>Error: this user already exists!</span>}
    {input && <span>Error: Please fill all the forms!</span>}
    {auth && <Navigate to = "/"/>}
  </Form>
  </div>
  </>
        )
      }
   

  


export default RegisterForm;