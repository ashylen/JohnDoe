import React from "react";

import styles from "./Modal.module.scss";

import WizardForm from "../WizardForm/WizardForm";

const Modal = ({ closeModalFn }) => (
  <React.Fragment>
    <div className={styles.wrapper}>
      <button className={styles.closeButton} onClick={closeModalFn} />
      <WizardForm closeModalFn = {closeModalFn}/>
    </div>
    <div onClick={closeModalFn} className={styles.overlay}></div>
  </React.Fragment>
);

export default Modal;
