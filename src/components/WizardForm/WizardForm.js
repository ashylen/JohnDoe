import React from 'react';

// Modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reset as resetReduxForm, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';

// Components
import WizardFormFirstStep from './WizardFormFirstStep';
import WizardFormSecondStep from './WizardFormSecondStep';

// Utilities
import styles from './WizardForm.module.scss';
import { GetStringFromDateObject } from '../../utilities/Functions/GetStringFromDateObject';
import { addItem as addItemAction, editItem as editItemAction, fetchItems } from '../../actions';

class WizardForm extends React.Component {
  state = { step: 1 };

  // componentDidMount z servera pobrac initial values compositions

  nextStep = () => {
    this.setState(prevState => ({
      step: prevState.step + 1,
    }));
  };

  previousStep = () => {
    this.setState(prevState => ({
      step: prevState.step - 1,
    }));
  };

  handleSubmit = async formData => {
    formData.date = GetStringFromDateObject(formData.date);

    const { addItem, editItem, closeModalFn , idCurrentItem , isEditMode , reset , fetchCompositions} = this.props;

    if (isEditMode) {
      await editItem('compositions', idCurrentItem, formData);
    } else {
      await addItem('compositions', formData);
    }
    await reset('addNewCompositionForm');
    await fetchCompositions();
    await closeModalFn();
  };

  render() {
    const { step } = this.state;
    const { isEditMode } = this.props;

    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          {step === 1 && <WizardFormFirstStep isEditMode={isEditMode} onSubmit={this.nextStep} />}
          {step === 2 && (
            <WizardFormSecondStep previousStep={this.previousStep} onSubmit={this.handleSubmit} />
          )}
        </div>
      </React.Fragment>
    );
  }
}

WizardForm.defaultProps = {
  idCurrentItem: null,
};

WizardForm.propTypes = {
  addItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  closeModalFn: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  idCurrentItem: PropTypes.number,
  reset: PropTypes.func.isRequired,
  fetchCompositions: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { isEditMode, idCurrentItem } = state.modalReducer;
  return { isEditMode, idCurrentItem };
};

const mapDispatchToProps = dispatch => ({
  fetchCompositions: () => dispatch(fetchItems('compositions')),
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
  reset: bindActionCreators(resetReduxForm, dispatch),
  editItem: (itemType, itemId, itemContent) =>
    dispatch(editItemAction(itemType, itemId, itemContent)),
});

export default reduxForm({
  // TO DO potem bedzie sie walić podobno gdy bedzie initial values z servera pobierane
  form: 'addNewCompositionForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WizardForm),
);
