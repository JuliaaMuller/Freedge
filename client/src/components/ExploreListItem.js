import React from 'react'
import { Button } from "react-bootstrap";
import { BiHeartCircle} from "react-icons/bi";


export default function ExploreListItem({ recipe, onFav }) {
  return (
    <article>
      <h4>{recipe.title}</h4>
      <img src={recipe.image}/>
      <div className='instructions'>
        <span>Cooking Time: {recipe.readyInMinutes} mins </span> |
      <span>     Servings: {recipe.servings}     </span>   
      </div>
      <div className='explore-button-container'>
      <Button
      id="go-to-button-explore"
      variant="btn btn-outline-secondary"
      type="submit"
      href={recipe.sourceUrl} target={"_blank"}
      >
      Go to Recipe
      </Button>
      <Button
      id="fav-button-explore"
      variant="btn btn-outline-secondary"
      type="submit"
      onClick={onFav}
      ><BiHeartCircle/>  Add to favorites
      </Button>
      </div>
    </article>
  )
}
