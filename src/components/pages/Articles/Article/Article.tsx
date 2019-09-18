import classNames from 'classNames/bind';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { deleteArticle, setOpenArticle } from 'actions/articles';

import { IAppState } from 'types';
import {
  IArticle,
  IDeleteArticleAction,
  IOpenArticleAction,
} from 'types/articlesTypes';

import styles from './Article.scss';

const cx = classNames.bind(styles);

interface IProps extends IArticle {
  articleOpen: number;
  deleteArticle: (id: number) => IDeleteArticleAction;
  setOpenArticle: (id: number) => IOpenArticleAction;
}

const Article: React.FC<IProps> = ({
  title,
  content,
  id,
  articleOpen,
  setOpenArticle,
  deleteArticle,
}) => {
  const handleOpenArticle = () => {
    if (id === articleOpen) {
      setOpenArticle(0);
    } else {
      setOpenArticle(id);
    }
  };

  const handleDeleteArticle = () => {
    deleteArticle(id);
  };

  const className = cx(styles.wrapper, {
    articleOpen: id === articleOpen,
  });

  return (
    <div className={className}>
      <div className={styles.article}>
        <div className={styles.title} onClick={handleOpenArticle}>
          <h2>{title}</h2>
          <div className={styles.arrowWrapper}>
            <div className={styles.arrow} />
          </div>
        </div>
        {articleOpen === id && (
          <Fragment>
            <pre className={styles.content}>{content}</pre>
            <div className={styles.deleteArticle} onClick={handleDeleteArticle}>
              <span>Удалить статью</span>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  ...state.articles,
});

const mapDispatchToProps = {
  deleteArticle,
  setOpenArticle,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
