import { FETCH_DISCOGRAPHY_REQUEST, FETCH_DISCOGRAPHY_SUCCESS } from '../actions/discographyActions';

const initialState = {
  discography:[]
};

const discographyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISCOGRAPHY_REQUEST:
      return {
        ...state,
      };
    case FETCH_DISCOGRAPHY_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    default:
      return state;
  }
};

export default discographyReducer;
