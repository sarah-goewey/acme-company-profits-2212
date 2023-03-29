import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import logger from 'redux-logger';


export const fetchCompanies = ()=> {
  return async(dispatch)=> {
    const response = await axios.get('https://www.acme-api.com/api/companies');
    dispatch({ type: 'SET_COMPANIES', companies: response.data });
  };
};
const foo = (state = 'bar', action)=> {
  return state;
};

const companies = (state = [], action)=> {
  if(action.type === 'SET_COMPANIES'){
    return action.companies;
  }
  return state;
};

const reducer = combineReducers({
  foo,
  companies
});

const store = createStore(reducer, applyMiddleware(logger, thunk));


export default store;
