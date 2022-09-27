import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Entrance from './components/Entrance';
import Register from './components/Register';
import Search from './components/Search';
import FindForm from './components/FindForm';
import { useDispatch } from 'react-redux';
import { initUsers } from './redux/metaInfoSlice';
import SuggestForm from './components/SuggestForm';
import { initServicers } from './redux/serviceSlice';
import AdvancedSearch from './components/AdvancedSearch';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initUsers());
    dispatch(initServicers());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='search' element={<Search />}>
        <Route path='find' element={<FindForm />}>
          <Route path='advanced' element={<AdvancedSearch />} />
        </Route>
        <Route path='suggest' element={<SuggestForm />} />
      </Route>
      <Route path='/register' element={<Register />} />
      {['*', 'entrance'].map(path => <Route path={path} element={<Entrance />} key={path} />)}
    </Routes>
  );
}

export default App;
