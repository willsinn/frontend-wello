const defaultState = {
  user: null,
  userId: null,
  isActive: null
};
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_NULL":
      return {
        ...state,
        isActive: null
      };
    case "SET_FALSE":
      return {
        ...state,
        isActive: false
      };
    case "SET_TRUE":
      return {
        ...state,
        isActive: true
      };
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
