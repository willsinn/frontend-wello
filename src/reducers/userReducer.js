import { setUser } from "../actions/index.js";
const defaultState = {
  user: null
};
const userReducer = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { user: action.user.payload };
    default:
      return state;
  }
};

export default userReducer;
