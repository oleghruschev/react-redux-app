import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to='/page1'>Page1</Link>
      <Link to='/page2'>Page2</Link>
    </div>
  )
}

export default Navigation;
