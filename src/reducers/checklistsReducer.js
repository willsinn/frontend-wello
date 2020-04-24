const defaultState = {
  checklists: [],
};
const checklistsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LISTS":
      return { ...state, boards: action.payload };
    case "ADD_LIST":
      return { ...state, checklists: [...state.checklists, action.checklist] };
    default:
      return state;
  }
};
export default checklistsReducer;
