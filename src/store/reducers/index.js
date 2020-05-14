import { combineReducers } from "redux";
import tweetReducer from "./tweet";
import profileReducer from "./profile";

export default combineReducers({
  tweetReducer,
  profileReducer,
});
