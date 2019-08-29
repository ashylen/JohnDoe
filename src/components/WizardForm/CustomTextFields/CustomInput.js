import React from 'react';

// TO ASK - przerobić mój input na ten?

// Components
import Input from '../../Input/Input';

const CustomInput = props => {
  const {
    input,
    label,
    type,
    meta: { touched, error },
  } = props;

  return (
    <Input
      maxLength={200}
      label={label}
      placeholder=' '
      type={type}
      error={touched && error && { error }}
      {...input}
    />
  );
};

export default CustomInput;
