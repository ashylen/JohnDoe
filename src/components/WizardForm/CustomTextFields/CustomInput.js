import React from 'react';

//Components
import Input from '../../Input/Input';

const CustomInput = props => {
    const { input, label, type, meta: { touched, error } } = props;

    return (
        <Input
            label={label}
            placeholder={" "}
            type={type}
            error={touched && error && { error }}
            {...input}
        />
    );

};

export default CustomInput;