import PropTypes from 'prop-types';
import React, { Component } from 'react';

import CreateArticle from './CreateArticle';

import styles from './Articles.scss';


class Articles extends Component {

  render() {

    return (
      <div className={styles.articles}>
        <CreateArticle />
      </div>
    )
  }
};

export default Articles;
