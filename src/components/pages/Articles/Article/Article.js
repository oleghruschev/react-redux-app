import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from'classNames/bind';
import React, { Component, Fragment } from 'react';

import { setOpenArticle, deleteArticle } from 'actions/articles';

import styles from './Article.scss';

const cx = classNames.bind(styles);


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

    const className = cx(styles.wrapper, {
      open: id === openArticle,
    });

    return (
      <div className={className}>
        <div className={styles.article}>
          <div className={styles.title} onClick={this.handleOpenArticle}>
            <h2>{title}</h2>
            <div className={styles.arrowWrapper}>
              <div className={styles.arrow}/>
            </div>
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
