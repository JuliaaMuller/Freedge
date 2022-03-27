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
      <Button variant="outline-secondary">
        <img onClick={() => onDelete(name)} src="images/delete.png" />
      </Button>
      <img src="images/plus.png" onClick={increment} />
      <h2>{count || quantity}</h2>
      <img src="images/minus.png" onClick={decrement} />
      <h3>{name}</h3>

      <div className="category-nav">
        <ul className="list">
          <li  className={status.veg ? "active" : ""} onClick={() => {setStatus({...initial, veg: true})}}>
            <a href="#">
              <div className="icon">
                <img
                onClick={() => handleCategory("vegetable", name, count)}
                src="images/vegetable.png"
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
                src="images/fruits.png"
                
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
              src="images/meat.png" 
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
              src="images/dairy.png" 
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
              src="images/carbohydrates.png" 
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
              src="images/question-mark.png" 
            />
            </div>
              <div className="text">Other</div>
            </a>
          </li>
        </ul>
        {/* <ButtonGroup aria-label="Basic example">
          <Button variant="outline-secondary">
            <img
              onClick={() => handleCategory("vegetable", name, count)}
              src="images/vegetable.png"
            />
          </Button>
          <Button variant="outline-secondary">
            {" "}
            <img
              onClick={() => handleCategory("fruit", name, count)}
              src="images/fruits.png"
            />
          </Button>
          <Button variant="outline-secondary">
            {" "}
            <img
              onClick={() => handleCategory("protein", name, count)}
              src="images/meat.png"
            />
          </Button>
          <Button variant="outline-secondary">
            {" "}
            <img
              onClick={() => handleCategory("dairy", name, count)}
              src="images/dairy.png"
            />
          </Button>
          <Button variant="outline-secondary">
            <img
              onClick={() => handleCategory("grain", name, count)}
              src="images/carbohydrates.png"
            />
          </Button>
          <Button variant="outline-secondary">
            <img
              onClick={() => handleCategory("other", name, count)}
              src="images/question-mark.png"
            />
          </Button>
        </ButtonGroup> */}
      </div>
    </div>
  );
}
