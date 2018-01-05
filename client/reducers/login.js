
import {
  RECV_ERROR,
  REQ_DATA,
  RECV_DATA
} from '../actions/actionTypes';

const defaultState = {
  isLoggedIn: false,
  token: null,
};


export default (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case 'LOGIN'+ RECV_DATA:
      return {
        ...state,
        //redirectTo: action.error ? null : '/',
        token: action.data.token,
        isLoggedIn: true
      };
    default:
      return state;
  }
};