import React, { useState, useContext } from 'react';
import { mealContext } from '../providers/MealProvider';

export default function MealPlanList({ selected }) {
  const { state } = useContext(mealContext);
  console.log(state);

  return (
    <div>
      {selected === "Mon" && <div>Monday</div>}
      {selected === "Tue" && <div>Tues</div>}
      {selected === "Wed" && <div>Wed</div>}
      {selected === "Thu" && <div>Thursday</div>}
      {selected === "Fri" && <div>Friday</div>}
      {selected === "Sat" && <div>Saurday</div>}
      {selected === "Sun" && <div>Sunday</div>}
    </div>
  )
}
