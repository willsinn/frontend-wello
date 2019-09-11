export const setUser = userData => ({
  type: "SET_USER",
  payload: userData
});

export const fetchUser = data => {
  return dispatch => {
    fetch("https://backend-wello.herokuapp.com/user/1", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        response.throw();
      }
    });
    // .then(JSONresponse => console.log(JSONresponse));
  };
};

export const setTrue = () => ({ type: "SET_TRUE" });
export const setFalse = () => ({ type: "SET_FALSE" });
export const setNull = () => ({ type: "SET_NULL" });
export const incrementCounter = () => ({ type: "INCREMENT_COUNTER" });
