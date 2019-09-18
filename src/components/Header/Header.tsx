import React from 'react';

import Navigation from '../Navigation';

import styles from './Header.scss';

const Header = () => (
  <div className={styles.header}>
    <div>
      <div className={styles.img} />
      <p className={styles.text}>React-redux-app</p>
    </div>
    <Navigation />
  </div>
);

export default Header;
