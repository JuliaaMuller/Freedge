import { createContext, useState } from "react";
import axios from "axios";

export const mealContext = createContext();

export default function MealProvider(props) {
  const [state, setState] = useState({});

  function getRecipesForDay() {

    return axios
      .get("/recipes")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => console.log(err));
  
  }

  const providerData = { state, setState, getRecipesForDay };

  return (
    <mealContext.Provider value={providerData}>
      {props.children}
    </mealContext.Provider>
  );
}
