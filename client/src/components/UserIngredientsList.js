import React, { useState, useEffect, useContext } from "react";
import IngredientItem from "./IngredientItem";
import axios from "axios";
import { UserContext } from '../userContext';

export default function UserIngredientsList() {
  const [userIngredients, setUserIngredients] = useState({});
  const { userId } = useContext(UserContext);

  let userItems = [];
  console.log(userIngredients);
  console.log(userId);
  useEffect(() => {
    axios.get(`/ingredients/${userId}`).then((res) => setUserIngredients(res.data));
  }, []);

  const onDeleteItem = (name) => {

    Promise.all([
      axios.delete(`/ingredients/${name}`),
      axios.get(`/ingredients/${userId}`)
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
