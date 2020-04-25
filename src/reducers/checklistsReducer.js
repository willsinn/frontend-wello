const defaultState = {
  checklists: [],
  items: [],
};
const checklistsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LISTS":
      return { ...state, checklists: action.checklists };
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
    case "REMOVE_CHECKLIST":
      const remainingLists = state.checklists.filter(
        (checklist) => checklist.id !== action.checklist.id
      );
      return { ...state, checklists: remainingLists };
    case "ADD_LIST_ITEM":
      const targetList = state.checklists.filter(
        (checklist) => checklist.id === action.item.task_checklist_id
      );
      return {
        ...state,
        checklists: {
          ...state.checklists,
          items: [...state.checklist.task_checklist_items, action.item],
        },
      };
    default:
      return state;
  }
};
export default checklistsReducer;
