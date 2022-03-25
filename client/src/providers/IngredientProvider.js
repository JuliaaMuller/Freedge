import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const IngredientContext = createContext();

export default function IngredientProvider(props) {
  const [userIngredients, setUserIngredients] = useState({});

  useEffect(() => {
    axios.get(`/ingredients`).then((res) => setUserIngredients(res.data)).catch(err => console.log(err));
  }, []);

  const onDeleteItem = (name) => {
    
    return Promise.all([
      axios.delete(`/ingredients/${name}`),
      axios.get(`/ingredients`)
    ]).then((response) => {
      return setUserIngredients(response[1].data)
    });
  
  };

  const providerData = { userIngredients, onDeleteItem };

  return (
    <IngredientContext.Provider value={providerData}>
      {props.children}
    </IngredientContext.Provider>
  );
}
