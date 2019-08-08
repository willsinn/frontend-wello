import React, { useState } from "react";

const useCreateProjectForm = callback => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
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
