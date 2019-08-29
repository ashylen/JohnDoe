import { OPEN_COMPOSITIONS_MODAL, CLOSE_COMPOSITIONS_MODAL } from '../actions/modalActions';

const initialState = {
  isCompositionsModalOpen: false,
  isEditMode: false,
  idCurrentItem: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_COMPOSITIONS_MODAL:
      return {
        ...state,
        isCompositionsModalOpen: action.isCompositionsModalOpen,
        isEditMode: action.isEditMode,
        idCurrentItem: action.idCurrentItem,
      };
    case CLOSE_COMPOSITIONS_MODAL:
      return {
        ...state,
        isCompositionsModalOpen: action.isCompositionsModalOpen,
        isEditMode: action.isEditMode,
        idCurrentItem: action.idCurrentItem,
      };
    default:
      return state;
  }
};

export default modalReducer;
