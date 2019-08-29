import axios from 'axios';

export const ADD_COMPOSITIONS_REQUEST = 'ADD_COMPOSITIONS_REQUEST';
export const ADD_COMPOSITIONS_SUCCESS = 'ADD_COMPOSITIONS_SUCCESS';
export const ADD_COMPOSITIONS_FAILURE = 'ADD_COMPOSITIONS_FAILURE';

export const EDIT_COMPOSITIONS_REQUEST = 'EDIT_COMPOSITIONS_REQUEST';
export const EDIT_COMPOSITIONS_SUCCESS = 'EDIT_COMPOSITIONS_SUCCESS';
export const EDIT_COMPOSITIONS_FAILURE = 'EDIT_COMPOSITIONS_FAILURE';

export const FETCH_COMPOSITIONS_REQUEST = 'FETCH_COMPOSITIONS_REQUEST';
export const FETCH_COMPOSITIONS_SUCCESS = 'FETCH_COMPOSITIONS_SUCCESS';
export const FETCH_COMPOSITIONS_FAILURE = 'FETCH_COMPOSITIONS_FAILURE';

export const fetchCompositions = itemType => dispatch => {
  dispatch({ type: FETCH_COMPOSITIONS_REQUEST });

  return axios
    .get(`http://localhost:3000/${itemType}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_COMPOSITIONS_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: FETCH_COMPOSITIONS_FAILURE });
    });
};

export const addItem = (itemType, itemContent) => dispatch => {
  dispatch({ type: ADD_COMPOSITIONS_REQUEST });

  return axios
    .post(`http://localhost:3000/${itemType}`, {
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({
        type: ADD_COMPOSITIONS_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch(() => {
      dispatch({ type: ADD_COMPOSITIONS_FAILURE });
    });
};

export const editItem = (itemType, itemId, itemContent) => dispatch => {
  dispatch({ type: EDIT_COMPOSITIONS_REQUEST });

  return axios
    .put(`http://localhost:3000/${itemType}/${itemId}`, {
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({
        type: EDIT_COMPOSITIONS_SUCCESS,
        payload: {
          data,
          itemType,
          itemId,
        },
      });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: EDIT_COMPOSITIONS_FAILURE });
    });
};
