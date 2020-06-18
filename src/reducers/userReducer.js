const defaultState = {
  user: null,
  activePg: "",
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
};
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log(
        `%c USER-LOGIN-PAYLOAD, userReducer`,
        "color: red",
        action.payload
      );
      return {
        ...state,
        user: action.payload.user,
        loggedIn: true,
        authenticatingUser: false,
      };
    case "SET_PAGE":
      return { ...state, activePg: action.page };
    case "AUTHENTICATING_USER": //tells the app we're fetching
      return { ...state, authenticatingUser: true };
    case "AUTHENTICATED_USER":
      return { ...state, authenticatingUser: false };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "USER_LOGOUT":
      localStorage.clear();
      return { ...state, user: null, loggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
