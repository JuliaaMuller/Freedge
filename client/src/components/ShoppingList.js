import React, { useEffect, useState, useContext } from 'react';
import NavMenu from './NavMenu';
import axios from 'axios';
import Table from "react-bootstrap/Table";
import ShoppingListItem from './ShoppingListItem';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';
// import "./ShoppingList.scss";

function ShoppingList (props) {

  const [shoppingItems, setShoppingItems] = useState([]);
  const { userLog } = useContext(UserContext)
  const isAuth = window.localStorage.getItem("user_id")

  useEffect(() => {
    axios.get("/shopping").then(({ data }) => {
      setShoppingItems(data);
    })
  }, [])

  const deleteItem = (id, aisle) => {

    Promise.all([
      axios.delete(`/shopping/${id}`),
      axios.get("/shopping")
    ]).then(res => setShoppingItems(res[1].data));
  }

  const shoppingListItems = Object.keys(shoppingItems).map(item => <ShoppingListItem key={item} name={item} list={shoppingItems[item]} onDelete={deleteItem}/>)

  return (
<>
<main>
{!isAuth && <Navigate to='/welcome'/>}
  <h2>Shopping List </h2>
  <div className='icons'><img src='images/empty-jam-jar.png'/><img src='images/egg-basket.png'/><img src='images/grocery-bag.png'/></div>
    {shoppingListItems}
</main>
</>
  )
}

export default ShoppingList;