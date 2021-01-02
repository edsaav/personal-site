import React from 'react';
import Article from './article';
import './styles/articles-section.css'

const ArticlesSection = props => (
  <div className='articles-section'>
    <h2>Articles.</h2>
    <ul>
      <li>
        <Article
          topic='code'
          title='Command Line Basics for Everday Use'
          url='https://edsaav.medium.com/command-line-basics-for-everyday-use-f8b5eec809c1'
        />
      </li>
      <li>
        <Article
          topic='code'
          title='The Big Ideas Behind Big O Notation'
          url='https://edsaav.medium.com/the-big-ideas-behind-big-o-notation-dfc9508ed748'
        />
      </li>
      <li>
        <Article
          topic='code'
          title='A Gentle Introduciton to Regular Expressions'
          url='https://edsaav.medium.com/a-gentle-introduction-to-regular-expressions-6b0976c47d81'
        />
      </li>
    </ul>
  </div>
)

export default ArticlesSection;
