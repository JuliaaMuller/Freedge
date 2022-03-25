import React, { useState, useContext } from 'react';
import { Form, FormGroup, FormControl, FormCheck, Button, InputGroup } from 'react-bootstrap';
import { MdAlternateEmail } from 'react-icons/md';
import { BiUserCircle, BiPhone, BiBuildingHouse } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsHouseDoor } from 'react-icons/bs';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterForm.scss';
import { UserContext } from '../userContext';



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
  const { setIsLoggedIn, setUserId, setUserLog} = useContext(UserContext)


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
        console.log(res.data.name)
        // setUserLog()
        setIsLoggedIn(true)
        setUserLog(res.data.name)
        setUserId(res.data.id)
        setAuth(true);  
  
        }else if (res.status === 409) {
        setAlert(true)
        }
      })
      .catch(err => console.warn(err));
    }

  return (
<>
<div className='register-form'>
  <h3 id="register-form-title"> Welcome to Freedge</h3>
  <p id="register-form-info"> Give us some informations about you :</p>
  
  <Form onSubmit ={handleSubmit}>
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
  <InputGroup size="sm" className="mb-3" >
    <InputGroup.Text id="inputGroup-sizing-sm"><BiUserCircle/></InputGroup.Text>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name ="first_name"  onChange={ handleChange } type="input" placeholder="First Name" />
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3" >
    <InputGroup.Text id="inputGroup-sizing-sm"><BiUserCircle/></InputGroup.Text>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name ="last_name"  onChange={ handleChange } type="input" placeholder="Last Name" />
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3" >
    <InputGroup.Text id="inputGroup-sizing-sm"><BsHouseDoor/></InputGroup.Text>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name ="address"  onChange={ handleChange } type="input" placeholder="Adress" />
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3" >
    <InputGroup.Text id="inputGroup-sizing-sm"><BiBuildingHouse/></InputGroup.Text>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name ="city"  onChange={ handleChange } type="input" placeholder="City" />
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3" >
    <InputGroup.Text id="inputGroup-sizing-sm"><BiPhone/></InputGroup.Text>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name ="phone_number"  onChange={ handleChange } type="input" placeholder="Phone Number" />
  </InputGroup>
  <br />
    <Button id='register-button' variant="btn btn-outline-secondary" type="submit" >
      Register
    </Button>
    <br />
    {alert && <span className='error-span'>Error: this user already exists!</span>}
    {input && <span className='error-span'>Error: Please fill all the forms!</span>}
    {auth && <Navigate to = "/"/>}
  </Form>
  </div>
  </>
        )
      }
   

  


export default RegisterForm;