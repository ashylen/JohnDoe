import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import {
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from '../actions';

const initialState = {
  isLoading: false,
  isCompositionsModalOpen: false,
  step: 1,

};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
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
