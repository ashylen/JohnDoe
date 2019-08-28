import axios from 'axios';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const LOAD_EDIT_DATA = 'LOAD_EDIT_DATA';

export const EDIT_ITEM_REQUEST = 'EDIT_ITEM_REQUEST';
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS';
export const EDIT_ITEM_FAILURE = 'EDIT_ITEM_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const OPEN_COMPOSITIONS_MODAL = 'OPEN_COMPOSITIONS_MODAL';
export const CLOSE_COMPOSITIONS_MODAL = 'CLOSE_COMPOSITIONS_MODAL';


export function openCompositionsModal(isEditMode, idCurrentItem) {
  return { type: OPEN_COMPOSITIONS_MODAL, isCompositionsModalOpen: true, isEditMode: isEditMode, idCurrentItem: idCurrentItem }
};

export function closeCompositionsModal() {
  return { type: CLOSE_COMPOSITIONS_MODAL, isCompositionsModalOpen: false, isEditMode: false , idCurrentItem: null}
};

export const fetchItems = itemType => (dispatch, getState) => {
  dispatch({ type: FETCH_REQUEST });

  return axios
    .get(`http://localhost:3000/${itemType}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const addItem = (itemType, itemContent) => (dispatch, getState) => {

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
          itemType: itemType
        },
      });
    })
    .catch(() => {
      dispatch({ type: ADD_ITEM_FAILURE });
    });
};

export const editItem = (itemType, itemId, itemContent) => (dispatch, getState) => {

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
          itemType: itemType,
          itemId: itemId
        },
      });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: EDIT_ITEM_FAILURE });
    });
};