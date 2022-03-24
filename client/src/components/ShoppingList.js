import React, { useEffect, useState } from 'react';
import NavMenu from './NavMenu';
import axios from 'axios';
import Table from "react-bootstrap/Table";
import ShoppingListItem from './ShoppingListItem';

function ShoppingList (props) {

  const [shoppingItems, setShoppingItems] = useState([]);
  console.log(shoppingItems);
  useEffect(() => {
    axios.get("/shopping").then(({ data }) => {
      setShoppingItems(data);
    })
  }, [])

  const shoppingListItems = shoppingItems.map(item => <ShoppingListItem key={item.id} id={item.id} name={item.name} quantity={item.quantity} aisle={item.aisle} image={item.image}/>)
  return (
<>
<main>
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