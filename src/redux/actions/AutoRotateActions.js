import { TOGGLE_AUTO_ROTATE } from "../StoreConstants";

export function toggleAutoRotate() {
   
  return (dispatch, getState) => {
    console.log(getState,")))")
  
    const currentState = getState().autoRotateStore.autoRotate;

    console.log(currentState,'---')
    dispatch({
      type: TOGGLE_AUTO_ROTATE,
      payload: !currentState,
    });
  };
}