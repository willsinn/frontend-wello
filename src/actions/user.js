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
export const updateUser = (user) => ({
  type: "UPDATE_USER",
  user,
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
          dispatch(setError("Incorrect email address and / or password."));
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
  return (dispatch) => {
    dispatch({ type: "AUTHENTICATING_USER" }); //tells the app we are fetching
    fetch("http://localhost:3000/api/v1/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          localStorage.clear();
          throw response;
        }
      })
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
        if (response.ok) {
          return response.json();
        } else {
          dispatch(setError(`There is an existing account for ${user.email}.`));
          throw response;
        }
      })
      .then((JSONResponse) => {
        localStorage.setItem("jwt", JSONResponse.jwt);
        dispatch(setUser(JSONResponse));
      });
  };
};
export const changeUserAttrs = (user) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/user/update/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        user: {
          id: `${user.id}`,
          name: `${user.name}`,
          email: `${user.email}`,
        },
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(updateUser(JSONresponse)));
  };
};
