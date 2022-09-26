import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchService } from '../redux/serviceSlice';
import ServiceCard from './ServiceCard';

const FindForm = () => {

    const dispatch = useDispatch();
    const { services, searched, isSearching } = useSelector(state => state.search);
    const screenServices = isSearching ? searched : services;

    const [search, setSearch] = useState('');

    return (
        <div className='row mt-5'>

            <input onChange={e => setSearch(e.target.value)} value={search} className='offset-1 col-sm-8' placeholder='Find service' />
            <button onClick={() => dispatch(searchService(search))} className='col-sm-1 btn btn-success'>Find</button>
            <button className='btn btn-warning col-sm-1'>Settings</button>

            {screenServices.map(serviceInfo => <ServiceCard serviceInfo={serviceInfo} key={serviceInfo.serviceName} />)}

        </div>
    )
}

export default FindForm