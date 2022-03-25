import React from 'react';
import ExploreListItem from './ExploreListItem';

export default function ExploreList({ recipeData }) {
  console.log(recipeData);

  const recipes = recipeData.map((recipe) => <ExploreListItem key={recipe.id} recipe={recipe}/>)
  return (
    <section>
      {recipes}
      </section>
  )
}
