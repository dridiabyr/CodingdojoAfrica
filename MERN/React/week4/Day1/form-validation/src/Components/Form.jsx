import React, { useReducer } from 'react';

const initialState = {
  firstName: {
    value: '',
    error: ''
  },
  lastName: {
    value: '',
    error: ''
  },
  email: {
    value: '',
    error: ''
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        [action.field]: {
          value: action.value,
          error: action.value === '' ? 'Field cannot be empty' : ''
        }
      };
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch({ type: initialState , value });
  };

  return (
    <form>
        {JSON.stringify(state)}
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={state.firstName.value}
          onChange={handleChange('firstName')}
        />
    {state.firstName.error !== null && (
        <p className="error">{state.firstName.error}</p>
    )}

      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={state.lastName.value}
          onChange={handleChange('lastName')}
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
          onChange={handleChange('email')}
        />
        {state.email.error !== null && (
          <p className="error">{state.email.error}</p>
        )}
      </div>
    </form>
  );
};

export default Form;
