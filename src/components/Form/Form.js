import React from "react";

import Datepicker from "react-datepicker";
import format from "date-fns/format";
import { Field, reduxForm } from 'redux-form'

import Input from "../Input/Input";
import Button from "../Button/Button";
// import SummaryList from "../SummaryList/SummaryList";
import Title from "../SectionDescription/SectionDescription";

import styles from "./Form.module.scss";

const initialState = {
  header: "",
  href: "",
  text: "",
  date: "",
  dateObjectHelper: null,
  subText: "",
  videoId: "",
  goToPreviousStep: false
};

class Form extends React.Component {
  state = initialState;

  handleDateChange = dateObject => {
    if (dateObject) {
      let formattedDate = format(dateObject, "dd.MM.yyyy", {
        awareOfUnicodeTokens: true
      });

      this.setState({
        date: formattedDate,
        dateObjectHelper: dateObject
      });
    }
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    if (e.target.name === "videoId") {
      //Pasted link validation
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = e.target.value.match(regExp);
      let result;
      if (match && match[7].length === 11) {
        result = match;
        this.setState({
          videoId: result[0]
        });
      } else {
        result = "You have to paste valid URL";
        this.setState({
          videoId: result
        });
      }
    }
  };



  render() {
    const { handleSubmit } = this.props;

    const CustomTextField = props => {
      const { input, label, type, meta: { touched, error }, ...other } = props;
      return (
        <div>
          <div>
            <Input
              onChange={this.handleInputChange}
              value={this.state.header}
              label={label}
              {...input}
              placeholder={" "}
              type={type}
            />
            {touched && error && <span>{error}</span>}
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className={styles.formHeader}>Add a new composition</div>
        <div className={styles.wrapper}>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <Field name="header" component={CustomTextField} type="text" label="Composition name" />
            </div>
            <div>
              <Field name="href" component={CustomTextField} type="text" label="Link" />
            </div>
            <div>
              <Field name="date" component={CustomTextField} type="text" label="date" />
            </div>
            <div>
              <Field name="SubText" component={CustomTextField} type="text" label="SubText" />
            </div>
            <div>
              <Field name="videoId" component={CustomTextField} type="text" label="videoId" />
            </div>
            <div>
              <Field name="text" component={CustomTextField} type="text" label="text" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

Form = reduxForm({
  // a unique name for the form
  form: 'addNewCompositionForm'
})(Form)

export default Form;

// <form
// autoComplete="off"
// className={styles.form}
// // onSubmit={e => context.goToNextStep(e, this.state)}
// >
// <Input
//   onChange={this.handleInputChange}
//   value={this.state.header}
//   name="header"
//   label="Composition header"
// />
// <Input
//   onChange={this.handleInputChange}
//   value={this.state.href}
//   name="href"
//   label="Link"
// />
// <Input
//   onChange={this.handleInputChange}
//   value={this.state.subText}
//   name="subText"
//   label="Album"
// />
// <Input
//   onChange={this.handleInputChange}
//   value={this.state.videoId}
//   name="videoId"
//   label="Paste Youtube Url"
// />
// <Datepicker
//   required
//   selected={this.state.dateObjectHelper}
//   onSelect={value => this.handleDateChange(value)}
//   name="date"
//   dateFormat="dd.MM.yyyy"
//   placeholderText="Click to select date"
//   className={styles.datepicker}
// />
// <Input
//   onChange={this.handleInputChange}
//   value={this.state.text}
//   tag="textarea"
//   name="text"
//   label="Description"
// />

// <Button>Next</Button>
// </form>
// //Step 2
// <React.Fragment>
//   <div className={styles.wrapper}>
//     <div className={styles.formHeader}>Summary</div>
//     <Title>&nbsp;</Title>
//     <div className={styles.form}>
//       <div className={styles.modalNavigation}>
//         {//<SummaryList state={this.state} /> }
// }
//         <Button
//           secondary
//           onClick={e => context.goToPreviousStep(e, this.state)}
//         >
//           Back
//         </Button>
//         <Button onClick={e => context.addItemToView(e, this.state)}>
//           Add composition!
//         </Button>
//       </div>
//     </div>
//   </div>
// </React.Fragment>