import React, { useState } from 'react';
import NavMenu from './NavMenu';
import './About.scss';

function About (props) {
  return (
<><NavMenu /> 
<main>
  <h3>About us </h3>

  <h5> Who are we ? </h5>
  <div className='manseerat'>
    <p> Manseerat Kaur is a full-stack developper and ...</p>
  </div>
  <div className='julia'>
    <p> Julia Muller also a full-stack developper and a mother.  </p>
  </div>
  <h5> Why Freedge ? </h5>
  <div className='description'>
    <p> We are two young web developers and during this intense bootcamp we didn't have time to think about what we were going to cook. 
      Most often it was necessary to eat as quickly as possible to get back to work. 
      However with children, this is not always possible. 
      So we came up with the idea of creating an application that would help us know what to cook 
      and what ingredients to use that we already had on hand. 
      Plus, we don't think we're the only ones with this problem. That's why we invented Freedge: 
      the application that will help you empty your fridge to save you time but also save a little money 
      by avoiding food waste as much as possible. </p>
  </div>
</main>
</>
  )
}

export default About;