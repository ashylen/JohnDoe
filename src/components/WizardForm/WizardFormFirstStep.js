import React, { useState } from 'react';

//Modules
import { Field, reduxForm } from 'redux-form';

//Utilities
import styles from './WizardForm.module.scss';
import validate from './Validators/validate';

//Components
import Button from '../Button/Button';
import CustomInput from './CustomTextFields/CustomInput';
import CustomTextarea from './CustomTextFields/CustomTextarea';
import CustomDatepicker from './CustomTextFields/CustomDatepicker';

const WizardFormFirstStep = props => {
    const { handleSubmit, isEditMode } = props;

    return (
        <React.Fragment>
            <div className={styles.formHeader}>{isEditMode? "Edit" : "Add a new"} composition</div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Field name="header" component={CustomInput} type="text" label="Composition name" />
                <Field name="href" component={CustomInput} type="text" label="Link" />
                <Field name="date" component={CustomDatepicker} type="text" label="Date" />
                <Field name="youTubeUrl" component={CustomInput} type="text" label="Youtube URL" />
                <Field name="subText" component={CustomInput} type="text" label="Additional text" />
                <Field name="text" component={CustomTextarea} type="text" label="Text" />
                <div className={styles.modalNavigation}>
                    <Button type="submit">Next</Button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default reduxForm({
    form: 'addNewCompositionForm',
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(WizardFormFirstStep);