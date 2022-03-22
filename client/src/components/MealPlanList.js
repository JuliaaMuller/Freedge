import React, { useState, useContext } from 'react';
import { mealContext } from '../providers/MealProvider';

export default function MealPlanList() {
  const { state } = useContext(mealContext);
  console.log(state);
  
  return (
    <div>MealPlanList</div>
  )
}
