import React from "react";

//Modules
import Datepicker from "react-datepicker";
import format from "date-fns/format";

//Components
import WizardFormFirstStep from "./WizardFormFirstStep";
import WizardFormSecondStep from "./WizardFormSecondStep";

//Utilities
import styles from "./WizardForm.module.scss";

class WizardForm extends React.Component {

  state = {
    step: 1
  }

  // handleDateChange = dateObject => {
  //   if (dateObject) {
  //     let formattedDate = format(dateObject, "dd.MM.yyyy", {
  //       awareOfUnicodeTokens: true
  //     });

  //     this.setState({
  //       date: formattedDate,
  //       dateObjectHelper: dateObject
  //     });
  //   }
  // };

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  }

  previousStep = () => {
    this.setState({ step: this.state.step - 1 });
  }

  handleSubmit = (e) => {
    console.log(e);
  };


  render() {
    const { handleSubmit } = this.props;
    const { step } = this.state;

    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          {step === 1 && <WizardFormFirstStep onSubmit={this.nextStep} />}
          {step === 2 && (
            <WizardFormSecondStep
              previousStep={this.previousStep}
              onSubmit={this.handleSubmit}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default WizardForm;