const defaultState = {
  user: null,
  userId: null,
  activePg: "",
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
};
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        userId: action.payload.id,
      };
    case "SET_PAGE":
      return { ...state, activePg: action.page };
    case "AUTHENTICATING_USER": //tells the app we're fetching
      debugger;
      return { ...state, authenticatingUser: true };
    case "AUTHENTICATED_USER":
      return { ...state, authenticatingUser: false };
    default:
      return state;
  }
};

export default userReducer;
