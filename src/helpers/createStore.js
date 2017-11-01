import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import axios from 'axios';


export default (req) => {
const axiosInstance = axios.create({
  baseURL: 'http://react-ssr-api.herokuapp.com',
  headers: {cookie: req.get('cookie') || ''}
})
  //thanks to this axiosInstance my api server is going to think he received request from user not from server (while ssr)
  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
}
