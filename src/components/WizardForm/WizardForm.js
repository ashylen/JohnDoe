import React from "react";

//Modules
import { connect } from 'react-redux';

//Components
import WizardFormFirstStep from "./WizardFormFirstStep";
import WizardFormSecondStep from "./WizardFormSecondStep";

//Utilities
import styles from "./WizardForm.module.scss";
import { GetStringFromDateObject } from "../../utilities/Functions";
import {
  addItem as addItemAction,
} from '../../actions';

class WizardForm extends React.Component {

  state = { step: 1 };

  nextStep = (values) => {
    this.setState({ step: this.state.step + 1 });
  }

  previousStep = () => {
    this.setState({ step: this.state.step - 1 });
  }

  handleSubmit = (formData) => {
    formData.date = GetStringFromDateObject(formData.date);

    const { addItem } = this.props;

    const submit = async () => {
      await addItem("compositions", formData);
      await console.log('done');
      await this.props.closeModalFn();
    };

    submit();

    // console.log("props", this.props);
    // console.log("state", this.state);

    // axios
    //   .post(`http://localhost:3000/compositions`, {
    //     ...formData,
    //   })
    //   .then(({ data }) => {
    //     this.props.closeModalFn();
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  render() {
    const { step } = this.state;
    const { mainReducer } = this.props;
    const { isEditMode } = mainReducer;

    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          {step === 1 && (
            <WizardFormFirstStep 
            isEditMode={isEditMode} 
            onSubmit={this.nextStep} />
          )}
          {step === 2 && (
            <WizardFormSecondStep
              isEditMode={isEditMode}
              previousStep={this.previousStep}
              onSubmit={this.handleSubmit}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WizardForm);
