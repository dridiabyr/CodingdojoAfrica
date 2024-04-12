import React, {useReducer } from "react";

const initialState = {
  firstname: {
    value: "",
    error: null,
  },
  lastname: {
    value: "",
    error: null,
  },
  email: {
    value: "",
    error: null,
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        [action.field]: {
          value: action.value,
          error: action.value === "" ? "field cannot be empty" : "",
        },
      };
    case "submit":
      let hasError = false;
      const newState = {};
      Object.keys(state).forEach((field) => {
        newState[field] = {
          ...state[field],
          error:
            state[field].value === "" ? "Field cannot be empty" : "",
        };
        if (newState[field].error !== "") {
          hasError = true;
        }
      });
      return hasError ? newState : initialState;
    default:
      return state;
  }
};
const Form2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    dispatch({ type: "change", field, value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "submit" });
  };
  return (
    <form onSubmit={handleSubmit}>
      {JSON.stringify(state)}
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={state.firstName.value}
          onChange={handleChange("firstName")}
        />
            {" "}
        {state.firstName.error !== null && (
          <p className="error">{state.firstName.error}</p>
        )}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={state.lastName.value}
          onChange={handleChange("lastName")}
        />
        {state.lastName.error !== null && (
          <p className="error">{state.lastName.error}</p>
        )}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={state.email.value}
          onChange={handleChange("email")}
        />
        {state.email.error !== null && (
          <p className="error">{state.email.error}</p>
        )}
      </div>
      <button type="submit"> submit </button>
    </form>
  );
};

export default Form2;
