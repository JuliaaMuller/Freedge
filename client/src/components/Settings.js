import React, { useState, useContext, useEffect } from 'react';
import NavMenu from './NavMenu';
import './Settings.scss'
import { Form, FormGroup, FormControl, FormCheck, Button } from 'react-bootstrap';
import { MdAlternateEmail } from 'react-icons/md';
import { BiUserCircle, BiPhone } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsHouseDoor } from 'react-icons/bs';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';
import axios from 'axios';

function Settings (props) {
  const { userLog } = useContext(UserContext)
  const [input, setInput] = useState(false)
  const [userInfos, setUserInfos] = useState({
    email: '',
    first_name: '',
    last_name: '',
    address: '',
    city: '',
    phone_number: '',

  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserInfos(prev => ({
      ...prev,
      [name]:value
    }))  
  }

  useEffect(() => {
    axios.get('/settings')
    .then(({data}) => {
      // console.log(data)
      setUserInfos(data)
    })
    .catch((err)=> console.log(err))
    }, [])

const handleSubmit= (e) => {
  e.preventDefault();
  setInput(false);
  const {email, password, address, first_name, last_name, city, phone_number } = userInfos
  if (!email || !password || !address || !first_name || !last_name || !city || !phone_number){
    setInput(true)
    return
  }
    axios.post('settings/update', userInfos)
    .then(res => {  
      if (res.status === 200) {
      // console.log(res.data.name)

      }else if (res.status === 409) {
      // setAlert(true)
      }
    })
    .catch(err => console.warn(err));
  }


  return (
<>
<main>
<div className="settings-form-container">
{/* {!userLog && <Navigate to='/welcome'/>} */}
  <h2>Settings</h2>
  <p> Do you need to update some informations ? </p>

  <Form onSubmit={handleSubmit} className='settings-form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><MdAlternateEmail/> Email address</Form.Label>
    <Form.Control type="email" name="email" onChange= {handleChange} placeholder={userInfos.email} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><RiLockPasswordLine/> Password</Form.Label>
    <Form.Control type="password" name="password" onChange= {handleChange} placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicFirstName">
    <Form.Label><BiUserCircle/> First Name</Form.Label>
    <Form.Control type="firstName" name="first_name" onChange= {handleChange} placeholder={userInfos.first_name} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicLastName">
    <Form.Label><BiUserCircle/> Last Name</Form.Label>
    <Form.Control type="lastName" name="last_name" onChange= {handleChange} placeholder={userInfos.last_name} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Label><BsHouseDoor/> Your address</Form.Label>
    <Form.Control type="address" name="address" onChange= {handleChange} placeholder={userInfos.address} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Label><BsHouseDoor/> City</Form.Label>
    <Form.Control type="address" name="city" onChange= {handleChange} placeholder={userInfos.city} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
    <Form.Label><BiPhone/> Your phone number</Form.Label>
    <Form.Control type="phoneNumber" name="phone_number" onChange= {handleChange} placeholder={userInfos.phone_number} />
  </Form.Group>
<div className='button-box'>
  <Button id='back-button' href="/" variant="btn btn-outline-secondary" type="submit">
      Back
    </Button>
    <Button id='save-button' variant="btn btn-outline-secondary" type="submit">
      Save
    </Button>
    </div>
    {input && <span className='error-span'>Error: Please fill all the forms!</span>}
  </Form>
  </div>
</main>
</>
  )
}

export default Settings;