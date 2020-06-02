const defaultState = {
  archived: [],
};
const archivedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ARCHIVED":
      return state;
    default:
      return state;
  }
};
export default archivedReducer;
