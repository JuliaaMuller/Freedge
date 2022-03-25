import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../userContext';
import axios from 'axios';
import FavoriteItem from './FavoriteItem';
import { Navigate } from 'react-router-dom';



function Favorites () {
const [favList, setFavList]=useState([])
const [isDeleted, setIsDeleted]=useState(false)

const {userLog, userId} = useContext(UserContext)

useEffect(() => {
axios.get('/favorites')
.then(res => {
  setFavList(res.data)
})
}, [])

function handleDelete (recipe_id) {
  axios.post(`/favorites/delete/${recipe_id}`) 
  .then((res) => {
    console.log("favorite is delete")
  })
  .catch((err) => console.log(err))
 }
console.log('favList=',favList)
  return (
<>
<main>
<h2 id='fav-title'>My favorites recipes </h2>
  <div className='favorite-container'>
{/* {!userLog && <Navigate to='/welcome'/>} */}
  
{favList.map((id) => { return <FavoriteItem onDelete ={()=>{handleDelete(id); return <Navigate to='/favorites'/>}} key ={id} recipe_id={id}/>}
 )}
 {/* <FavoriteItem id={id}/> */}
 </div>
</main>
</>
  )
}

export default Favorites;


