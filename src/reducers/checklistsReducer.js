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

    case "ADD_ITEM":
      const updatedChecklists = state.checklists.map((checklist) => {
        if (checklist.id === action.item.checklist_id) {
          const updatedItems = [...checklist.items, action.item];
          return { ...checklist, items: updatedItems };
        } else {
          return checklist;
        }
      });
      return {
        ...state,
        checklists: updatedChecklists,
      };
    case "UPDATE_ITEM":
      const updateChecklistItems = state.checklists.map((checklist) => {
        if (checklist.id === action.item.checklist_id) {
          const updatedItems = checklist.items.map((item) => {
            if (item.id === action.item.id) {
              return action.item;
            } else {
              return item;
            }
          });
          const updatedChecklist = {
            ...checklist,
            items: updatedItems,
          };
          return updatedChecklist;
        } else {
          return checklist;
        }
      });
      return {
        ...state,
        checklists: updateChecklistItems,
      };
    case "REMOVE_ITEM":
      const removedChecklistItem = state.checklists.map((checklist) => {
        if (checklist.id === action.item.checklist_id) {
          const remainingItems = checklist.items.filter(
            (item) => item.id !== action.item.id
          );

          const updatedChecklist = {
            ...checklist,
            items: remainingItems,
          };
          return updatedChecklist;
        } else {
          return checklist;
        }
      });
      return {
        ...state,
        checklists: removedChecklistItem,
      };
    default:
      return state;
  }
};
export default checklistsReducer;
