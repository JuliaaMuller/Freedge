import React from 'react'

export default function ExploreListItem({ recipe }) {
  return (
    <article>
      <h1>{recipe.title}</h1>
      <img src={recipe.image}/>
    </article>
  )
}
