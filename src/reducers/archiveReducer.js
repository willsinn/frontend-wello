const defaultState = {
  archives: [],
};
const archiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ARCHIVES":
      console.log(action.archives);
      debugger;
      return { ...state };
    default:
      return state;
  }
};
export default archiveReducer;
