import axios from 'axios';

export const FETCH_DISCOGRAPHY_REQUEST = 'FETCH_DISCOGRAPHY_REQUEST';
export const FETCH_DISCOGRAPHY_SUCCESS = 'FETCH_DISCOGRAPHY_SUCCESS';
export const FETCH_DISCOGRAPHY_FAILURE = 'FETCH_DISCOGRAPHY_FAILURE';

export const fetchDiscography = itemType => dispatch => {
  dispatch({ type: FETCH_DISCOGRAPHY_REQUEST });

  return axios
    .get(`http://localhost:3000/${itemType}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_DISCOGRAPHY_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: FETCH_DISCOGRAPHY_FAILURE });
    });
};