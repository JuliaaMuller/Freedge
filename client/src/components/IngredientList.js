import React from "react";
import IngredientItem from "./IngredientItem";

export default function IngredientList({ items, handleCategory, onDelete }) {
  const ingredients = items.map((item, index) => (
    <IngredientItem
      key={index}
      name={item.name}
      handleCategory={handleCategory}
      onDelete={onDelete}
    />
  ));
  return <ul>{ingredients}</ul>;
}
