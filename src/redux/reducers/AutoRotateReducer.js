import { TOGGLE_AUTO_ROTATE } from "../StoreConstants";

const initialState = {
  autoRotate: true, 
};

const AutoRotateReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_AUTO_ROTATE:
      return {
        ...state,
        autoRotate: action.payload,
      };
    default:
      return state;
  }
};

export default AutoRotateReducer;