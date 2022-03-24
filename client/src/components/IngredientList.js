import React from "react";
import IngredientItem from "./IngredientItem";

export default function IngredientList({ items, handleCategory, onDelete }) {
  const ingredients = items.map((item) => (
    <IngredientItem
      key={item.id}
      name={item.name}
      handleCategory={handleCategory}
      onDelete={onDelete}
    />
  ));
  return <ul>{ingredients}</ul>;
}
