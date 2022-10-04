import React from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/configureStore';
import { logOutAction } from '../redux/metaInfoSlice';
import { searchLeaving } from '../redux/serviceSlice';

const Navigation = () => {

    const dispatch = useAppDispatch();

    return (
        <div className='row'>
            <Link to='suggest' className='col-sm'>
                <button onClick={() => dispatch(searchLeaving())} className='w-100 btn btn-info'>Suggest service</button>
            </Link>
            <Link to='find' className='col-sm'>
                <button onClick={() => dispatch(searchLeaving())} className='w-100 btn btn-info'>Find specialist</button>
            </Link>
            <Link to='calendar' className='col-sm'>
                <button onClick={() => dispatch(searchLeaving())} className='w-100 btn btn-info'>Calendar</button>
            </Link>
            <Link to='chat' className='col-sm'>
                <button onClick={() => dispatch(searchLeaving())} className='w-100 btn btn-info'>Chat</button>
            </Link>
            <Link className='col-sm-1' to='/entrance'>
                <button onClick={() => {
                    dispatch(logOutAction());
                    dispatch(searchLeaving());
                }} className='w-100 btn btn-danger'>Log out</button>
            </Link>
        </div>
    )
}

export default Navigation