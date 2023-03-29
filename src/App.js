import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './Nav';
import Companies from './Companies';
import Company from './Company';
import { fetchCompanies } from './store';
import { Routes, Route } from 'react-router-dom';

const App = ()=> {
  const dispatch = useDispatch();
  const { foo } = useSelector(state => state);

  useEffect(()=> {
    dispatch(fetchCompanies());
  }, []);
  return (
    <div>
      <h1>Acme Companies and Profits</h1>
      <Nav />
      <Routes>
        <Route path='/companies' element={ <Companies />} />
        <Route path='/companies/:id' element={ <Company />} />
      </Routes>
    </div>
  );
};

export default App;
