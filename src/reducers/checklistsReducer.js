const defaultState = {
  checklists: [],
};
const checklistsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LISTS":
      return { ...state, checklists: [...action.checklists] };
    case "ADD_LIST":
      return { ...state, checklists: [...state.checklists, action.checklist] };
    case "UPDATE_CHECKLIST":
      const updatedLists = state.checklists.map((checklist) => {
        if (checklist.id === action.checklist.id) {
          return action.checklist;
        } else {
          return checklist;
        }
      });
      return { ...state, checklists: updatedLists };
    default:
      return state;
  }
};
export default checklistsReducer;
