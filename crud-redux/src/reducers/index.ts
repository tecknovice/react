import { combineReducers } from "redux";
import { Post } from "../interfaces/Post";
import { postReducer } from "./post";

export interface StoreState {
  posts: Post[];
}

export default combineReducers<StoreState>({
  posts: postReducer,
});
