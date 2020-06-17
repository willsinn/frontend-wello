export const setUser = (userData) => ({
  type: "SET_USER",
  payload: userData,
});
export const setPage = (page) => ({
  type: "SET_PAGE",
  page,
});
export const authenticatingUser = () => ({ type: "AUTHENTICATING_USER" });

export const setError = (error) => ({
  type: "SET_ERROR",
  error,
});

export const userLogout = () => ({ type: "USER_LOGOUT" });

export const userLogin = (email, password) => {
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
          email: email,
          password: password,
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          dispatch(setError("Incorrect username or password."));
          throw response;
        }
      })
      .then((JSONResponse) => {
        localStorage.setItem("jwt", JSONResponse.jwt);
        dispatch(setUser(JSONResponse));
      });
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
      .then((JSONResponse) => dispatch(setUser(JSONResponse)));
  };
};
export const userSignup = (user) => {
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
          email: user.email,
          password: user.password,
          name: user.name,
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
        dispatch(setUser(JSONResponse));
      });
  };
};
