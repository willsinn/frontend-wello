import { setUser, setUserId } from "../actions/user";
const defaultState = {
  user: {},
  id: ""
};
const userReducer = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { user: action.user.payload };
    case "SET_USER_ID":
      return { id: action.userId };
    default:
      return state;
  }
};

export default userReducer;
