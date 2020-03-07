const defaultState = {
  user: null,
  userId: null,
  activePg: ""
};
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        userId: action.payload.id
      };
    case "SET_PAGE":
      console.log(action);
      return { ...state, activePg: action.page };
    default:
      return state;
  }
};

export default userReducer;
