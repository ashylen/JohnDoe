import {
  OPEN_COMPOSITIONS_MODAL,
  CLOSE_COMPOSITIONS_MODAL
} from '../actions/modalActions';

const initialState = {
  compositions: {
    isModalOpen: false,
    isEditMode: false,
    idCurrentItem: null,
    editItemData: {},
  },
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_COMPOSITIONS_MODAL:
      return {
        ...state,
        [action.itemType]: {
          isModalOpen: action[action.itemType].isModalOpen,
          isEditMode: action[action.itemType].isEditMode,
          idCurrentItem: action[action.itemType].idCurrentItem,
          editItemData: action[action.itemType].editItemData,
        },
      };
    case CLOSE_COMPOSITIONS_MODAL:
      return {
        ...state,
        [action.itemType]: {
          isModalOpen: action[action.itemType].isModalOpen,
          isEditMode: action[action.itemType].isEditMode,
          idCurrentItem: action[action.itemType].idCurrentItem,
          editItemData: action[action.itemType].editItemData,
        },
      };
    default:
      return state;
  }
};

export default modalReducer;
