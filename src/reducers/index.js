import { combineReducers } from "redux";
import courses from "./courses";
import auth from "./auth";
import profile from "./profile";
import listuser from './listUser';
import listblogs from "./blogs"
import listtypeblogs from "./typeblogs"
import listlessions from "./lessions"

const rootReducer = combineReducers({
  // nơi khai báo cac reducer con
  courses,
  auth,
  profile,
  listuser,
  listblogs,
  listtypeblogs,
  listlessions
});

export default rootReducer;
