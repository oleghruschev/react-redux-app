import { connect } from 'react-redux'
import React, { Component } from 'react';

import styles from './CreateArticle.scss';

import { setCreateArticle } from 'actions/articles';

class CreateArticle extends Component {

  state = {
    articleName: '',
    articleContent: ''
  }

  handleChangeArticleName = (e) => {
    this.setState({ articleName: e.target.value })
  }

  handleChangeArticleContent = (e) => {
    this.setState({ articleContent: e.target.value })    
  }

  handleCreateArticle = () => {
    const { setCreateArticle } = this.props;
    const { articleName, articleContent } = this.state;

    let list = [];
    let article = {
      id: 1,
      articleName,
      articleContent,
    }
    list.push(article);

    setCreateArticle(list)

    this.setState({
      articleName: '',
      articleContent: ''
    })
  }

  render() {
    const { articleName, articleContent } = this.state;

    return (
      <div className={styles.wrapper}>
        <h2 className={styles.header}>
          Создание статьи
        </h2>
        <input
          value={articleName}
          placeholder='Имя статьи'
          className={styles.articleName}
          onChange={this.handleChangeArticleName}
        />
        <textarea
          value={articleContent} 
          placeholder='Содержание статьи'
          className={styles.articleContent}
          onChange={this.handleChangeArticleContent}
        />  
        <div className={styles.button}>
          <button onClick={this.handleCreateArticle}>
            Создать статью
          </button>
        </div>  
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCreateArticle,
}

export default connect(
  () => ({}),
  mapDispatchToProps
)(CreateArticle);
