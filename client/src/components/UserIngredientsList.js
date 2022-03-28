import React, {useContext } from "react";
import IngredientItem from "./IngredientItem";
import { IngredientContext } from "../providers/IngredientProvider";
import { UserContext } from '../userContext';

export default function UserIngredientsList() {
 const { userIngredients, onDeleteItem } = useContext(IngredientContext);
  const { userId } = useContext(UserContext);

  let userItems = [];

  for (let key of Object.keys(userIngredients)) {
    userIngredients[key].map((item) =>
      userItems.push(
        <IngredientItem
          key={item.name}
          name={item.name}
          category={key}
          quantity={item.quantity}
          onDelete={onDeleteItem}
        />
      )
    );
  }

  return <u>{userItems}</u>;
}
