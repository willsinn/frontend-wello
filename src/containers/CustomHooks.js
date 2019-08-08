import React, { useState } from "react";

const useCreateProjectForm = callback => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      fetch("http://localhost:3000/user/1/projects/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          user_id: 1,
          title: inputs.title,
          description: inputs.description
        })
      }).then(setInputs(inputs => ({})));
    }
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  console.log(inputs);
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};
export default useCreateProjectForm;
