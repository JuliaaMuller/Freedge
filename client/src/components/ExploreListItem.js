import React from 'react'

export default function ExploreListItem({ recipe }) {
  return (
    <article>
      <h1>{recipe.title}</h1>
      <img src={recipe.image}/>
      <div className='instructions'>
        <span>Cooking Time: {recipe.readyInMinutes} mins </span> |
      <span>     Servings: {recipe.servings}     </span>   
      </div>

      <a href={recipe.sourceUrl} target={"_blank"}>Go to Recipe</a>
      {/* <a href={recipe.sourceUrl} target={"_blank"}>Save for Later</a> */}
    </article>
  )
}
