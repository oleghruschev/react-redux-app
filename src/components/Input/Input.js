import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.scss';


const Input = ({ value, placeholder, onChange }) => (
  <input
    value={value}
    onChange={onChange}
    className={styles.input}
    placeholder={placeholder}
  />
);

Input.PropTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.placeholder,
  onChange: PropTypes.func.isRequired,
}

export default Input;
