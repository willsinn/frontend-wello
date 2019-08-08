const defaultState = {
  user: null
};
const user = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {...state, action.payload};

    default:
      return state;
  }
};

export default user;
