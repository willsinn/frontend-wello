// export const setBoardsArchives = (boards) => ({
//   type: "SET_ARCHIVES",
//   boards,
// });
export const setArchives = (archives) => ({
  type: "SET_ARCHIVES",
  archives,
});

export const fetchAllArchived = (user) => {
  debugger;
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/user/${user.user_id}/archived`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        user_id: `${user.user_id}`,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(setArchives(JSONresponse)));
  };
};
