import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Users from './users';

const createRootReducer = history =>
  combineReducers({
    users: Users,
    router: connectRouter(history),
  });

export default createRootReducer;
