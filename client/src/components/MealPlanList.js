import React, { useState, useContext } from 'react';
import { mealContext } from '../providers/MealProvider';
import RecipeList from './RecipeList';

export default function MealPlanList({ selected }) {
  const { state } = useContext(mealContext);
  console.log(state);

  return (
    <div>
      {selected === "Mon" && <RecipeList recipes={state[selected].recipes}/>}
      {selected === "Tue" && <RecipeList recipes={state[selected].recipes}/>}
      {selected === "Wed" && <RecipeList recipes={state[selected].recipes}/>}
      {selected === "Thu" && <RecipeList recipes={state[selected].recipes}/>}
      {selected === "Fri" && <RecipeList recipes={state[selected].recipes}/>}
      {selected === "Sat" && <RecipeList recipes={state[selected].recipes}/>}
      {selected === "Sun" && <RecipeList recipes={state[selected].recipes}/>}
    </div>
  )
}
