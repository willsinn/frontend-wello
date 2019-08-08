// TYPES
const ROOT_URL = "http://localhost:3000";
export const fetchCurrentUser = () => {
  return dispatch => {
    fetch(`${ROOT_URL}/users/1`)
      .then(response => response.json())
      .then(userData => dispatch(setCurrentUser(userData)));
  };
};

export const setCurrentUser = userData => ({
  type: "SET_CURRENT_USER",
  payload: userData
});
