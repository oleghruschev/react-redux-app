import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import React, { Component } from 'react';

import { createArticle } from 'actions/articles';

import Input from 'components/Input';

import styles from './CreateArticle.scss';


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

  handleClearError = () => {
    this.setState({ errorText: '' })
  }

  render() {
    const { articleName, articleContent, errorText } = this.state;

    return (
      <div className={styles.wrapper} onMouseLeave={this.handleClearError}>
        <h2 className={styles.header}>
          Создание статьи
        </h2>
        <div className={styles.articleName}>
          <Input 
            value={articleName}
            placeholder='Имя статьи'
            onChange={this.handleChangeArticleName}
          />
        </div>
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
  null,
  mapDispatchToProps
)(CreateArticle);
