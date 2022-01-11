import { Dispatch } from "redux";
import apiService from "../apis";
import {
  CreatePostAction,
  ReadPostsAction,
  UpdatePostAction,
  DeletePostAction,
} from "../interfaces/Action";
import { ActionType } from "../interfaces/ActionType";
import { Post } from "../interfaces/Post";

export const createPost = (item: Post) => async (dispatch: Dispatch) => {
  const res = await apiService.post<Post>("/posts", { ...item });
  dispatch<CreatePostAction>({ type: ActionType.CREATE, payload: res.data });
};

export const readPosts = () => async (dispatch: Dispatch) => {
  const res = await apiService.get<Post[]>("/posts");
  dispatch<ReadPostsAction>({ type: ActionType.READ, payload: res.data });
};

export const updatePost = (item: Post) => async (dispatch: Dispatch) => {
  const res = await apiService.put<Post>(`/posts/${item.id}`, { ...item });
  dispatch<UpdatePostAction>({ type: ActionType.UPDATE, payload: res.data });
};

export const deletePost = (id: number) => async (dispatch: Dispatch) => {
  const res = await apiService.delete<number>(`/posts/${id}`);
  dispatch<DeletePostAction>({ type: ActionType.DELETE, payload: id });
};
