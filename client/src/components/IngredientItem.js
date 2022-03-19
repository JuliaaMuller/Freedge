import React from 'react'

export default function IngredientItem({ name, image }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`}/>
    </div>
  )
}
