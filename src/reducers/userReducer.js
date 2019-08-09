const defaultState = {
  user: null,
  userId: null
};
const userReducer = (state = defaultState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        userId: action.payload.id
      };

    default:
      return state;
  }
};

export default userReducer;
