import React, { useState, useContext } from 'react';
import { mealContext } from '../providers/MealProvider';
import './MealPlanner.scss';
import { ButtonGroup, ToggleButton, InputGroup, Button, FormControl } from 'react-bootstrap';
import MealPlanList from './MealPlanList';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';

function MealPlanner(props) {
  const [dayValue, setdayValue] = useState('1');
  const [selected, setSelected] = useState("");
  const { state, setState, getRecipesForDay } = useContext(mealContext);
  const { userLog } = useContext(UserContext)

  const days = [
    { name: 'Mon', value: '1' },
    { name: 'Tue', value: '2' },
    { name: 'Wed', value: '3' },
    { name: 'Thu', value: '4' },
    { name: 'Fri', value: '5' },
    { name: 'Sat', value: '6' },
    { name: 'Sun', value: '7' },
  ];
  
  function generateRecipes(day) {
    if(!state[day]) {
      getRecipesForDay().then((data) => {
        let dayObject = {};
        dayObject[`${day}`] = {name: day, recipes: data};
  
        setState(prev => ({...prev, ...dayObject}))
        setSelected(day);
        
      })
    } else {
      setSelected(day);
    }
  }
  
  return (
<>
<main>
{/* {!userLog && <Navigate to='/welcome'/>} */}
  <h2>My meal planner </h2>
  <div className='my-meal-planner'>
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
            onClick={(e) => generateRecipes(day.name)}
          >
            {day.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
    <MealPlanList selected={selected}/>
</main>

</>
  )
}

export default MealPlanner;