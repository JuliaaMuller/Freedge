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

  console.log(shoppingItems);
  useEffect(() => {
    axios.get("/shopping").then(({ data }) => {
      setShoppingItems(data);
    })
  }, [])

  const deleteItem = (id) => {
      const items = shoppingItems.filter(item => item.id !== id)
      setShoppingItems(items);
      axios.delete(`/shopping/${id}`).then(res => console.log(res));
  }
  const shoppingListItems = shoppingItems.map(item => <ShoppingListItem key={item.id} id={item.id} name={item.name} quantity={item.quantity} aisle={item.aisle} image={item.image} onDelete={deleteItem}/>)
  return (
<>
<main>
{!userLog && <Navigate to='/welcome'/>}
  <h2>My shopping Lists </h2>
 
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Aisle</th>
          <th>Image</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {shoppingListItems}
      </tbody>
  </Table>      
</main>
</>
  )
}

export default ShoppingList;