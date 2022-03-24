import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../userContext';
import axios from 'axios';
import FavoriteItem from './FavoriteItem';
import { Navigate } from 'react-router-dom';



function Favorites () {
const [favList, setFavList]=useState([])

const {userLog} = useContext(UserContext)

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
{/* {!userLog && <Navigate to='/welcome'/>} */}
  <h2>My favorites recipes </h2>
{favList.map((id) => { return <FavoriteItem id={id}/>}
 )}
 {/* <FavoriteItem id={id}/> */}
</main>
</>
  )
}

export default Favorites;


