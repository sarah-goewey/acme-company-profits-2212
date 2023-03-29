import React, { useState, useEffect } from 'react';
import Companies from './Companies';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Company = ()=> {
  const [profits, setProfits] = useState([]);
  /*
  const params = useParams();
  const id = params.id;
  */
  const { id }  = useParams();

  useEffect(()=> {
    const fetchProfits = async()=> {
      const response = await axios.get(`https://www.acme-api.com/api/companies/${id}/companyProfits`);
      setProfits(response.data);
    };
    fetchProfits();
  }, [id]);
  return (
    <div className='twoColumn'>
      <Companies />
      <div>
        <ul>
          {
            profits.map( profit => {
              return (
                <li key={ profit.id }>
                  ${ profit.amount.toFixed(2) }
                  <br />
                  { new Date(profit.fiscalYear).toLocaleString() }
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Company;
