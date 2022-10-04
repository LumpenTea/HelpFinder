import React from 'react'
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Search = () => {
  return (
    <div className='container mt-3'>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default Search