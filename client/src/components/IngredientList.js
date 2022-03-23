import axios from 'axios';
import React, { useEffect, useState } from 'react'
import IngredientItem from './IngredientItem'

export default function IngredientList({ items, handleCategory }) {

  const [userIngredients, setUserIngredients] = useState({});
  console.log(userIngredients)
  let userItems = [];
  useEffect(() => {
    axios.get("/ingredients")
    .then(res => setUserIngredients(res.data));

  }, []);
  
  for (let key of Object.keys(userIngredients)) {
    userIngredients[key].map(item => userItems.push(<IngredientItem key={item.name} name={item.name} quantity={item.quantity}/>))
   
  }
  console.log(userItems)
  

  const ingredients = items.map((item) => <IngredientItem key={item.id} name={item.name} handleCategory={handleCategory}/>)
  return (
    <ul>
      {userItems}
      {ingredients} 
    </ul>
  )
}
