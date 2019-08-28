import React from 'react';

// Modules
import PropTypes from 'prop-types';

// Utilities
import styles from './Modal.module.scss';

// Components
import WizardForm from '../WizardForm/WizardForm';

const Modal = ({ closeModalFn }) => (
  <React.Fragment>
    <div className={styles.wrapper}>
      <button className={styles.closeButton} onClick={closeModalFn} />
      <WizardForm closeModalFn={closeModalFn} />
    </div>
    <div onClick={closeModalFn} className={styles.overlay} />
  </React.Fragment>
);

Modal.propTypes = {
  closeModalFn: PropTypes.func.isRequired,
};

export default Modal;
