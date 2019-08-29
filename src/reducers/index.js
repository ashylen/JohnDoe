import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import compositionsReducer from './compositionsReducer';
import discographyReducer from './discographyReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  compositionsReducer,
  discographyReducer,
  modalReducer,
  form: formReducer,
});

export default rootReducer;
