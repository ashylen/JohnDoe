import axios from 'axios';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const EDIT_ITEM_REQUEST = 'EDIT_ITEM_REQUEST';
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS';
export const EDIT_ITEM_FAILURE = 'EDIT_ITEM_FAILURE';

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

export const addItem = (itemType, itemContent) => dispatch => {
  dispatch({ type: ADD_ITEM_REQUEST });

  return axios
    .post(`http://localhost:3000/${itemType}`, {
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: {
          data,
          itemType: itemType,
        },
      });
    })
    .catch(() => {
      dispatch({ type: ADD_ITEM_FAILURE });
    });
};

export const editItem = (itemType, itemId, itemContent) => dispatch => {
  dispatch({ type: EDIT_ITEM_REQUEST });

  return axios
    .put(`http://localhost:3000/${itemType}/${itemId}`, {
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({
        type: EDIT_ITEM_SUCCESS,
        payload: {
          data,
          itemType,
          itemId,
        },
      });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: EDIT_ITEM_FAILURE });
    });
};
