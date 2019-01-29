import axios from 'axios';
// console.log(
//   'here is axios.post: ',
//   axios
//     .post('/api/contact', {
//       contactName: 'spot@dog.com',
//       contactPhone: '56789',
//       contactMessage: 'I am needing more sink help!',
//     })
//     .then(res => {
//       console.log(res);
//     })
// );

// ACTION TYPE

const ADD_EMAIL = 'ADD_EMAIL';

// ACTION CREATORS
export const createEmail = message => ({ type: ADD_EMAIL, message });

// THUNK CREATORS
// export const addEmail = newMessage => {
//   console.log('newMessage: ', newMessage);
//   return function thunk(dispatch) {
//     const options = {
//       method: 'POST',
//       headers: { 'content-type': 'application/json' },
//       data: newMessage,
//       url: '/api/contact',
//     };
//     return axios(options)
//       .then(message => {
//         console.log('message: ', message);
//         dispatch(createEmail(message));
//       })
//       .catch(err => console.error(err));
//   };
// };

export const addEmail = newMessage => {
  console.log('newMessage: ', newMessage);
  return dispatch => {
    axios
      .post('/api/contact', newMessage)
      .then(res => {
        console.log(res);
        dispatch(createEmail(res.data));
      })
      .catch(err => console.error(err));
  };
  //   axios
  //     .post('/api/contact', newMessage)
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => console.error(err));
};

// REDUCER
const emailReducer = (state = [], action) => {
  console.log('in the switch now!');
  switch (action.type) {
    case ADD_EMAIL: {
      return [...state, action.message];
    }
    default:
      return state;
  }
};

export default emailReducer;
