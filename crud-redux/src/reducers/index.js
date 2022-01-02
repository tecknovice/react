import { combineReducers } from "redux";

export const ActionType = {
  CREATE: "CREATE",
  READ: "READ",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

const postReducer = (state = [], action) => {
  switch (action.type) {
    case ActionType.READ:
      return action.payload;
    case ActionType.CREATE:
      return [...state, action.payload];
    case ActionType.UPDATE:
      const newItems = JSON.parse(JSON.stringify(state));
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

export default combineReducers({
  posts: postReducer,
});
