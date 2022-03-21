import React, { useState } from 'react';
import NavMenu from './NavMenu';
import './Home.scss';
import { GrAddCircle } from 'react-icons/gr';
import { ButtonGroup, ToggleButton, InputGroup, Button, FormControl } from 'react-bootstrap';
import { MdAddShoppingCart } from 'react-icons/md';
import { FcSearch } from 'react-icons/fc';
// import Footer from './footer';

function Home (props) {

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
    <><NavMenu />  
  <main>
    <img className='brand-logo' src='images/brand-logo.png' alt=''/>
    <div className='my-ingredients'>
         What's in your fridge ? 
         <br/>
    <Button variant="btn btn-outline-secondary" type="submit" className='go-to-ingredients'> 
      <GrAddCircle/>
    </Button>
    </div>
    <div className='my-meal-planner'>
         Your meal planner
         <br/>
         <ButtonGroup className='days-button'>
        {days.map((day, idx) => (
          <ToggleButton
            key={idx}
            id={`day-${idx}`}
            type='day'
            variant="outline-secondary"
            name='days'
            value={day.value}
            checked={dayValue === day.value}
            onChange={(e) => setdayValue(e.currentTarget.value)}
          >
            {day.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
    <div className='my-shopping-list'>
         We can help you with your groceries : <br/>
    <Button variant="btn btn-outline-secondary" type="submit" className='shopping-cart'> 
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
    <Button variant="outline-secondary" id="button-addon2">
      <FcSearch/>
    </Button>
  </InputGroup>
    </div>
  </main>

      
      
      </>
  )
}



export default Home;