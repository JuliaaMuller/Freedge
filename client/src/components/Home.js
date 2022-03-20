import React, { useState } from 'react';
import NavMenu from './NavMenu';
import './Home.scss';
import { GrAddCircle } from 'react-icons/gr';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

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
    <h4>
        Welcome to Freedge - We will help you free your fridge.
    </h4>
    <div className='my-ingredients'>
         What's in your fridge ? 
         <br/>
         <GrAddCircle  className='go-to-ingredients' onClick={props.onClick}/>
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
  </main>
      
      
      </>
  )
}



export default Home;