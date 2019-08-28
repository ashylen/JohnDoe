import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import {
  ADD_ITEM_SUCCESS,
  EDIT_ITEM_SUCCESS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  OPEN_COMPOSITIONS_MODAL,
  CLOSE_COMPOSITIONS_MODAL
} from '../actions';

const initialState = {
  isLoading: false,
  isCompositionsModalOpen: false,
  step: 1,
  isEditMode: false,
  idCurrentItem: null
};

const mainReducer = (state = initialState, action) => {

  switch (action.type) {
    case OPEN_COMPOSITIONS_MODAL:
      return {
        ...state,
        isCompositionsModalOpen: action.isCompositionsModalOpen,
        isEditMode: action.isEditMode,
        idCurrentItem: action.idCurrentItem
      };
    case CLOSE_COMPOSITIONS_MODAL:
      return {
        ...state,
        isCompositionsModalOpen: action.isCompositionsModalOpen,
        isEditMode: action.isEditMode,
        idCurrentItem: action.idCurrentItem
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
      const stateItemKey = state[action.payload.itemType].findIndex((obj)=>obj.id === action.payload.itemId);
      state[action.payload.itemType][stateItemKey] = action.payload.data;

      return {
        ...state,
      };
    default:
      return state;
  }
};

const formReducerPlugin = formReducer.plugin({
  addNewCompositionForm: (state, action) => { // <------ 'account' is name of form given to reduxForm()
    switch(action.type) {
      case ADD_ITEM_SUCCESS:
        return undefined;       // <--- blow away form data
      case EDIT_ITEM_SUCCESS:
        return undefined;       // <--- blow away form data
      case CLOSE_COMPOSITIONS_MODAL:
        return undefined;       // <--- blow away form data
      default:
        return state;
    }
  }
})

const rootReducer = combineReducers({
  mainReducer,
  form: formReducerPlugin
})

export default rootReducer;
