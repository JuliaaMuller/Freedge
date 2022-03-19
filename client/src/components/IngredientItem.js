import React, { useState } from 'react';
import Counter from './Counter';

export default function IngredientItem({ name, image }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prev => prev + 1)
  }

  function decrement() {
    setCount(prev => prev - 1)
  }
  return (
    <div>
      <Counter onClick={increment} type={"+"}/>{count} <Counter onClick={decrement} type="-"/>
      <h3>{name}</h3>
      <img src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`}/>
    </div>
  )
}
