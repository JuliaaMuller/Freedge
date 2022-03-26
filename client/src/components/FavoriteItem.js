import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BiFridge, BiBookHeart } from 'react-icons/bi';
import { GiBrokenHeart } from 'react-icons/gi';
import { Button, Form } from 'react-bootstrap';
import './FavoriteItem.js';





export default function FavoriteItem ({recipe_id, onDelete}) {

const[title,setTitle]=useState('')
const[image, setImage]=useState('')

  // useEffect(()=> {
  //   let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
  //   // let url = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=e6e56c0c58be4654a653d00d767b3fc5`
  //   return axios.get(url)
  //   .then((response)=>  {
  //     setTitle(response.data.title)
  //     setImage(response.data.image)
  //   })
  //   .catch((err) => console.log(err));
  // }, [])

 
  return (
  <div className='fav-recipe-item'>
    
      <h1 className='fav-recipe-title'>Title
        {/* {title} */}
        </h1>
        Image
      <img className='fav-recipe-image' 
      // src={image}
      />
      <div className='buttons'>
      
        <Button  id='fav-button' onClick={onDelete} variant="btn btn-outline-secondary" type="submit" >
                <GiBrokenHeart/> Remove from favorites
        </Button>
   
      </div>
  </div>
  )
}
