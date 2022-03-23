import React from 'react'
import RecipeItem from './RecipeItem'

export default function RecipeList(props) {

  const recipeList = props.recipes.map((recipe) => <RecipeItem key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} missedIngredients={recipe.missedIngredients} usedIngredients={recipe.usedIngredients}/>)
  return (
    <div>{recipeList}</div>
  )
}
