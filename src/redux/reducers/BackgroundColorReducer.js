import { SET_BACKGROUND_COLOR } from "../StoreConstants";

const initialState = {
  backgroundColor: "#aeaeae", 
};

const BackgroundColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.payload,
      };
    default:
      return state;
  }
};

export default BackgroundColorReducer;