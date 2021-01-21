import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";

//prettier-ignore
export default combineReducers({ posts, auth });
