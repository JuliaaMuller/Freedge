import React, {useContext } from "react";
import IngredientItem from "./IngredientItem";
import { IngredientContext } from "../providers/IngredientProvider";
import { UserContext } from '../userContext';

export default function UserIngredientsList() {
 const { userIngredients, onDeleteItem } = useContext(IngredientContext);
  const { userId } = useContext(UserContext);

  console.log(userIngredients);
  console.log(userId);

  let userItems = [];

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
