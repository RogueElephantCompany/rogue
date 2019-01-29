import axios from 'axios';

// ACTION TYPE

const ADD_EMAIL = 'ADD_EMAIL';

// ACTION CREATORS
export const createEmail = message => ({ type: ADD_EMAIL, message });

// THUNK CREATORS

export const addEmail = newMessage => {
  return dispatch => {
    axios
      .post('/api/contact', newMessage)
      .then(res => {
        dispatch(createEmail(res.data));
      })
      .catch(err => console.error(err));
  };
};

// REDUCER
const emailReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_EMAIL: {
      return [...state, action.message];
    }
    default:
      return state;
  }
};

export default emailReducer;
