import React, { useState } from 'react';
import NavMenu from './NavMenu';
import { FaFacebook, FaInstagram, FaGooglePlay} from 'react-icons/fa';
import { GrAppleAppStore} from 'react-icons/gr';
import './Footer.scss'

function Footer (props) {
  return (
<>

  <div className='footer-container'>
    <div className='social-media'>
    <a><FaFacebook/></a>
      <a><FaInstagram/></a>
      <a><FaGooglePlay/></a>
      <a><GrAppleAppStore/></a>
    </div>
  <p>All rights reserved. Freedge Inc</p>
  </div>
</>
  )
}

export default Footer;
