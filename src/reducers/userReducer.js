import { setUser } from "../actions/user";
const defaultState = {
  user: {}
};
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { user: action.user.payload };
    default:
      return state;
  }
};

export default userReducer;
