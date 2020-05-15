const defaultState = {
  user: null,
  userId: null,
  activePg: "",
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
};
const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        userId: action.payload.id,
      };
    case "SET_PAGE":
      return { ...state, activePg: action.page };
    case "SET_CURRENT_USER":
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        authenticatingUser: false,
      };
    case "AUTHENTICATING_USER": //tells the app we're fetching
      return { ...state, authenticatingUser: true };
    case "AUTHENTICATED_USER":
      return { ...state, authenticatingUser: false };
    case "FAILED_LOGIN": //for error handling
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
        authenticatingUser: false,
      };
    case "SIGNUP_USER":
      return {};
    default:
      return state;
  }
};

export default usersReducer;
