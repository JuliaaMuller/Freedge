import React from "react";
import Table from "react-bootstrap/Table";

export default function ShoppingListItem({ name, list, onDelete }) {

  return (
    <ul>
      {name}
      {list.map(item => {
        return (<li key={item.id}>
          {item.quantity} {item.name}
        
        </li>)
      })}
    </ul>
  );
}
