import React from "react";

import Datepicker from "react-datepicker";
import format from "date-fns/format";

import AppContext from "../../context";

import Input from "../Input/Input";
import Button from "../Button/Button";
import SummaryList from "../SummaryList/SummaryList";
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
    return (
      <AppContext.Consumer>
        {context =>
          context.step !== 2 ? (
            //Step 1
            <React.Fragment>
              <div className={styles.formHeader}>Add a new composition</div>
              <div className={styles.wrapper}>
                <form
                  autoComplete="off"
                  className={styles.form}
                  onSubmit={e => context.goToNextStep(e, this.state)}
                >
                  <Input
                    onChange={this.handleInputChange}
                    value={this.state.header}
                    name="header"
                    label="Composition header"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    value={this.state.href}
                    name="href"
                    label="Link"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    value={this.state.subText}
                    name="subText"
                    label="Album"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    value={this.state.videoId}
                    name="videoId"
                    label="Paste Youtube Url"
                  />
                  <Datepicker
                    required
                    selected={this.state.dateObjectHelper}
                    onSelect={value => this.handleDateChange(value)}
                    name="date"
                    dateFormat="dd.MM.yyyy"
                    placeholderText="Click to select date"
                    className={styles.datepicker}
                  />
                  <Input
                    onChange={this.handleInputChange}
                    value={this.state.text}
                    tag="textarea"
                    name="text"
                    label="Description"
                  />

                  <Button>Next</Button>
                </form>
              </div>
            </React.Fragment>
          ) : (
            //Step 2
            <React.Fragment>
              <div className={styles.wrapper}>
                <div className={styles.formHeader}>Summary</div>
                <Title>&nbsp;</Title>
                <div className={styles.form}>
                  <div className={styles.modalNavigation}>
                    <SummaryList state={this.state} />
                    <Button
                      secondary
                      onClick={e => context.goToPreviousStep(e, this.state)}
                    >
                      Back
                    </Button>
                    <Button onClick={e => context.addItemToView(e, this.state)}>
                      Add composition!
                    </Button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        }
      </AppContext.Consumer>
    );
  }
}

export default Form;
