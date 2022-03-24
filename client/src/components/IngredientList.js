import axios from 'axios';
import React, { useEffect, useState } from 'react'
import IngredientItem from './IngredientItem'

export default function IngredientList({ items, handleCategory, onDelete }) {

  const [userIngredients, setUserIngredients] = useState({});

  let userItems = [];
  console.log(userIngredients);
  useEffect(() => {
    axios.get("/ingredients")
    .then(res => setUserIngredients(res.data));

  }, []);
  
  const onDeleteItem = (name) => {
    axios.delete(`/ingredients/${name}`).then(res => console.log(res));
    
  }

  for (let key of Object.keys(userIngredients)) {
    userIngredients[key].map(item => userItems.push(<IngredientItem key={item.name} name={item.name} quantity={item.quantity} onDelete={onDeleteItem}/>))
   
  }
  console.log(userItems)
  

  const ingredients = items.map((item) => <IngredientItem key={item.id} name={item.name} handleCategory={handleCategory} onDelete={onDelete}/>)
  return (
    <ul>
      {userItems}
      {ingredients} 
    </ul>
  )
}
