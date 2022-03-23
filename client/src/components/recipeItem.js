import axios from 'axios';
import React, { useState, useEffect } from 'react';
import RecipeInfo from './RecipeInfo';


export default function RecipeItem({ id, title, image, usedIngredients, missedIngredients }) {

  const [instructions, setInstructions] = useState([]);
  
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${process.env.REACT_APP_API_KEY}`)
    .then((res) => {
      
      setInstructions(res.data[0].steps)
    })
  }, []);


  return (
    <div>
      <h1>{title}</h1>
      <img src={`${image}`}/>
      <h3 style={{color: "red"}}>Missing: {missedIngredients.length}</h3>
      <img src='images/plus.png' /> Add to Shopping List
      <h3 style={{color:"green"}}>Used: {usedIngredients.length}</h3>
      <RecipeInfo instructions={instructions}/>
    </div>
  )
}
