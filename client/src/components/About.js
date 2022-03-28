import React, { useState } from 'react';
import NavMenu from './NavMenu';
import './About.scss';

function About (props) {
  return (
<> 
<main>
<div className='about-container'>
  <center><h5> Who are we ? </h5></center>
  <div className='menu-1-about'>
  <div className='manseerat'>
    <p> Manseerat Kaur is a full-stack developper </p>
    <img id='mama-img' src='https://live.staticflickr.com/8818/17050483727_b541cbe73b_z.jpg'/>
  </div>
  <div className='julia'>
    <p> Julia Muller also a junior full-stack developper </p>
    <img id='juju-img'src='https://i.pinimg.com/736x/08/eb/b8/08ebb8da254d939f8ce8b17c47d34747.jpg'/>
  </div>
  </div>
  <center><h5> Why Freedge ? </h5></center>
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
  <img id='image-about'src='https://images.squarespace-cdn.com/content/v1/5e29fdb6a671454c6d456f61/1592267692369-1RTKJI9UBXVXV052OV2G/Jasmine+Final_1.gif?format=1500w'/>
</div>
</main>
</>
  )
}

export default About;



// 