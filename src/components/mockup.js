import React from 'react';
import Illustration from "./illustration"
import './styles/mockup.css'

const Mockup = ({ img, title, alt, description, url }) => (
  <div className='mockup'>
    <Illustration name={img} alt={alt} />
    <div className='header'>
      <h2><a href={url} target='_blank' rel='noreferrer'>{title}</a></h2>
      <p>{description}</p>
    </div>
  </div>
)

export default Mockup;
