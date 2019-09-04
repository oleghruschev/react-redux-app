import * as React from 'react'
import { Link } from 'react-router-dom';

import style from './Navigation.scss';

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <Link to='/' className={style.link}>Статьи</Link>
      <Link to='/page2' className={style.link}>Данные о пользователях</Link>
    </div>
  )
}

export default Navigation;
