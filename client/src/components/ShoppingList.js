import React, { useEffect, useState, useContext } from 'react';
import NavMenu from './NavMenu';
import axios from 'axios';
import Table from "react-bootstrap/Table";
import ShoppingListItem from './ShoppingListItem';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';

function ShoppingList (props) {

  const [shoppingItems, setShoppingItems] = useState([]);
  const { userLog } = useContext(UserContext)
  const isAuth = window.localStorage.getItem("user_id")
  
  console.log(shoppingItems);
  useEffect(() => {
    axios.get("/shopping").then(({ data }) => {
      setShoppingItems(data);
    })
  }, [])

  const deleteItem = (id, aisle) => {
      const items = shoppingItems[aisle].filter(item => item.id !== id)
      setShoppingItems({...shoppingItems, aisle: items});
      axios.delete(`/shopping/${id}`).then(res => console.log(res));
  }
  const shoppingListItems = Object.keys(shoppingItems).map(item => <ShoppingListItem key={item} name={item} list={shoppingItems[item]} onDelete={deleteItem}/>)

  return (
<>
<main>
{!isAuth && <Navigate to='/welcome'/>}
  <h2>My shopping Lists </h2>
    {shoppingListItems}
</main>
</>
  )
}

export default ShoppingList;