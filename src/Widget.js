import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

const Widget = ()=> {
  const { widgets } = useSelector(state => state);
  const { id } = useParams();
  return (
    <ul>
      {
        widgets.map( widget => {
          return (
            <li key={ widget.id } className={ widget.id === id ? 'selected': ''}>
              <Link to={`/widgets/${widget.id}`}>
                { widget.name }
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
};

export default Widget;