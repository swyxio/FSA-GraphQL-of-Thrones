/**
 * ACTION TYPES
 */
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

/**
 * INITIAL STATE
 */
const defaultModalState = true;

/**
 * ACTION CREATORS
 */
export const openModal = () => ({ type: OPEN_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });

/**
 * REDUCER
 */
export default function(state = defaultModalState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return false;
    default:
      return state;
  }
}
