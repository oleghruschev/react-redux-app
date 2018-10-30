import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import React, { Component } from 'react';

import styles from './CreateArticle.scss';

import { createArticle } from 'actions/articles';

class CreateArticle extends Component {

  static propTypes = {
    createArticle: PropTypes.func.isRequired,
  }

  state = {
    errorText: '',
    articleName: '',
    articleContent: '',
  }

  handleChangeArticleName = (e) => {
    this.setState({ articleName: e.target.value })
  }

  handleChangeArticleContent = (e) => {
    this.setState({ articleContent: e.target.value })
  }

  handleCreateArticle = () => {
    const { createArticle } = this.props;
    const { articleName, articleContent } = this.state;

    if (articleName === '' && articleContent === '') {
      this.setState({ errorText: 'Введите название статьи и заполните ее' })
    }

    else if (articleName === '') {
      this.setState({ errorText: 'Введите название статьи' })
    }

    else if (articleContent === '') {
      this.setState({ errorText: 'Заполните статью' })
    }

    else {
      createArticle(articleName, articleContent);

      this.setState({
        errorText: '',
        articleName: '',
        articleContent: '',
      })
    }
  }

  render() {
    const { articleName, articleContent, errorText } = this.state;

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
          <span className={styles.error}>
            {errorText}
          </span> 
          <button onClick={this.handleCreateArticle}>
            Создать статью
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createArticle,
}

export default connect(
  () => ({}),
  mapDispatchToProps
)(CreateArticle);
