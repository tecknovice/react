import { ActionType } from "./ActionType";
import { Post } from "./Post";

export interface CreatePostAction {
  type: ActionType.CREATE;
  payload: Post;
}

export interface ReadPostsAction {
  type: ActionType.READ;
  payload: Post[];
}

export interface UpdatePostAction {
  type: ActionType.UPDATE;
  payload: Post;
}

export interface DeletePostAction {
  type: ActionType.DELETE;
  payload: number;
}

export type Action =
  | CreatePostAction
  | ReadPostsAction
  | UpdatePostAction
  | DeletePostAction;
