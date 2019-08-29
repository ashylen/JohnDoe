import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS } from '../actions/discographyActions';

const initialState = {};

const discographyReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default discographyReducer;
