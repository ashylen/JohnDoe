import axios from 'axios';

export const OPEN_COMPOSITIONS_MODAL = 'OPEN_COMPOSITIONS_MODAL';
export const CLOSE_COMPOSITIONS_MODAL = 'CLOSE_COMPOSITIONS_MODAL';

export const FETCH_COMPOSITIONS_ITEM_REQUEST = 'FETCH_COMPOSITIONS_ITEM_REQUEST';
export const FETCH_COMPOSITIONS_ITEM_SUCCESS = 'FETCH_COMPOSITIONS_ITEM_SUCCESS';
export const FETCH_COMPOSITIONS_ITEM_FAILURE = 'FETCH_COMPOSITIONS_ITEM_FAILURE';

export const openCompositionsModal = (itemType, isEditMode, idCurrentItem) => dispatch => {
  if (idCurrentItem === null || !idCurrentItem) {
    dispatch({
      type: OPEN_COMPOSITIONS_MODAL,
      itemType,
      [itemType]: {
        isModalOpen: true,
        isEditMode: false,
        idCurrentItem: null,
        editItemData: {},
      },
    });
  } else {
    return axios
      .get(`http://localhost:3000/${itemType}/${idCurrentItem}`)
      .then(({ data }) => {
        dispatch({
          type: OPEN_COMPOSITIONS_MODAL,
          itemType,
          [itemType]: {
            isModalOpen: true,
            isEditMode,
            idCurrentItem,
            editItemData: data,
          },
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
};

export function closeCompositionsModal(itemType) {
  return {
    type: CLOSE_COMPOSITIONS_MODAL,
    itemType,
    [itemType]: {
      isModalOpen: false,
      isEditMode: false,
      idCurrentItem: null,
      editItemData: {},
    },
  };
}

// export const fetchCompositionsItem = (itemType, itemId) => dispatch => {
//   dispatch({ type: FETCH_COMPOSITIONS_ITEM_REQUEST });

//   // if (itemId === null) {
//   //   return dispatch({
//   //     type: FETCH_COMPOSITIONS_ITEM_SUCCESS,
//   //     itemType,
//   //     payload: {
//   //       data: {},
//   //     },
//   //   });
//   // }

//   return axios
//     .get(`http://localhost:3000/${itemType}/${itemId}`)
//     .then(({ data }) => {
//       dispatch({
//         type: FETCH_COMPOSITIONS_ITEM_SUCCESS,
//         payload: {
//           data,
//           itemType,
//           itemId,
//         },
//       });
//     })
//     .catch(err => {
//       console.error(err);
//       dispatch({ type: FETCH_COMPOSITIONS_ITEM_FAILURE });
//     });
// };
