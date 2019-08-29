import axios from 'axios';

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const fetchItems = itemType => dispatch => {
  dispatch({ type: FETCH_ITEMS_REQUEST });

  return axios
    .get(`http://localhost:3000/${itemType}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_ITEMS_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: FETCH_ITEMS_FAILURE });
    });
};