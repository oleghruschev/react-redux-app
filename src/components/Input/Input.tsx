import React from 'react';

import styles from './Input.scss';

interface IProps {
  value?: string,
  placeholder?: string,
  onChange: any
}

const Input: React.FC<IProps> = ({ value, placeholder, onChange }) => (
  <input
    value={value}
    onChange={onChange}
    className={styles.input}
    placeholder={placeholder}
  />
);


export default Input;
