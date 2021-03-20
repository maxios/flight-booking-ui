import { authenticate as authenticateApi } from '@/api';
import Cookies from 'js-cookie';

export const authenticate = data => {
  return dispatch => new Promise((resolve, reject) => {
    authenticateApi(data)
      .then(res => {
        Cookies.set(process.env.AUTH_COOKIE, res.data.auth_token)
        dispatch({
          type: 'authenticate',
          payload: res.data
        })
        resolve(res);
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}
