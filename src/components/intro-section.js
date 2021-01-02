import React from 'react';
import ProfilePic from './../images/profile-pic.png';
import SocialLinks from './social-links';
import './styles/intro-section.css';

class IntroSection extends React.Component {
  render() {
    return (
      <div className='intro-section'>
        <img className='profile-pic' src={ProfilePic} alt='Headshot illustration' />
        <h1>code / creative</h1>
        <p>Full-stack software engineer currently <a href='https://www.servicemax.com/' target='_blank' rel='noreferrer'>@Servicemax</a>. Self taught developer originally educated in film production <a href='https://cinema.usc.edu/' target='_blank' rel='noreferrer'>@USC</a>. Passionate about a variety of personal creative projects from short fiction to illustration. Explore some samples and connect with me at the links below.</p>
        <SocialLinks />
      </div>
    );
  }
}

export default IntroSection;
