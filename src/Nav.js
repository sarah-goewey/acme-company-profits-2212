import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

const Nav = ()=> {
  const { companies } = useSelector(state => state);
  return (
    <nav>
      <Link to='/companies'>Companies ({ companies.length})</Link>
    </nav>
  );
};

export default Nav;
