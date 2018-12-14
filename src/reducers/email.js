import axios from 'axios';

// ACTION TYPE

const ADD_EMAIL = 'ADD_EMAIL';

// ACTION CREATORS
export const createEmail = message => ({ type: ADD_EMAIL, message });

// THUNK CREATORS
export const addEmail = newMessage => {
  console.log('newMessage: ', newMessage);
  return function thunk(dispatch) {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: newMessage,
      url: '/api/contact',
    };
    return axios(options)
      .then(message => {
        console.log(message);
        dispatch(createEmail(message));
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
