import React from 'react';

//  - przerobić mój input na ten? ma byc Reużywalny

// Components
import Input from '../Input/Input';

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
