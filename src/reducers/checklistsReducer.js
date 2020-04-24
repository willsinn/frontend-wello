const defaultState = {
  checklists: [],
};
const checklistsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LISTS":
      return { ...state, boards: action.payload };
    case "ADD_LIST":
      debugger;
      return { ...state, boards: action.payload };
    default:
      return state;
  }
};
export default checklistsReducer;
