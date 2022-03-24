import React, { useState, useContext } from 'react';
import NavMenu from './NavMenu';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';

function Explore (props) {
  const { userLog } = useContext(UserContext)
  return (
<>
<main>
{!userLog && <Navigate to='/welcome'/>}
  <h2>Explore more recipes </h2>
</main>
</>
  )
}

export default Explore;