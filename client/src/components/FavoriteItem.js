import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BiFridge, BiBookHeart } from 'react-icons/bi';
import { GiBrokenHeart } from 'react-icons/gi';
import { Button, Form } from 'react-bootstrap';
import './FavoriteItem.scss';





export default function FavoriteItem ({recipe_id, onDelete, url}) {

const[title,setTitle]=useState('')
const[image, setImage]=useState('')
const[recipeUrl, setUrl]=useState('')

  useEffect(()=> {
    // let url = `https://api.spoonacular.com/recipes/${recipe_id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    let url = `https://api.spoonacular.com/recipes/${recipe_id}/information?includeNutrition=false&apiKey=e6e56c0c58be4654a653d00d767b3fc5`
    return axios.get(url)
    .then((response)=>  {
      setTitle(response.data.title)
      setImage(response.data.image)
      setUrl(response.data.sourceUrl)
    })
    .catch((err) => console.log(err));
  }, [])

 
  return (
  <div className='fav-recipe-item'>
    
      <h5 className='fav-recipe-title'>
        {title}
        </h5>
      <img className='fav-recipe-image' href={recipeUrl}
      src={image}
      />
      <div className='buttons'>
      <Button
      id="go-to-button-explore"
      variant="btn btn-outline-secondary"
      type="submit"
      href={recipeUrl} target={"_blank"}
      >
      Go to Recipe
      </Button>
        <Button  id='fav-button' onClick={onDelete} variant="btn btn-outline-secondary" type="submit" >
                <GiBrokenHeart/> Remove from favorites
        </Button>
   
      </div>
  </div>
  )
}
