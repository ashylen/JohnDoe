import React, { useState, useEffect, Component } from 'react';

// Modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import YouTube from "react-youtube";

// Utilities
import { fetchItems, addItem as addItemAction } from '../../actions';
import styles from "./LatterCompositionsView.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import json from "../../data/latter-compositions.json";

// Components
import Box from "../../components/Box/Box";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import TimelineHeader from "../../components/TimelineHeader/TimelineHeader";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";


class LatterCompositionsView extends Component {
  componentDidMount() {
    const { fetchCompositions } = this.props;
    fetchCompositions();
  }

  state = {
    isModalOpen: false,
  };

  // addItemToView = (e, newItem) => {
  //   if (newItem.videoId) {
  //     //Get VideoId from Youtube URL
  //     var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  //     var match = newItem.videoId.match(regExp);
  //     let result = match && match[7].length === 11 ? match[7] : "";
  //     newItem.videoId = result;
  //   }

  //   this.setState(prevState => ({
  //     compositions: [...prevState["compositions"], newItem]
  //   }));

  //   this.setState({
  //     step: 1
  //   });

  //   this.closeModal();
  // };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {

    const { isModalOpen } = this.state;
    const { mainReducer, addItem } = this.props;
    const { compositions } = mainReducer;

    return (
      <React.Fragment>
        {isModalOpen ? <Modal closeModalFn={this.closeModal} /> : null}
        <article id="latter-compositions" className={styles.article}>
          <div className={styles.wrapper}>
            <SectionTitle>Latter Compositions </SectionTitle>
            <SectionDescription>{json.sectionDescription}</SectionDescription>
            {compositions ? compositions.map((item) => (
              <div className={styles.inner} key={item.id}>
                <div className={styles.description}>
                  <TimelineHeader secondary={true} date={item.date}>
                    {item.subText}
                  </TimelineHeader>
                  <Box
                    header={item.header}
                    text={item.text}
                    buttonText={"Visit on iTunes"}
                    buttonHref={item.href}
                    socialBoxContent={item}
                  />
                </div>
                <div className={styles.video}>

                </div>
              </div>
            )) : null}
            <Button fixed openModalFn={this.openModal}>
              <FontAwesomeIcon icon={faPlus} color="#abacac" size="1x" />
            </Button>
          </div>
        </article>
      </React.Fragment>
    );
  };
  // {item.videoId && <YouTube videoId={item.videoId} />}
};

// LatterCompositionsView.defaultProps = {
//   notes: [],
// };

LatterCompositionsView.propTypes = {
  fetchCompositions: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  // notes: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     _id: PropTypes.string.isRequired,
  //     title: PropTypes.string.isRequired,
  //     content: PropTypes.string.isRequired,
  //   }),
  // ),
};

const mapStateToProps = (state) => { 
  return state;
};

const mapDispatchToProps = dispatch => ({
  fetchCompositions: () => dispatch(fetchItems('compositions')),
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LatterCompositionsView);