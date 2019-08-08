import React from "react";

import styles from "./Modal.module.scss";

import Form from "../Form/Form";

const Modal = ({ closeModalFn }) => (
  <React.Fragment>
    <div className={styles.wrapper}>
      <button className={styles.closeButton} onClick={closeModalFn} />
      <Form />
    </div>
    <div onClick={closeModalFn} className={styles.overlay}></div>
  </React.Fragment>
);

export default Modal;
