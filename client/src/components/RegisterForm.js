import React, { useState } from 'react';
import NavMenu from './NavMenu';
import { Form, FormGroup, FormControl, FormCheck, Button } from 'react-bootstrap';
import { MdAlternateEmail } from 'react-icons/md';
import { BiUserCircle, BiPhone, BiBuildingHouse } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsHouseDoor } from 'react-icons/bs';
import axios from 'axios';


class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
      first_name:'',
      last_name:'',
      address:'',
      city:'',
      phone_number:'',
    };

    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
    
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted');
    // console.log(JSON.parse(event.target));
    console.log(this.state);
    axios.post('/register', this.state).then(res => console.log(res)).catch(err => console.warn(err));
  }

  
  render() {
  return (
<>
  <Form onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><MdAlternateEmail/> Email address</Form.Label>
    <Form.Control name ="email" value={this.state.email} onChange={ this.handleChange } type="input" placeholder="Enter Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><RiLockPasswordLine/> Password</Form.Label>
    <Form.Control name ="password" value={this.state.password} onChange={ this.handleChange } type="input" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicFirstName">
    <Form.Label><BiUserCircle/> First Name</Form.Label>
    <Form.Control name ="first_name" value={this.state.first_name} onChange={ this.handleChange } type="input" placeholder="First Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicLastName">
    <Form.Label><BiUserCircle/> Last Name</Form.Label>
    <Form.Control name ="last_name" value={this.state.last_name} onChange={ this.handleChange } type="input" placeholder="Last Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Label><BsHouseDoor/> Your address</Form.Label>
    <Form.Control name ="address" value={this.state.address} onChange={ this.handleChange } type="input" placeholder="Adress" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCity">
    <Form.Label><BiBuildingHouse/> City</Form.Label>
    <Form.Control name ="city" value={this.state.city} onChange={ this.handleChange } type="input" placeholder="City" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
    <Form.Label><BiPhone/> Your phone number</Form.Label>
    <Form.Control name ="phone_number"  value={this.state.phone_number} onChange={ this.handleChange } type="input" placeholder="Phone Number" />
  </Form.Group>

    <Button variant="btn btn-outline-secondary" type="submit">
      Save
    </Button>
  </Form>
</>
  )
}
}
export default RegisterForm;