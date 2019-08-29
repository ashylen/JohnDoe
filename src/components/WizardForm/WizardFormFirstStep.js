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
import { required } from '../../utilities/Validators/required';
import { isYouTubeUrl } from '../../utilities/Validators/isYouTubeUrl';

let WizardFormFirstStep = props => {
  const { handleSubmit, isEditMode } = props;

  return (
    <React.Fragment>
      <div className={styles.formHeader}>{isEditMode ? 'Edit' : 'Add a new'} composition</div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Field
          name="header"
          component={CustomInput}
          type="text"
          validate={[required]}
          label="Composition name"
        />
        <Field name="href" component={CustomInput} type="text" validate={[required]} label="Link" />
        <Field
          name="date"
          component={CustomDatepicker}
          type="text"
          validate={[required]}
          label="Date"
        />
        <Field
          name="youTubeUrl"
          component={CustomInput}
          type="text"
          validate={[required, isYouTubeUrl]}
          label="Youtube URL"
        />
        <Field
          name="subText"
          component={CustomInput}
          type="text"
          validate={[required]}
          label="Additional text"
        />
        <Field
          name="text"
          component={CustomTextarea}
          type="text"
          validate={[required]}
          label="Text"
        />
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
  // validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(WizardFormFirstStep);

const mapStateToProps = state => {
  const { compositions } = state.compositionsReducer;
  const { idCurrentItem } = state.modalReducer;

  return {
    initialValues: compositions.find(x => x.id === idCurrentItem),
  };
};

WizardFormFirstStep = connect(mapStateToProps)(WizardFormFirstStep);

export default WizardFormFirstStep;
