import React from 'react';
import ExploreListItem from './ExploreListItem';
import axios from 'axios';

export default function ExploreList({ recipeData }) {
  console.log(recipeData);
  function onFav(id) {
    axios.post(`/recipes/add/${id}`).then(() => {
      console.log(`Recipe ${id} added to favorites`);
    })
    .catch((err)=>{console.log(err)});
  }
  const recipes = recipeData.map((recipe) => <ExploreListItem key={recipe.id} recipe={recipe} onFav={(()=>{return onFav(recipe.id)})}/>)
  return (
    <section>
      {recipes}
      </section>
  )
}
