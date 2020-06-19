const defaultState = {
  archives: [],
};
const archiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ARCHIVED":
      let archived = [];
      debugger;
      return { ...state, archives: archived };
    default:
      return state;
  }
};
export default archiveReducer;
