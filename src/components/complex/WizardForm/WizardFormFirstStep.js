import React from 'react';

// Modules
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Button from '../../simple/Button/Button';
import CustomInput from '../../simple/CustomInputs/CustomInput';
import CustomDatepicker from '../../simple/CustomInputs/CustomDatepicker';

// Utilities
import styles from './WizardForm.module.scss';
import { required } from '../../../utilities/Validators/required';
import { maxLength } from '../../../utilities/Validators/maxLength';
import { isYouTubeUrl } from '../../../utilities/Validators/isYouTubeUrl';

const maxLength15 = maxLength(15);
const isRequired = required;

let WizardFormFirstStep = props => {
  const { handleSubmit, isEditMode } = props;

  return (
    <React.Fragment>
      <div className={styles.formHeader}>{isEditMode ? 'Edit' : 'Add a new'} composition</div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Field
          name="header"
          placeholder=" "
          component={CustomInput}
          type="text"
          validate={[isRequired, maxLength15]}
          label="Composition name"
        />
        <Field
          name="href"
          placeholder=" "
          component={CustomInput}
          type="text"
          validate={[isRequired]}
          label="Link"
        />
        <Field
          name="date"
          placeholder=" "
          component={CustomDatepicker}
          type="text"
          validate={[isRequired]}
          label="Date"
        />
        <Field
          name="youTubeUrl"
          placeholder=" "
          component={CustomInput}
          type="text"
          validate={[isRequired, isYouTubeUrl]}
          label="Youtube URL"
        />
        <Field
          name="subText"
          placeholder=" "
          component={CustomInput}
          type="text"
          validate={[isRequired]}
          label="Additional text"
        />
        <Field
          name="text"
          placeholder=" "
          component={CustomInput}
          tag="textarea"
          type="text"
          validate={[isRequired]}
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
