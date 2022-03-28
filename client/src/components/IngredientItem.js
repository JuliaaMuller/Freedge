import React, { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./IngredientItem.scss";
import { Form } from "react-bootstrap";


export default function IngredientItem({
  name,
  handleCategory,
  quantity,
  onDelete,
  category
}) {

  let initial = {
    vegetable: false,
    protein: false,
    dairy: false,
    fruit: false,
    other: false,
    grain: false
  };

  if(category) {
    initial[category] = true;
  }

  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(initial);
  
  function increment() {
    setCount((prev) => prev + 1);
  }
  
  function decrement() {
    if (count > 0) setCount((prev) => prev - 1);
  }

  function removeStatus() {
    const newState = Object.keys(initial).map(item => initial[item] = false);
    setStatus(newState);
  }
 

 
 
  return (
    <div className="add_ingredient--item">
        <img onClick={() => onDelete(name)} src="images/close.png" className="delete-icon"/>

      <img src="images/up.png" onClick={increment} />
      <h5>{ count || quantity} </h5>
    
      <img src="images/down.png" onClick={decrement} />
      <h6>{name}</h6>


      <div className="category-nav">
        <ul className="list">
          <li  className={status.vegetable ? "active" : ""} onClick={() => {removeStatus(); setStatus({...initial, vegetable: true})}}>
            <a href="#">
              <div className="icon">
                <img
                onClick={() => handleCategory("vegetable", name, (count || quantity))}
                src="images/vegetables-bag-48.png"
                />
              </div>
              <div className="text">Veggies</div>
            </a>
          </li>
          <li className={status.fruit ? "active" : ""} onClick={() => { removeStatus(); setStatus({...initial, fruit: true})}}>
            <a href="#">
              <div className="icon">
              <img
                onClick={() => handleCategory("fruit", name, (count || quantity))}
                src="images/fruit-bag.png"
                
              />
              </div>
              <div className="text">Fruit</div>
            </a>
          </li>
          <li className={status.protein ? "active" : ""} onClick={() => {removeStatus(); setStatus({...initial, protein: true})}}>
            <a href="#">
              <div className="icon">
            <img
              onClick={() => handleCategory("protein", name, (count || quantity))}
              src="images/beef.png" 
            />
            </div>
              <div className="text">Protein</div>
            </a>
          </li>
          <li className={status.dairy ? "active" : ""} onClick={() => { removeStatus(); setStatus({...initial, dairy: true})}}>
            <a href="#">
              <div className="icon">
            <img
              onClick={() => handleCategory("dairy", name, (count || quantity))}
              src="images/egg-basket.png" 
            />
            </div>
              <div className="text">Dairy</div>
            </a>
          </li>
          <li className={status.grain ? "active" : ""} onClick={() => {removeStatus(); setStatus({...initial, grain: true})}}>
            <a href="#">
              <div className="icon">
            <img
              onClick={() => handleCategory("grain", name, (count || quantity))}
              src="images/flour.png" 
            />
            </div>
              <div className="text">Grains</div>
            </a>
          </li>
          <li className={status.other ? "active" : ""} onClick={() => {removeStatus(); setStatus({...initial, other: true})}}>
            <a href="#">
              <div className="icon">
            <img
              onClick={() => handleCategory("other", name, (count || quantity))}
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
