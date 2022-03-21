import React from 'react'
import IngredientItem from './IngredientItem'

export default function IngredientList({ items, handleCategory }) {
 
  const ingredients = items.map((item) => <IngredientItem key={item.id} id={item.id} name={item.name} handleCategory={handleCategory}/>)
  return (
    <ul>
      {ingredients} 
    </ul>
  )
}
