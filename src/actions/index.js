// TYPES
const ROOT_URL = "http://localhost:3000"
export const fetchCurrentUser = () => {
  return dispatch => {
    fetch(`${ROOT_URL}/`+, {
      method: "GET"
    })
      .then(response => response.json())
      .then(JSONResponse => dispatch(setCurrentUser(JSONResponse.user)));
  };
};


export const setCurrentUser = userData => ({
  type: "SET_CURRENT_USER",
  payload: userData
});
