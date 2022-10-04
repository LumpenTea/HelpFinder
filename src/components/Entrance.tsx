import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { cleanScreenMessage, logInAction } from '../redux/metaInfoSlice';
import { Link, useNavigate } from 'react-router-dom';
import style from '../styles/entrance.module.css'
import { RootState, useAppDispatch } from '../redux/configureStore';

const Entrance = () => {

    const { link, message, isLogin } = useSelector((state: RootState) => state.metaInfo);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        if (isLogin) navigate(link)
    }, [isLogin, link, navigate]);

    return (
        <div className={`${style.box} d-flex justify-content-center align-items-center`}>
            <div className='text-center'>
                <input onChange={e => setUsername(e.target.value)} className={`${style.input} col-sm-12 text-center`} placeholder='Login' value={username} />
                <input onChange={e => setPassword(e.target.value)} className={`${style.input} col-sm-12 text-center`} placeholder='Password' type='password' value={password} />

                <div className='text-center'>
                    <h4 className='text-danger mt-2'>{message}</h4>

                    <button onClick={() => {
                        dispatch(logInAction({ username: username, password: password }))

                    }} className='btn btn-success ms-2'>Log in</button>
                    <Link to='/register'>
                        <button onClick={() => dispatch(cleanScreenMessage())} className='btn btn-info ms-2'>Register</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Entrance