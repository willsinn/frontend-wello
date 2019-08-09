//
// export const fetchUser = () => {
//   return dispatch => {
//     fetch("http://localhost:3000/user/1", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       }
//     })
//       .then(response => {
//         console.log(response);
//         response.json();
//       })
//       .then(JSONresponse => dispatch(setUser(JSONresponse)));
//   };
// };
export const fetchUser = data => {
  console.log("running");
  return dispatch => {
    fetch("http://localhost:3000/user/1", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          response.throw();
        }
      })
      .then(JSONresponse => dispatch(setUser(JSONresponse)));
  };
};
export const setUser = userData => ({
  type: "SET_USER",
  payload: userData
});

// this action returns an anonymous function that is handled by
// redux-thunk (an example middleware). you are guaranteed that
// you will have access to state and dispatch here.
// which means, when your request finishes, you can dispatch another action.
// here we dispatch a NEW action so that the reducer can take the
// response data, which is found here. called `response`.
