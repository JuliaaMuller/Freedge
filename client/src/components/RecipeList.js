import React from 'react'
import RecipeItem from './RecipeItem'
import axios from 'axios'

export default function RecipeList(props) {
 function onFav(id) {
    axios.post(`/recipes/add/${id}`).then(() => {
      console.log(`Recipe ${id} added to favorites`);
    })
    .catch((err)=>{console.log(err)});
  }
  const recipeList = props.recipes.map((recipe) => <RecipeItem key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} missedIngredients={recipe.missedIngredients} usedIngredients={recipe.usedIngredients} onFav={(()=>{return onFav(recipe.id)})}/>)
  return (
    <div>{recipeList}</div>
  )
}
