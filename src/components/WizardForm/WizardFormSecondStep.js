import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import validate from './validate';


import SummaryList from '../SummaryList/SummaryList';
import Button from '../Button/Button';

import styles from "./WizardForm.module.scss";


let WizardFormSecondStep = props => {
  const { handleSubmit, pristine, previousStep, submitting } = props; //Misc
  const { header, href, date, subText, videoId, text } = props; //Fields

  console.log(props);

  return (
    <React.Fragment>
      <div className={styles.formHeader}>Summary</div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <div className={styles.wrapper}>
            <div className={styles.form}>
              <div className={styles.modalNavigation}>
                <SummaryList data={{header, href, date, subText, videoId, text}} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.modalNavigation}>
          <Button secondary type="button" onClick={previousStep}>
            Previous
        </Button>
          <Button type="submit" disabled={pristine || submitting}>
            Submit
        </Button>
        </div>
      </form>
    </React.Fragment>

  );
};


WizardFormSecondStep = reduxForm({
  form: 'addNewCompositionForm', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondStep);

const selector = formValueSelector('addNewCompositionForm');

WizardFormSecondStep = connect(state => ({
  header: selector(state, 'header'),
  href: selector(state, 'href'),
  date: selector(state, 'date'),
  subText: selector(state, 'subText'),
  videoId: selector(state, 'videoId'),
  text: selector(state, 'text'),
}))(WizardFormSecondStep);

export default WizardFormSecondStep;