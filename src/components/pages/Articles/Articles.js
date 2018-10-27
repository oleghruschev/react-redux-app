import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import Article from './Article';
import CreateArticle from './CreateArticle';

import styles from './Articles.scss';


class Articles extends Component {

  static propTypes = {
    list: PropTypes.array.isRequired,
  }

  render() {
    const { list } = this.props;

    return (
      <div className={styles.articles}>
        <CreateArticle />
        {
          Array.isArray(list) && list.map((list) => {
            console.log(list)
            return (
                <Article key={list.id} title={list.title} content={list.content} />
            )
          })
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  list: state.articles.list,
});

export default connect(mapStateToProps)(Articles);
