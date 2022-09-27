import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { searchService } from '../redux/serviceSlice';
import ServicesList from './ServicesList';

const FindForm = () => {

    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    return (
        <div className='row mt-5'>

            <input onChange={e => setSearch(e.target.value)} value={search} className='offset-1 col-sm-7' placeholder='Find service' />
            <button onClick={() => dispatch(searchService(search))} className='col-sm-1 btn btn-success ms-2'>Find</button>
            <Link to='advanced' className='col-sm-2'>
                <button className='w-100 btn btn-warning'>Advanced search</button>
            </Link>

            <Outlet />

            <ServicesList />

        </div>
    )
}

export default FindForm