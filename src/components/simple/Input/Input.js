import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ tag: Tag, name, label, maxLength, error, ...props }) => {
  const formItemClass = error ? styles.formItemError : styles.formItem;
  console.log(error);
  console.log(typeof error);
  return (
    <div className={formItemClass}>
      <Tag
        className={Tag === 'textarea' ? styles.textarea : styles.input}
        type="text"
        name={name}
        id={name}
        autoComplete="off"
        maxLength={maxLength}
        placeholder=" "
        {...props}
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.formItemBar} />
      {error ? <div className={styles.errorContainer}>{error.error}</div> : null}
    </div>
  );
};

Input.defaultProps = {
  tag: "",
  maxLength: "",
  error: false,
};

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({error: PropTypes.string})])
};

Input.defaultProps = {
  tag: 'input',
  maxLength: 200,
};

export default Input;
