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

export const userSignup = (params) => {
  return (dispatch) => {
    fetch("http://localhost:3000/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: params.email,
        name: params.name,
        password: params.password,
        password_confirmation: params.password,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => console.log(JSONresponse));
  };
};
