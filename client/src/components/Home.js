import React, { useState, useContext } from 'react';
import './Home.scss';
import { GrAddCircle } from 'react-icons/gr';
import { ButtonGroup, ToggleButton, InputGroup, Button, FormControl } from 'react-bootstrap';
import { MdAddShoppingCart } from 'react-icons/md';
import { FcSearch } from 'react-icons/fc';
// import Footer from './footer';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';


function Home (props) {
  const { userLog } = useContext(UserContext)

    const [dayValue, setdayValue] = useState('1');
  
    const days = [
      { name: 'Mon', value: '1' },
      { name: 'Tue', value: '2' },
      { name: 'Wed', value: '3' },
      { name: 'Thu', value: '4' },
      { name: 'Fri', value: '5' },
      { name: 'Sat', value: '6' },
      { name: 'Sun', value: '7' },
    ];
  return (
    <>
  <main>
  {!userLog && <Navigate to='/welcome'/>}
    <img className='brand-logo' src='images/brand-logo.png' alt=''/>
    <div className='my-ingredients'>
         What's in your fridge ? 
         <br/>
    <Button variant="btn btn-outline-secondary" type="submit" className='go-to-ingredients' href='/ingredients'> 
      <GrAddCircle/>
    </Button>
    </div>
    <div className='my-meal-planner'>
         Your meals for the days
         <br/>
         // if it's a new account or you don't have any ingredients -- message "You don't have a meal plan yet because you need to add ingredient first"
         <br/>
    <Button variant="btn btn-outline-secondary" type="submit" className='go-to-meal-planner' href='/mealplanner'>
      Today's meals
    </Button>
    </div>
    <div className='my-shopping-list'>
         We can help you with your groceries : <br/>
    <Button variant="btn btn-outline-secondary" type="submit" className='shopping-cart' href='/shoppinglist'> 
      Place an order <MdAddShoppingCart/>
    </Button>
    </div>
    <div className='explore-recipes'>
         Explore for more recipes : 
         What are you looking for ? 
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Enter a key word"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2" href='/explore'>
      <FcSearch/>
    </Button>
  </InputGroup>
    </div>
  </main>

      
      
      </>
  )
}



export default Home;