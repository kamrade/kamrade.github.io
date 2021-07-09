import React from 'react';
import { NavLink } from 'react-router-dom';

export const MainPage = () => {


  return (
    <div className={`container`}>
      <h1>This is the Main Page</h1>
      <NavLink exact to='/apps/typing'>Showcase</NavLink>
    </div>
  );
}
