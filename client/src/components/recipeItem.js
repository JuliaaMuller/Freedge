import axios from "axios";
import React, { useState, useEffect } from "react";
import RecipeInfo from "./RecipeInfo";
import Confirmation from "./Confirmation";
import { Button } from "react-bootstrap";
import "./RecipeItem.scss";
import { BiFridge, BiBookHeart } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function RecipeItem({
  id,
  title,
  image,
  usedIngredients,
  missedIngredients,
}) {
  const [instructions, setInstructions] = useState([]);
  const [mealData, setMealData] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [showIngredients, setShowIngredients] = useState(true);
  const [showMethod, setShowMethod] = useState(false);
  const [nutrients, setNutrients] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        setInstructions(response.data.analyzedInstructions[0].steps);
        setMealData(response.data);
        setNutrients(response.data.nutrition.nutrients);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(nutrients);
  function addToShopping() {
    missedIngredients.forEach((item) => {
      let amount = 1;

      if (!item.unit) {
        amount = item.amount;
      }

      const data = {
        name: item.name,
        quantity: amount,
        aisle: item.aisle,
        image: item.image,
      };
      axios
        .post("/shopping", data)
        .then((res) => setModalShow(true))
        .catch((err) => console.log(err));
    });
  }

  const toggleShow = () => {
    setShowMethod(!showMethod);
    setShowIngredients(!showIngredients);
  };


  function onFav(id) {
    axios.post(`/recipes/${id}`).then(() => {
      console.log(`Recipe ${id} added to favorites`);
    });
  }

  return (
    <>
      <div className="recipe-item">
        <img className="recipe-image" src={`${image}`} />
        <div className="recipe-body">
          {mealData && (
            <div className="info">
              <span>Ready In: {mealData.readyInMinutes} mins </span>
              <span>Serves: {mealData.servings} </span>
              <a href={mealData.sourceUrl} target="_blank">
                Find Details
              </a>
            </div>
          )}
          <h1 className="recipe-title">{title}</h1>
          <div className="buttons">
            {/* <Button
              className="inStock-button"
              variant="btn btn-outline-secondary"
                type=""
                >
                <BiFridge /> Ingredients in stock : {usedIngredients.length}
               </Button> */}
            <Button
              className="shop-button"
              variant="btn btn-outline-secondary"
              type="submit"
              onClick={addToShopping}
            >
              <MdOutlineAddShoppingCart /> Add the {missedIngredients.length}{" "}
              missing ingredients to shopping list
            </Button>
            <Button
              className="fav-button"
              variant="btn btn-outline-secondary"
              type="submit"
              onClick={onFav}
            >
              <BiBookHeart /> Add to favorites
            </Button>
          </div>
          <ul className="recipe-nav">
            <li>
              <h3
                className={showIngredients ? "active" : ""}
                onClick={toggleShow}
              >
                Ingredients
              </h3>
            </li>
            <li className={showMethod ? "active" : ""} onClick={toggleShow}>
              <h3>Method</h3>
            </li>
          </ul>
          {showIngredients && (
            <div className="recipe-ingredients">
              <ul className="stock">
                {usedIngredients.map((item) => {
                  return <li>{item.original}</li>;
                })}
              </ul>
              <ul className="missed">
                {missedIngredients.map((item) => {
                  return <li>{item.original}</li>;
                })}
              </ul>
            </div>
          )}
          {showMethod && (
            <ul className="recipe-method">
              <RecipeInfo instructions={instructions} />
            </ul>
          )}
        </div>
        <Confirmation show={modalShow} message={"Items added to Shopping List"} onHide={() => setModalShow(false)} />
        {nutrients.length > 0 && <div className="footer">
          <h4>NUTRITION FACTS</h4>
          <table>
            <tr>
              <td>
                CALORIES:
                {`${nutrients[0].amount} ${nutrients[0].unit}`}
              </td>
              <td>
                SATURATED FAT: {`${nutrients[1].amount} ${nutrients[1].unit}`}
              </td>
              <td>
                SODIUM: {`${nutrients[7].amount} ${nutrients[7].unit}`}
              </td>
            </tr>
            <tr>
              <td>
                SUGAR: {`${nutrients[5].amount} ${nutrients[5].unit}`}
              </td>
              <td>
                PROTEIN: {`${nutrients[8].amount} ${nutrients[8].unit}`}
              </td>
              <td>
                CARBOHYDRATES: {`${nutrients[3].amount} ${nutrients[3].unit}`}
              </td>
            </tr>
          </table>
        </div>}
      </div>
    </>
  );
}
