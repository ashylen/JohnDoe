import React from "react";

import Datepicker from "react-datepicker";
import format from "date-fns/format";

import AppContext from "../../context";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../SectionDescription/SectionDescription";

import styles from "./Form.module.scss";

const initialState = {
  header: "",
  href: "",
  text: "",
  date: "",
  dateObj: null,
  subText: "",
  videoId: "",
  goToPreviousStep: false
};

class Form extends React.Component {
  state = initialState;

  handleGoToPreviousStep = () => {
    this.setState({
      goToPreviousStep: true
    });
  };

  handleDateChange = value => {
    if (value) {
      let val = format(value, "dd.MM.yyyy", {
        awareOfUnicodeTokens: true
      });

      this.setState({
        date: val,
        dateObj: value
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
            <React.Fragment>
              <div className={styles.formHeader}>Add a new composition!</div>
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
                    selected={this.state.dateObj}
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
            <React.Fragment>
              <div className={styles.wrapper}>
                <div className={styles.formHeader}>Summary</div>
                <Title>&nbsp;</Title>
                <div className={styles.form}>
                  <Title>
                    <strong>Composition header:</strong>
                  </Title>
                  <Title>{this.state.header}</Title>
                  <Title>
                    <strong>Link:</strong>
                  </Title>
                  <Title>{this.state.href}</Title>
                  <Title>
                    <strong>Date:</strong>
                  </Title>
                  <Title>{this.state.date}</Title>
                  <Title>
                    <strong>Album:</strong>
                  </Title>
                  <Title>{this.state.subText}</Title>
                  <Title>
                    <strong>YouTube URL:</strong>
                  </Title>
                  <Title>{this.state.videoId}</Title>
                  <Title>
                    <strong>Description:</strong>
                  </Title>
                  <Title>{this.state.text}</Title>
                  <div className={styles.modalNavigation}>
                    <Button
                      secondary
                      onClick={e => context.goToPreviousStep(e, this.state)}
                    >
                      Back
                    </Button>
                    <Button onClick={e => context.addItem(e, this.state)}>
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
