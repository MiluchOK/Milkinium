import actionTypes from './actionTypes';
import httpClient from '../../clients/httpClient';
import authClient from '../../clients/authClient';

// export const signIn = ({ email, password }) => (dispatch) => {
//   console.log("FOFOFOOFOFOFOFOF");
//   dispatch({ type: actionTypes.SIGN_IN });
//   return httpClient
//     .post('/authenticate', { email, password })
//     .then(() => console.log("Authenticated."))
//     .catch(() => console.log("Auth failed."))
// };

export const signIn = ({email, password}) => {
  return {
    type: actionTypes.SIGN_IN,
    payload: httpClient.post('/authenticate', {email, password})//.then((res) => res.data)
  }
};

export const getCurrentUser = () => {
  return {
    type: actionTypes.GET_CURRENT_USER,
    payload: authClient.getUserData
  }
};
