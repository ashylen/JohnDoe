import React from 'react';

// Modules
import PropTypes from 'prop-types';
// import { CSSTransition } from 'react-transition-group';

// Utilities
import styles from './Modal.module.scss';
// import fadeTransition from './transitions/fade.module.css';

// Components
import WizardForm from '../WizardForm/WizardForm';

const Modal = ({ closeModalFn }) => {
  // const [inProp, setInProp] = useState(false);

  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <button className={styles.closeButton} onClick={closeModalFn} />
        {/* TO ASK - czy można animować elementy w Reactcie onMount i na unMount? Czy lepiej jakąś bibliotekę podpiąć CSSTransition itp? */}
        <WizardForm closeModalFn={closeModalFn} />
      </div>
      <div onClick={closeModalFn} className={styles.overlay} />
      {/* TO ASK - można dawać eventy na divach? */}
    </React.Fragment>
  );
};

Modal.propTypes = {
  closeModalFn: PropTypes.func.isRequired,
};

export default Modal;
