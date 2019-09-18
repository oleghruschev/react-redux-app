import React from 'react';

import style from './Layout.scss';

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => (
  <div className={style.content}>{children}</div>
);

export default Layout;
