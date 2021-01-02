import React from 'react';

const Article = ({ topic, title, url }) => (
  <>
    <aside>{topic}</aside>
    <h3><a href={url} target='_blank' rel='noreferrer'>{title}</a></h3>
  </>
)

export default Article;
