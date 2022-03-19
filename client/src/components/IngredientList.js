import React from 'react'
import IngredientItem from './IngredientItem'

export default function IngredientList({ items }) {
 
  const ingredients = items.map((item) => <IngredientItem key={item.id} id={item.id} name={item.name} image={item.image}/>)
  return (
    <ul>
      {ingredients} 
    </ul>
  )
}
