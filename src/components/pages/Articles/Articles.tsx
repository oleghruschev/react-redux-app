import * as React from 'react'
import { connect } from 'react-redux';
// import * as Redux from 'redux'
import { RouteComponentProps } from '@reach/router'

// import Article from './Article';
// import CreateArticle from './CreateArticle';

import { IArticles } from 'types/articlesTypes';
import { IAppState } from 'types';

import styles from './Articles.scss';


const Articles: React.FC<RouteComponentProps<IArticles>> = ({ list, openArticle }) => {
console.log(list,openArticle)
  return (
    <div className={styles.articles}>
      {/* <CreateArticle />
      {
        Array.isArray(list) && list.map((article) => (
          <Article
            {...article}
            key={article.id}
            openArticle={openArticle}
          />
        ))
      } */}
    </div>
  )
};

const mapStateToProps = (state: IAppState): IArticles => ({
  list: state.articles.list,
  openArticle: state.articles.openArticle,
});

export default connect(mapStateToProps)(Articles);
