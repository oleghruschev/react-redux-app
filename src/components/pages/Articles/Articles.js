import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import Article from './Article';
import CreateArticle from './CreateArticle';

import styles from './Articles.scss';


class Articles extends Component {
  
  static propTypes = {
    list: PropTypes.array,
    openArticle: PropTypes.number,
  }

  render() {
    const { list, openArticle } = this.props;

    return (
      <div className={styles.articles}>
        <CreateArticle />
        {
          Array.isArray(list) && list.map((article) => (
            <Article
              {...article}
              key={article.id}
              openArticle={openArticle}
            />
          ))
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  ...state.articles,
});

export default connect(mapStateToProps)(Articles);
