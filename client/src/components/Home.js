import React, { useState, useContext } from 'react';
import './Home.scss';
import { GrAddCircle } from 'react-icons/gr';
import { ButtonGroup, ToggleButton, InputGroup, Button, FormControl } from 'react-bootstrap';
import { MdAddShoppingCart } from 'react-icons/md';
import { FcSearch } from 'react-icons/fc';
// import Footer from './footer';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';
import Explore from './Explore';


function Home (props) {
  const { userLog } = useContext(UserContext)
  const isAuth = window.localStorage.getItem("user_id");
  const [term, setTerm] = useState("");
  const [status, setStatus] = useState(false);


   
  return (
    <>
  <main>
  {!isAuth && <Navigate to='/welcome'/>}
    <img className='brand-logo' src='images/brand-logo.png' alt=''/>
    <div className='menu-1'>
    <div className='my-ingredients'>
         What's in your fridge ? 
         <br/>
         <br/>
    <Button variant="btn btn-outline-secondary" type="submit" id='go-to-ingredients' href='/ingredients'> 
      <GrAddCircle/>
    </Button>
    </div>
    <div className='my-meal-planner-box'>
         Your meals for the days
         <br/>
         <br/>
    <Button variant="btn btn-outline-secondary" type="submit" id='go-to-meal-planner' href='/mealplanner'>
      Today's meals
    </Button>
    </div>
    </div>
    <div className='menu-2'>
    <div className='my-shopping-list'>
         We can help you with your groceries : 
         <br/>
         <br/>
    <Button variant="btn btn-outline-secondary" type="submit" id='shopping-cart' href='/shoppinglist'> 
      Place an order <MdAddShoppingCart/>
    </Button>
    </div>
    <div className='explore-recipes'>
         Explore for more recipes : 
         What are you looking for ? 
         <br/>
         <br/>
  <InputGroup className="mb-3" id='explore-bar'>
    <FormControl
      placeholder="Enter a key word"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
    />
    <Button variant="outline-secondary" id="button-addon2" onClick={() => setStatus(true)}>
      <FcSearch/>
    </Button>
    {status && <Navigate to="/explore" state={term}/>}
  </InputGroup>
    </div>
    </div>
  </main>

      
      
      </>
  )
}



export default Home;