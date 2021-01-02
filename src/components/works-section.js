import React from 'react';
import Illustration from "./illustration";
import Story from "./story";
import Mockup from "./mockup";
import Video from "./video";
import ArticlesSection from "./articles-section";

class WorksSection extends React.Component {
  render() {
    return (
      <ul className='works-section'>
        <li><Illustration name='green-portrait' alt='Portrait of a balding old man on a green background'/></li>
        <li>
          <Mockup
            img='cocktail-cards-mockup'
            title='Cocktail.cards'
            alt='Cocktail search website open on a laptop'
            description='Speedy cocktail search and discovery app built with Gatsby and React'
            url='https://cocktail.cards/'
          />
        </li>
        <li>
          <Story
            title='The Consulate'
            url='https://edsaav.medium.com/the-consulate-8bd85e9d6fa3'
            background='consulate'
            preview='Marcel found himself surrounded by a familiar beige, save for the small dried bloodstain on his corduroy slacks. This was his first visit to the consulate since he moved abroad, but the officially sanctioned decor of the small office surrounded him with eery familiarity...'
          />
        </li>
        <li><Illustration name='grey-portrait' alt='Portrait of a businessman on a grey background'/></li>
        <li><Illustration name='chameleon' alt='Illustration of a chameleon woman standing in the desert'/></li>
        <li>
          <Video
            title='Cells'
            url='https://vimeo.com/60354982'
            description='An experimental documentary filmed around Los Angeles over a three week period.'
            img='cells'
            alt='Black and white image of a scientist looking into a microscope'
          />
        </li>
        <li><Illustration name='fish' alt='Illustration of a fish shaped ice cream cone'/></li>
        <li><Illustration name='deer' alt='Illustration of a human-faced deer in an abstract cosmic setting'/></li>
        <li>
          <Video
            title='Zinc Product Promo'
            url='https://vimeo.com/300533314'
            description='Promotional video produced for Zinc, a communication app for field service technicians. Written, edited, narrated and animated by myself.'
            img='zinc'
            alt='A collection of circular portraits on a purple background'
          />
        </li>
        <li><Illustration name='desert' alt='Illustration of four creatures looking out over a moonlit desert'/></li>
        <li><Illustration name='fruit' alt='Illustration of a green creature resting in a bowl of fruit'/></li>
        <li><ArticlesSection /></li>
        <li>
          <div className='footer'><p>© 2021 Edward Saavedra</p></div>
        </li>
      </ul>
    );
  }
}

export default WorksSection;
