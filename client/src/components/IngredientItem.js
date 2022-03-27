import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./IngredientItem.scss";

export default function IngredientItem({
  name,
  handleCategory,
  quantity,
  onDelete,
}) {

  let initial = {
    veg: false,
    protein: false,
    dairy: false,
    fruit: false,
    other: false,
    grain: false
  };

  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(initial)

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    if (count > 0) setCount((prev) => prev - 1);
  }

 
  return (
    <div className="add_ingredient--item">
        <img onClick={() => onDelete(name)} src="images/close.png" className="delete-icon"/>

  
      <img src="images/up.png" onClick={increment} />
      <h5>{ count || quantity}</h5>
      <img src="images/down.png" onClick={decrement} />
      <h5>{name}</h5>


      <div className="category-nav">
        <ul className="list">
          <li  className={status.veg ? "active" : ""} onClick={() => {setStatus({...initial, veg: true})}}>
            <a href="#">
              <div className="icon">
                <img
                onClick={() => handleCategory("vegetable", name, count)}
                src="images/vegetables-bag-48.png"
                />
              </div>
              <div className="text">Veggies</div>
            </a>
          </li>
          <li className={status.fruit ? "active" : ""} onClick={() => setStatus({...initial, fruit: true})}>
            <a href="#">
              <div className="icon">
              <img
                onClick={() => handleCategory("fruit", name, count)}
                src="images/fruit-bag.png"
                
              />
              </div>
              <div className="text">Fruit</div>
            </a>
          </li>
          <li className={status.protein ? "active" : ""} onClick={() => setStatus({...initial, protein: true})}>
            <a href="#">
              <div className="icon">
            <img
              onClick={() => handleCategory("protein", name, count)}
              src="images/beef.png" 
            />
            </div>
              <div className="text">Protein</div>
            </a>
          </li>
          <li className={status.dairy ? "active" : ""} onClick={() => setStatus({...initial, dairy: true})}>
            <a href="#">
              <div className="icon">
            <img
              onClick={() => handleCategory("dairy", name, count)}
              src="images/egg-basket.png" 
            />
            </div>
              <div className="text">Dairy</div>
            </a>
          </li>
          <li className={status.grain ? "active" : ""} onClick={() => setStatus({...initial, grain: true})}>
            <a href="#">
              <div className="icon">
            <img
              onClick={() => handleCategory("grain", name, count)}
              src="images/flour.png" 
            />
            </div>
              <div className="text">Grains</div>
            </a>
          </li>
          <li className={status.other ? "active" : ""} onClick={() => setStatus({...initial, other: true})}>
            <a href="#">
              <div className="icon">
            <img
              onClick={() => handleCategory("other", name, count)}
              src="images/empty-jam-jar.png" 
            />
            </div>
              <div className="text">Other</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
