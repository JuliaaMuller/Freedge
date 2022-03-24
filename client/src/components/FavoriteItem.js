import React, { useState, useContext } from 'react';
import axios from 'axios';
import { BiFridge, BiBookHeart } from 'react-icons/bi';
import { Button } from 'react-bootstrap';





export default function FavoriteItem ({id}) {

console.log('props:',id)

  function getRecipeById(recipeId){
    let url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`

  axios.get(url)
  .then((response)=>  {return response.data})
  .catch((err) => console.log(err));
  }

const recipeData = getRecipeById()


  return (
  <div className='fav-recipe-item'>
      <h1 className='fav-recipe-title'>{recipeData.title}</h1>
      <img className='fav-recipe-image' src={recipeData.image}/>
      <div className='buttons'>
      <Button className ='fav-button' variant="btn btn-outline-secondary" type="submit" >
              <BiBookHeart/> Remove from favorites
      </Button>
      </div>
  </div>
  )
}
