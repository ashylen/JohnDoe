import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import {
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  OPEN_COMPOSITIONS_MODAL,
  CLOSE_COMPOSITIONS_MODAL
} from '../actions';

const initialState = {
  isLoading: false,
  isCompositionsModalOpen: false,
  step: 1,
  isEditMode: false
};

const mainReducer = (state = initialState, action) => {

  switch (action.type) {
    case OPEN_COMPOSITIONS_MODAL:
      return {
        ...state,
        isCompositionsModalOpen: action.isCompositionsModalOpen,
        isEditMode: action.isEditMode
      };
    case CLOSE_COMPOSITIONS_MODAL:
      return {
        ...state,
        isCompositionsModalOpen: action.isCompositionsModalOpen,
        isEditMode: action.isEditMode
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
      console.log(action);
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item._id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  mainReducer,
  form: formReducer
})

export default rootReducer;
