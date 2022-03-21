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
          <img src="images/fruits.png"/>
          <img src="images/meat.png"/>
          <img src="images/dairy.png"/>
          <img src="images/carbohydrates.png"/>
          <img src="images/question-mark.png"/>

        </div>
      </div>
    </div>
  );
}
