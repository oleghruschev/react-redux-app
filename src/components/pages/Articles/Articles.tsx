import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { connect } from 'react-redux';

import Article from './Article';
import CreateArticle from './CreateArticle';

import { IAppState } from 'types';
import { IArticles } from 'types/articlesTypes';

import styles from './Articles.scss';


const Articles: React.FC<RouteComponentProps<IArticles>> = ({ list, openArticle }) => {

  return (
    <div className={styles.articles}>
      <CreateArticle />
      {
        Array.isArray(list) && list.map(({ id, title, content }) => (
          <Article
            id={id}
            title={title}
            content={content}
            key={id}
            articleOpen={openArticle || 0}
          />
        ))
      }
    </div>
  )
};

const mapStateToProps = (state: IAppState): IArticles => ({
  list: state.articles.list,
  openArticle: state.articles.openArticle,
});

export default connect(mapStateToProps)(Articles);
