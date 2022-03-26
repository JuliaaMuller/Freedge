import React, { useState, useContext, useEffect } from 'react';
import NavMenu from './NavMenu';
import './Settings.scss'
import { Form, FormGroup, FormControl, FormCheck, Button, InputGroup } from 'react-bootstrap';
import { MdAlternateEmail } from 'react-icons/md';
import { BiUserCircle, BiPhone, BiBuildingHouse } from 'react-icons/bi';
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
{!userLog && <Navigate to='/welcome'/>}
  <h2 id='setting'>Settings</h2>
  <p id='setting-info'> Do you need to update some informations ? </p>

  <Form onSubmit={handleSubmit} className='settings-form'>
  <InputGroup size="sm" className="mb-3" >
    <InputGroup.Text id="inputGroup-sizing-sm"><MdAlternateEmail/></InputGroup.Text>
    <Form.Control type="email" name="email" onChange= {handleChange} placeholder={userInfos.email} />
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3" >
    <InputGroup.Text id="inputGroup-sizing-sm"><RiLockPasswordLine/></InputGroup.Text>
    <Form.Control type="password" name="password" onChange= {handleChange} placeholder="Password" />
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3" >
    <InputGroup.Text id="inputGroup-sizing-sm"><BiUserCircle/></InputGroup.Text>
    <Form.Control type="firstName" name="first_name" onChange= {handleChange} placeholder={userInfos.first_name}/>
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3" >
    <InputGroup.Text id="inputGroup-sizing-sm"><BiUserCircle/></InputGroup.Text>
    <Form.Control type="lastName" name="last_name" onChange= {handleChange} placeholder={userInfos.last_name}/>
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3" >
    <InputGroup.Text id="inputGroup-sizing-sm"><BsHouseDoor/></InputGroup.Text>
    <Form.Control type="address" name="address" onChange= {handleChange} placeholder={userInfos.address}/>
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3" >
    <InputGroup.Text id="inputGroup-sizing-sm"><BiBuildingHouse/></InputGroup.Text>
    <Form.Control type="address" name="city" onChange= {handleChange} placeholder={userInfos.city}/>
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3" >
    <InputGroup.Text id="inputGroup-sizing-sm"><BiPhone/></InputGroup.Text>
    <Form.Control type="phoneNumber" name="phone_number" onChange= {handleChange} placeholder={userInfos.phone_number}/>
  </InputGroup>
  <br />
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