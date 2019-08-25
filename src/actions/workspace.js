export const clearWorkspace = () => ({ type: "CLEAR_WORKSPACE" });

export const setWorkspace = workspace => ({
  type: "SET_WORKSPACE",
  workspace
});
export const addCard = card => ({
  type: "ADD_CARD",
  card
});

export const addItemCard = itemData => ({
  type: "ADD_ITEM_CARD",
  itemData
});
export const fetchWorkspace = (project, dispatch) => {
  return dispatch => {
    fetch(
      `http://localhost:3000/user/${project.user_id}/project/${project.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(JSONresponse => {
        dispatch(setWorkspace({ project: JSONresponse }));
      });
  };
};

export const postWorkspaceItem = (project, dispatch) => {
  return dispatch => {
    fetch(`http://localhost:3000/project/${project.workspace.id}/items/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        project_id: project.workspace.id,
        objective: project.objective
      })
    }).then(response => dispatch(fetchWorkspace(project.workspace)));
  };
};

export const fetchItem = (item, dispatch) => {
  return dispatch => {
    fetch(`http://localhost:3000/item/${item.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(JSONresponse => dispatch(addItemCard(JSONresponse)));
  };
};
export const postNewCard = (item, dispatch) => {
  return dispatch => {
    fetch(`http://localhost:3000/item/${item.item.id}/cards/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        subject: item.subject,
        item_id: item.item.id
      })
    })
      .then(response => response.json())
      .then(JSONresponse => dispatch(fetchItem({ id: JSONresponse.item_id })));
  };
};

export const deleteCard = (card, dispatch) => {
  return dispatch => {
    fetch(`http://localhost:3000/cards/delete/${card["id"]}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        id: card["id"]
      })
    }).then(response => dispatch(fetchItem({ id: card["item_id"] })));
  };
};

export const updateCard = (card, dispatch) => {
  return dispatch => {
    fetch(`http://localhost:3000/card/update/${card.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        id: card.id,
        [card.key]: card.value
      })
    }).then(response => console.log(response));
  };
};
