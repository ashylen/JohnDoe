import React, { Component } from 'react';

// Modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import YouTube from "react-youtube";

// Utilities
import {
  fetchItems,
  openCompositionsModal as openCompositionsModalAction,
  closeCompositionsModal as closeCompositionsModalAction
} from '../../actions';
import styles from "./LatterCompositionsView.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { GetYouTubeVideoId } from '../../utilities/Functions';

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
  };

  render() {

    const { mainReducer, openCompositionsModal, closeCompositionsModal } = this.props;
    const { compositions, isCompositionsModalOpen } = mainReducer;

    return (
      <React.Fragment>
        {isCompositionsModalOpen ? <Modal closeModalFn={closeCompositionsModal} /> : null}
        <article id="latter-compositions" className={styles.article}>
          <div className={styles.wrapper}>
            <SectionTitle>Latter Compositions </SectionTitle>
            <SectionDescription>"It's Time" was released as the lead single from Continued Silence and It's Time, both extended plays preceding Night Visions' release.</SectionDescription>

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

                  <Button buttonClass="absoluteTL" openModalFn={() =>{openCompositionsModal(true)}}>
                    Edit Track
                  </Button>

                </div>

                <div className={styles.video}>
                  {item.youTubeUrl && <YouTube videoId={GetYouTubeVideoId(item.youTubeUrl)} />}
                </div>
                
              </div>
            )) : null}

            <Button buttonClass="buttonFixed" openModalFn={() =>{openCompositionsModal(false)}}>
              <FontAwesomeIcon icon={faPlus} color="#abacac" size="1x" />
            </Button>
          </div>
        </article>
      </React.Fragment>
    );
  };
};


LatterCompositionsView.propTypes = {
  fetchCompositions: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  fetchCompositions: () => dispatch(fetchItems('compositions')),
  openCompositionsModal: (isEditMode) => dispatch(openCompositionsModalAction(isEditMode)),
  closeCompositionsModal: () => dispatch(closeCompositionsModalAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LatterCompositionsView);