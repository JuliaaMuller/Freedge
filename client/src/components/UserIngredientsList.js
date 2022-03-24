import React, { useState, useEffect } from "react";
import IngredientItem from "./IngredientItem";
import axios from "axios";

export default function UserIngredientsList() {
  const [userIngredients, setUserIngredients] = useState({});

  let userItems = [];
  console.log(userIngredients);
  useEffect(() => {
    axios.get("/ingredients").then((res) => setUserIngredients(res.data));
  }, []);

  const onDeleteItem = (name) => {

    Promise.all([
      axios.delete(`/ingredients/${name}`),
      axios.get("/ingredients")
    ]).then((response) => {
      setUserIngredients(response[1].data)
    });

  };

  for (let key of Object.keys(userIngredients)) {
    userIngredients[key].map((item) =>
      userItems.push(
        <IngredientItem
          key={item.name}
          name={item.name}
          quantity={item.quantity}
          onDelete={onDeleteItem}
        />
      )
    );
  }

  return <u>{userItems}</u>;
}
