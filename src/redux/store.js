import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./app-reducer";
import {paginationReducer} from "./pagination-reducer";

const state = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  pagination: paginationReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(state, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

export default store

window.store = store
