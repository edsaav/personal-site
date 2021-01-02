import React from 'react';
import './styles/story.css';

const Story = ({ title, url, preview, background }) => (
  <div className={`story bg-${background}`}>
    <div className='preview'>
      <h2>{title}</h2>
      <p>{preview}</p>
      <a href={url} target='_blank' rel='noreferrer'>Read the short story</a>
    </div>
  </div>
)

export default Story;
