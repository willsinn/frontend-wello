const defaultState = {
  checklists: [],
  items: [],
};
const checklistsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LISTS":
      return { ...state, checklists: action.checklists };
    case "ADD_LIST":
      console.log(action.payload);

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
      const targetChecklist = state.checklists.filter(
        (checklist) => checklist.id === action.item.task_checklist_id
      );
      console.log(targetChecklist, action.checklist);
      debugger;

      return {
        ...state,
        checklists: {
          ...state.checklists,
        },
      };
    default:
      return state;
  }
};
export default checklistsReducer;
