import React, { useState, useContext } from 'react';
import { mealContext } from '../providers/MealProvider';
import NavMenu from './NavMenu';
import './MealPlanner.scss';
import { ButtonGroup, ToggleButton, InputGroup, Button, FormControl } from 'react-bootstrap';
import MealPlanList from './MealPlanList';

function MealPlanner(props) {
  const [dayValue, setdayValue] = useState('1');
  const [selected, setSelected] = useState("Mon");
  const { state, setState, getRecipesForDay } = useContext(mealContext);
  
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
      const recipes = getRecipesForDay();
      let dayObject = {};
      dayObject[`${day}`] = {name: day, recipes: recipes};
      console.log(day);

      setState(prev => ({...prev, ...dayObject}))
    }
    setSelected(day);
  }
  
  return (
<><NavMenu /> 
<main>
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