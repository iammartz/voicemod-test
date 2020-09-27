import { combineReducers } from "redux";
import voiceReducer from "./voiceReducer";
import favouriteVoicesReducer from "./favouriteVoicesReducer";
export default combineReducers({
  voiceReducer,
  favouriteVoicesReducer,
});
