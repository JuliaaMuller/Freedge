import React, { useState } from "react";
import "./IngredientItem.scss";

export default function IngredientItem({ name, handleCategory, id }) {
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
      {count} 
      <img src="images/minus.png" onClick={decrement} />
      <h3>{name}</h3>
      <div className="category">
        CATEGORY
        <div className="category--item">
          <img onClick={() => handleCategory("vegetable", name, id, count)} src="images/vegetable.png"/>
          <img onClick={() => handleCategory("fruit", name, id, count)} src="images/fruits.png"/>
          <img onClick={() => handleCategory("protein", name, id, count)} src="images/meat.png"/>
          <img onClick={() => handleCategory("dairy", name, id, count)} src="images/dairy.png"/>
          <img onClick={() => handleCategory("grain", name, id, count)} src="images/carbohydrates.png"/>
          <img onClick={() => handleCategory("other", name, id, count)} src="images/question-mark.png"/>

        </div>
      </div>
    </div>
  );
}
