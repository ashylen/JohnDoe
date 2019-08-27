import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './WizardForm.module.scss';

const WizardFormFirstStep = props => {

    const { handleSubmit } = props;

    const required = value => value ? undefined : 'Required'

    const CustomTextField = props => {
        const { input, label, type, meta: { touched, error }, ...other } = props;
        return (
            <div>
                <div>
                    <Input
                        label={label}
                        placeholder={" "}
                        type={type}
                        error={touched && error && {error}}
                        {...input}
                    />
                </div>
            </div>
        );
    }
    const CustomTextArea = props => {
        const { input, label, type, meta: { touched, error }, ...other } = props;
        return (
            <div>
                <div>
                    <Input
                        tag={"textarea"}
                        label={label}
                        placeholder={" "}
                        type={type}
                        error={touched && error && {error}}
                        {...input}
                    />
                </div>
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className={styles.formHeader}>Add a new composition</div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Field name="header" component={CustomTextField} type="text" validate = {required} label="Composition name" />
                <Field name="href" component={CustomTextField} type="text" validate = {required} label="Link" />
                <Field name="date" component={CustomTextField} type="text" validate = {required} label="Date" />
                <Field name="videoId" component={CustomTextField} type="text" validate = {required} label="Youtube URL" />
                <Field name="subText" component={CustomTextField} type="text" validate = {required} label="Additional text" />
                <Field name="text" component={CustomTextArea} type="text" validate = {required} label="Text" />
                <Button type="submit">Next</Button>
            </form>
        </React.Fragment>

    )
}

export default reduxForm({
    form: 'addNewCompositionForm', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(WizardFormFirstStep)