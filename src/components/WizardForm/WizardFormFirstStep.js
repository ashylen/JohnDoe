import React from 'react';

// Modules
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';
import CustomInput from './CustomTextFields/CustomInput';
import CustomTextarea from './CustomTextFields/CustomTextarea';
import CustomDatepicker from './CustomTextFields/CustomDatepicker';

// Utilities
import styles from './WizardForm.module.scss';
import validate from './Validators/validate';

let WizardFormFirstStep = props => {
  const { handleSubmit, isEditMode } = props;

  return (
    <React.Fragment>
      <div className={styles.formHeader}>{isEditMode ? 'Edit' : 'Add a new'} composition</div>
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
};

WizardFormFirstStep.defaultProps = {
  isEditMode: false,
};

WizardFormFirstStep.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool,
};

WizardFormFirstStep = reduxForm({
  form: 'addNewCompositionForm',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(WizardFormFirstStep);

const mapStateToProps = state => {
  const { compositions, idCurrentItem } = state.mainReducer;
  return {
    initialValues: compositions.find(x => x.id === idCurrentItem),
  };
};

WizardFormFirstStep = connect(mapStateToProps)(WizardFormFirstStep);

export default WizardFormFirstStep;
