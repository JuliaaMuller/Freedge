import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormControl, FormCheck, Button } from 'react-bootstrap';
import { RiLockPasswordLine, RiTextDirectionL } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData:{
        email: '',
        password:'',
      },
      auth: false,
      alert:false
    };

    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      formData:{...this.state.formData,[name]: value}
    });
    
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted');
    console.log(this.state);
    axios.post('/login', this.state.formData)
    .then(res => {
      if(res.status === 403){
        console.log(this.state.alert)
        this.setState({alert: true})
      }
      if(res.status === 200){
      this.setState({auth: true})
     }
      
  })
    .catch(err => console.warn(err));
  }

  
  render() {
  return (
  <>
  <Form onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><MdAlternateEmail/> Email address</Form.Label>
    <Form.Control type="email" name="email" value={this.state.formData.email} onChange={ this.handleChange } placeholder="Enter email" />
    <Form.Text className="text-muted">
      {/* We'll never share your email with anyone else. */}
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><RiLockPasswordLine/> Password</Form.Label>
    <Form.Control type="password" name = "password" value={this.state.formData.password} onChange={ this.handleChange } placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember my info" />
  </Form.Group>
  <Button variant="btn btn-outline-secondary"  type="submit" >
    Login
  </Button>
    {this.state.alert && <span>Error: Password or email incorrect!</span>}
    {this.state.auth && <Navigate to = "/"/>}
  </Form>
  </>
  )
  }
}

export default LogInForm;