export const setUser = (userData) => ({
  type: "SET_USER",
  payload: userData,
});
export const setPage = (page) => ({
  type: "SET_PAGE",
  page,
});
export const authenticatingUser = () => ({ type: "AUTHENTICATING_USER" });

export const fetchUser = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/user/1", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    // .then(response => {
    //   if (response.ok) {
    //     return response.json();
    //   } else {
    //     response.throw();
    //   }
    // });
    // .then(JSONresponse => console.log(JSONresponse));
  };
};

export const userLogin = (username, password) => {
  debugger;
  return (dispatch) => {
    dispatch({ type: "AUTHENTICATING_USER" });
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((JSONResponse) => {
        localStorage.setItem("jwt", JSONResponse.jwt);
        dispatch({ type: "SET_CURRENT_USER", payload: JSONResponse.user });
      })
      .catch((r) =>
        r
          .json()
          .then((e) => dispatch({ type: "FAILED_LOGIN", payload: e.message }))
      );
  };
};
