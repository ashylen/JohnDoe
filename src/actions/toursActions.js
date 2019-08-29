import axios from 'axios';

export const FETCH_TOURS_REQUEST = 'FETCH_TOURS_REQUEST';
export const FETCH_TOURS_SUCCESS = 'FETCH_TOURS_SUCCESS';
export const FETCH_TOURS_FAILURE = 'FETCH_TOURS_FAILURE';

export const fetchTours = itemType => dispatch => {
  dispatch({ type: FETCH_TOURS_REQUEST });

  return axios
    .get(`http://localhost:3000/${itemType}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_TOURS_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: FETCH_TOURS_FAILURE });
    });
};
