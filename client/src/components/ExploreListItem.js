import React from 'react'

export default function ExploreListItem({ recipe }) {
  return (
    <article>
      <h4>{recipe.title}</h4>
      <img src={recipe.image}/>
      <div className='instructions'>
        <span>Cooking Time: {recipe.readyInMinutes} mins </span> |
      <span>     Servings: {recipe.servings}     </span>   
      </div>
      <a className='go-to-button' href={recipe.sourceUrl} target={"_blank"}>Go to Recipe</a>
    </article>
  )
}
