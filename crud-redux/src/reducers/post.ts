import { combineReducers } from "redux";
import { Action } from "../interfaces/Action";
import { ActionType } from "../interfaces/ActionType";
import { Post } from "../interfaces/Post";

export const postReducer = (state: Post[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.READ:
      return action.payload;
    case ActionType.CREATE:
      return [...state, action.payload];
    case ActionType.UPDATE:
      const newItems: Post[] = JSON.parse(JSON.stringify(state));
      const updateIndex = newItems.findIndex(
        (item) => item.id === action.payload.id
      );
      newItems.splice(updateIndex, 1, action.payload);
      return newItems;
    case ActionType.DELETE:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
