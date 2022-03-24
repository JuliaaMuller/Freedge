import React, { useState, useContext, useEffect } from 'react';
import NavMenu from './NavMenu';
import RecipeItem from './RecipeItem';
import { UserContext } from '../userContext';
import axios from 'axios';
import FavoriteItem from './FavoriteItem';



function Favorites () {
const [favList, setFavList]=useState([])

useEffect(() => {
axios.get('/favorites')
.then(res => {
  setFavList(res.data)
})
}, [])
console.log('favList=',favList)
  return (
<>
<main>
  <h2>My favorites recipes </h2>
{favList.map((id) => { return <FavoriteItem id={id}/>}
 )}
</main>
</>
  )
}

export default Favorites;


