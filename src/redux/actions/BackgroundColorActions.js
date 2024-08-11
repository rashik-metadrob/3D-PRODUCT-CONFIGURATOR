import { SET_BACKGROUND_COLOR } from "../StoreConstants";

export function setBackgroundColor(color) {
  return (dispatch) => {
    dispatch({
      type: SET_BACKGROUND_COLOR,
      payload: color,
    });
  };
}