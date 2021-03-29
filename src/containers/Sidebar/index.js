import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <ul className="sidebar__container">
      <li className="sidebar__item" onClick={() => dispatch(push('/admin/aeroplanes'))}>Aeroplanes</li>
      <li className="sidebar__item">Flights</li>
      <li className="sidebar__item">Passengers</li>
    </ul>
  )
}

export default Sidebar;
