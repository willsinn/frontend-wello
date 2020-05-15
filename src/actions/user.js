export const setUser = (userData) => ({
  type: "SET_USER",
  payload: userData,
});
export const setPage = (page) => ({
  type: "SET_PAGE",
  page,
});
export const fetchUser = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/user/1", {
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

// ****************************************** Auth

export const loginUser = (username, password) => {
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
      /* {username: will, pw: will} */
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

export const fetchCurrentUser = () => {
  // takes the token in localStorage and finds out who it belongs to
  return (dispatch) => {
    dispatch(authenticatingUser()); //tells the app we are fetching
    fetch("http://localhost:3000/api/v1/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)));
  };
};

export const setUpUser = (username, password) => {
  return (dispatch) => {
    dispatch({ type: "AUTHENTICATING_USER" });
    fetch("http://localhost:3000/api/v1/users", {
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
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      /* {username: will, pw: will} */
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

export const setCurrentUser = (userData) => ({
  type: "SET_CURRENT_USER",
  payload: userData,
});

export const failedLogin = (errorMsg) => ({
  type: "FAILED_LOGIN",
  payload: errorMsg,
});

export const authenticatingUser = () => ({ type: "AUTHENTICATING_USER" });
