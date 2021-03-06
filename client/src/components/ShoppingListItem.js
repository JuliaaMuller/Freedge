import React from "react";
import Table from "react-bootstrap/Table";
import "./ShoppingList.scss";

export default function ShoppingListItem({ name, list, onDelete }) {

  return (

    <div className="list-container">
    <ul className="shopping-list">
      <h3 className="heading">{name}</h3>
      {list.map(item => {
        return (<li key={item.id}>
          {item.quantity} {item.name}
          <img src="images/close.png" className="close" onClick={() => onDelete(item.id)}/>
        </li>)
      })}
    </ul>
    </div>
  
  );
}
