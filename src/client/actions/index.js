export const FETCH_USERS = 'FETCH_USERS';
//api is my customized axios instance created in client.js
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}
