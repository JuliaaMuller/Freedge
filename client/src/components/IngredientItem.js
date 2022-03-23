import React, { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'
import "./IngredientItem.scss";

export default function IngredientItem({ name, handleCategory, quantity }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    if (count > 0) setCount((prev) => prev - 1);
  }
  return (
    <div className="add_ingredient--item">
      <img src="images/plus.png" onClick={increment} />
      <h2>{count || quantity}</h2>
      <img src="images/minus.png" onClick={decrement} />
      <h3>{name}</h3>
      
        <div className="category--item">
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-secondary"><img
            onClick={() => handleCategory("vegetable", name, count)}
            src="images/vegetable.png"
          /></Button>
            <Button variant="outline-secondary"> <img
            onClick={() => handleCategory("fruit", name, count)}
            src="images/fruits.png"
          /></Button>
            <Button variant="outline-secondary"> <img
            onClick={() => handleCategory("protein", name, count)}
            src="images/meat.png"
          /></Button>
          <Button variant="outline-secondary">  <img
            onClick={() => handleCategory("dairy", name, count)}
            src="images/dairy.png"
          /></Button>
          <Button variant="outline-secondary"><img
            onClick={() => handleCategory("grain", name, count)}
            src="images/carbohydrates.png"
          /></Button>
          <Button variant="outline-secondary"><img
            onClick={() => handleCategory("other", name, count)}
            src="images/question-mark.png"
          /></Button>
          </ButtonGroup>
      
        </div>
    </div>
  );
}
