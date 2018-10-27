import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

Article.PropTypes = {
  title: PropTypes.any,
  content: PropTypes.any,
}

export default Article
