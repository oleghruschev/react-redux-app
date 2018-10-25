import React from 'react';
import PropTypes from 'prop-types';

import style from './Layout.scss';


const Layout = ({ children }) => (
  <div className={style.content}>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout;
