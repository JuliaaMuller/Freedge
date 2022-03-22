import { createContext, useState } from "react";
import axios from "axios";

export const mealContext = createContext();

export default function MealProvider(props) {
  const [state, setState] = useState({});

  function getRecipesForDay () {
    let recipes;
    axios.get("/recipes").then((response) => recipes = response).catch(err => console.log(err));
    console.log(recipes);
    return recipes;
  }

  const providerData = { state, setState, getRecipesForDay };

  return (
    <mealContext.Provider value={providerData}>
      {props.children}
    </mealContext.Provider>
  );
}