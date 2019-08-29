import React from 'react';

// Modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import WizardFormFirstStep from './WizardFormFirstStep';
import WizardFormSecondStep from './WizardFormSecondStep';

// Utilities
import styles from './WizardForm.module.scss';
import { GetStringFromDateObject } from '../../utilities/Functions';
import { addItem as addItemAction, editItem as editItemAction } from '../../actions';

class WizardForm extends React.Component {
  state = { step: 1 };

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

  handleSubmit = formData => {
    formData.date = GetStringFromDateObject(formData.date); // TO ASK - czy można tak mutować parametry?

    const { addItem, editItem, mainReducer, closeModalFn } = this.props;
    const { isEditMode, idCurrentItem } = mainReducer; // TO ASK - czy można jakoś skrócić dostęp do tego mainReducera?  combineReducers to robi --> reducers.js

    (async () => {
      if (isEditMode) {
        await editItem('compositions', idCurrentItem, formData);
      } else {
        await addItem('compositions', formData);
      }
      await closeModalFn();
    })();
  };

  render() {
    const { step } = this.state;
    const { mainReducer } = this.props;
    const { isEditMode } = mainReducer;

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
  mainReducer: {
    idCurrentItem: null,
  },
};

WizardForm.propTypes = {
  addItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  closeModalFn: PropTypes.func.isRequired,
  mainReducer: PropTypes.shape({
    isEditMode: PropTypes.bool.isRequired,
    idCurrentItem: PropTypes.number,
  }),
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
  editItem: (itemType, itemId, itemContent) =>
    dispatch(editItemAction(itemType, itemId, itemContent)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WizardForm);
