import React from 'react';
import './styles/social-links.css'

const SocialLinks = props => (
  <div className='social-links'>
    <ul>
      <li className='linkedin'><a href='https://www.linkedin.com/in/edwardsaavedra/' target='_blank' rel='noreferrer'>LinkedIn</a></li>
      <li className='github'><a href='https://github.com/edsaav' target='_blank' rel='noreferrer'>Github</a></li>
      <li className='medium'><a href='https://edsaav.medium.com/' target='_blank' rel='noreferrer'>Medium</a></li>
      <li className='twitter'><a href='https://twitter.com/edsaav' target='_blank' rel='noreferrer'>Twitter</a></li>
    </ul>
  </div>
)

export default SocialLinks;
