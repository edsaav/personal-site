import React from 'react';
import Illustration from './illustration';
import './styles/video.css';

const Video = ({ title, url, description, img, alt }) => (
  <div className='video'>
    <Illustration name={img} alt={alt} />
    <div className='header'>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target='_blank' rel='noreferrer'>Watch the video</a>
    </div>
  </div>
)

export default Video;
