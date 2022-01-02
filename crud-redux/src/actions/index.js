import apiService from "../apis";
import { ActionType } from "../reducers";

export const createPost = (item) => async (dispatch) => {
  const res = await apiService.post("/posts", { ...item });
  dispatch({ type: ActionType.CREATE, payload: res.data });
};

export const readPosts = () => async (dispatch) => {
  const res = await apiService.get("/posts");
  dispatch({ type: ActionType.READ, payload: res.data });
};

export const updatePost = (item) => async (dispatch) => {
  const res = await apiService.put(`/posts/${item.id}`, { ...item });
  dispatch({ type: ActionType.UPDATE, payload: res.data });
};

export const deletePost = (id) => async (dispatch) => {
  const res = await apiService.delete(`/posts/${id}`);
  dispatch({ type: ActionType.DELETE, payload: id });
};
