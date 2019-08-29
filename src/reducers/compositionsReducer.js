import {
  ADD_ITEM_SUCCESS,
  EDIT_ITEM_SUCCESS,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
} from '../actions/compositionActions';

const initialState = {};

const compositionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ITEMS_SUCCESS:
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
    default:
      return state;
  }
};

export default compositionsReducer;
