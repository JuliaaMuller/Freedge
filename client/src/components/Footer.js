import React, { useState } from 'react';
import NavMenu from './NavMenu';
import { FaFacebook, FaInstagram, FaGooglePlay} from 'react-icons/fa';
import { IoLogoAppleAppstore } from 'react-icons/io';

function Footer (props) {
  return (
<>
<main>
  <div>
    <ul className='social-media'>
      <li><FaFacebook/></li>
      <li><FaInstagram/></li>
      <li><FaGooglePlay/></li>
      <li><IoLogoAppleAppstore/></li>
    </ul>
  </div>
  <p>All right reserved. Freedge Inc</p>
</main>
</>
  )
}

export default Footer;
