import React from 'react';
import { useSelector } from 'react-redux';

const Widgets = ()=> {
  const { widgets } = useSelector(state => state);
  return (
    <ul>
      {
        widgets.map( widget => {
          return (
            <li key={ widget.id }>
              { widget.name }
            </li>
          );
        })
      }
    </ul>
  );
};

export default Widgets;
