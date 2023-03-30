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

export const fetchWidgets = ()=> {
  return async(dispatch)=> {
    const response = await axios.get('/api/widgets');
    dispatch({ type: 'SET_WIDGETS', widgets: response.data });
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

const widgets = (state = [], action)=> {
  if(action.type === 'SET_WIDGETS'){
    return action.widgets;
  }
  return state;
};

const reducer = combineReducers({
  foo,
  companies,
  widgets
});

const store = createStore(reducer, applyMiddleware(logger, thunk));


export default store;
