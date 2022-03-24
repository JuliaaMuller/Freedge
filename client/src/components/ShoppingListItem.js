import React from "react";
import Table from "react-bootstrap/Table";

export default function ShoppingListItem({ id, name, quantity, image, aisle, onDelete }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{aisle}</td>
      <td><img src={`${image}`} /></td>
      <td><img src="images/delete.png" onClick={() => onDelete(id)}/></td>
    </tr>
  );
}
