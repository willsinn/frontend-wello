const defaultState = {
  archived: [],
};
const archiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ARCHIVED":
      return state;
    default:
      return state;
  }
};
export default archiveReducer;
