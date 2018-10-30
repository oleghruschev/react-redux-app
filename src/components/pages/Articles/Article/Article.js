import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import classNames from 'classnames-loader';

import { setOpenArticle, deleteArticle } from 'actions/articles';

import styles from './Article.scss';


class Article extends Component {

  static propTypes = {
    title: PropTypes.any,
    content: PropTypes.any,
    id: PropTypes.number.isRequired,
    openArticle: PropTypes.number.isRequired,

    deleteArticle: PropTypes.func.isRequired,
    setOpenArticle: PropTypes.func.isRequired,
  }

  handleOpenArticle = () => {
    const { id, openArticle, setOpenArticle } = this.props;

    if (id === openArticle) setOpenArticle(0);

    else setOpenArticle(id)
  }

  handleDeleteArticle = () => {
    const { id, deleteArticle } = this.props;

    deleteArticle(id)
  }

  render() {
    const { id, title, content, openArticle } = this.props;

    const className = classNames(styles.wrapper, {
      open: id === openArticle,
    });

    return (
      <div className={className}>
        <div className={styles.article}>
          <div className={styles.title} onClick={this.handleOpenArticle}>
            <h2>{title}</h2>
            <div className={styles.arrow}/>
          </div>
          {
            openArticle === id && (
              <Fragment>
                <pre className={styles.content}>{content}</pre>
                <div className={styles.deleteArticle} onClick={this.handleDeleteArticle}>
                  <span>Удалить статью</span>
                </div>
              </Fragment>
            )
          }
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = {
  deleteArticle,
  setOpenArticle,
}


export default connect(
  () => ({}),
  mapDispatchToProps
)(Article);
