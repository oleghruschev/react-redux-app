import React, { Component } from 'react';

import styles from './CreateArticle.scss';


class CreateArticle extends Component {

  render() {

    return (
      <div className={styles.wrapper}>
        <h2 className={styles.header}>
          Создание статьи
        </h2>
        <input placeholder='Имя статьи' />
        <input plaseholder='Содержание статьи' />
      </div>
    );
  }
}

export default CreateArticle;
