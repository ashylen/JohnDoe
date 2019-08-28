import React from 'react';

//Components
import Input from '../../Input/Input';

const CustomTextarea = props => {
    const { input, label, type, meta: { touched, error } } = props;

    return (
        <Input
            tag={"textarea"}
            label={label}
            placeholder={" "}
            type={type}
            error={touched && error && { error }}
            {...input}
        />
    );
};

export default CustomTextarea;