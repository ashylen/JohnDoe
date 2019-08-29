import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  ADD_ITEM_SUCCESS,
  EDIT_ITEM_SUCCESS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  OPEN_COMPOSITIONS_MODAL,
  CLOSE_COMPOSITIONS_MODAL,
} from '../actions';

const initialState = {
  isLoading: false,
  isCompositionsModalOpen: false,
  step: 1,
  isEditMode: false,
  idCurrentItem: null,
};

// TO ASK - jaka jest poprawna struktura store'a

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_COMPOSITIONS_MODAL:
      return {
        ...state,
        isCompositionsModalOpen: action.isCompositionsModalOpen,
        isEditMode: action.isEditMode,
        idCurrentItem: action.idCurrentItem,
      };
    case CLOSE_COMPOSITIONS_MODAL:
      return {
        ...state,
        isCompositionsModalOpen: action.isCompositionsModalOpen,
        isEditMode: action.isEditMode,
        idCurrentItem: action.idCurrentItem,
      };
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        [action.payload.itemType]: [...action.payload.data],
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    case EDIT_ITEM_SUCCESS:
      const stateItemKey = state[action.payload.itemType].findIndex(
        item => item.id === action.payload.itemId,
      ); // TO ASK - To jest mega brzydkie > czy mogę przerobić "compositions" żeby index był taki jak id? https://hackernoon.com/shape-your-redux-store-like-your-database-98faa4754fd5
      state[action.payload.itemType][stateItemKey] = action.payload.data;

      return { ...state };
    default:
      return state;
  }
};

const formReducerPlugin = formReducer.plugin({ // TO ASK - wyczytałem w docs, że można coś takiego zrobić, żeby zresetować formularz // https://redux-form.com/6.0.0-alpha.4/docs/faq/howtoclear.md/
  addNewCompositionForm: (state, action) => {
    switch (action.type) {
      case ADD_ITEM_SUCCESS:
        return undefined; // <--- blow away form data
      case EDIT_ITEM_SUCCESS:
        return undefined; // <--- blow away form data
      case CLOSE_COMPOSITIONS_MODAL:
        return undefined; // <--- blow away form data
      default:
        return state;
    }
  },
});

const rootReducer = combineReducers({
  mainReducer,
  form: formReducerPlugin,
});

export default rootReducer;
