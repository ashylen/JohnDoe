import React from "react";

import AppContext from "../../context";

import { BrowserRouter } from "react-router-dom";

import Header from "../../components/Header/Header";
import DiscographyView from "../DiscographyView/DiscographyView";
import ToursView from "../ToursView/ToursView";
import LatterCompositionsView from "../LatterCompositionsView/LatterCompositionsView";
import Modal from "../../components/Modal/Modal";

import compositions from "../../data/latter-compositions.json";
import "./index.css";

class Root extends React.Component {
  state = {
    compositions: [compositions.box, compositions.box, compositions.box],
    isModalOpen: false,
    step: 1,
    goToPreviousStep: false
  };

  goToNextStep = e => {
    e.preventDefault();
    this.setState({
      step: 2
    });
  };

  goToPreviousStep = e => {
    e.preventDefault();
    this.setState({
      step: 1
    });
  };

  addItemToView = (e, newItem) => {
    if (newItem.videoId) {
      //Get VideoId from Youtube URL
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = newItem.videoId.match(regExp);
      let result = match && match[7].length === 11 ? match[7] : "";
      newItem.videoId = result;
    }

    this.setState(prevState => ({
      compositions: [...prevState["compositions"], newItem]
    }));

    this.setState({
      step: 1
    });

    this.closeModal();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      step: 1
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItemToView: this.addItemToView,
      goToNextStep: this.goToNextStep,
      goToPreviousStep: this.goToPreviousStep,
      openModalFn: this.openModal,
      closeModalFn: this.closeModal
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <section>
            <DiscographyView />
            <ToursView />
            <LatterCompositionsView />
          </section>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
