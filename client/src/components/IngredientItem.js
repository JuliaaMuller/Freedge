import React from 'react'

export default function IngredientItem({ item }) {
  return (
    <div>
      <h3>Name: {item.name}</h3>
      <img src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}/>
    </div>
  )
}
