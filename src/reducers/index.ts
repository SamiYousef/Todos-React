import { combineReducers } from "redux";

import todos from "./todos";
import link from "./link";

export default combineReducers({ todos, link });
