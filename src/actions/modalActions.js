export const OPEN_COMPOSITIONS_MODAL = 'OPEN_COMPOSITIONS_MODAL';
export const CLOSE_COMPOSITIONS_MODAL = 'CLOSE_COMPOSITIONS_MODAL';

export function openCompositionsModal(isEditMode, idCurrentItem) {
  return {
    type: OPEN_COMPOSITIONS_MODAL,
    isCompositionsModalOpen: true,
    isEditMode,
    idCurrentItem,
  };
}

export function closeCompositionsModal() {
  return {
    type: CLOSE_COMPOSITIONS_MODAL,
    isCompositionsModalOpen: false,
    isEditMode: false,
    idCurrentItem: null,
  };
}
