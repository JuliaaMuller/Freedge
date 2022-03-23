import React from 'react'

export default function RecipeItem({ id, title, image, usedIngredients, missedIngredients }) {
  
  return (
    <div>
      <h1>{title}</h1>
      <img src={`${image}`}/>
      <h3 style={{color: "red"}}>Missing: {missedIngredients.length}</h3>
      <h3 style={{color:"green"}}>Used: {usedIngredients.length}</h3>
    </div>
  )
}
