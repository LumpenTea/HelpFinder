import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/configureStore';
import { cleanScreenMessage, registerAction } from '../redux/metaInfoSlice';
import style from '../styles/register.module.css'

const Register = () => {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatedPassword, setRepeatedPassword] = useState<string>('');

    const dispatch = useDispatch();
    const { message, messageColor } = useSelector((state: RootState) => state.metaInfo);

    return (
        <div className={`${style.box} d-flex align-items-center justify-content-center`}>
            <div className='text-center'>
                <input onChange={(e: React.FormEvent<HTMLInputElement>) => setFirstName(e.currentTarget.value)} className={`${style.input} col-sm-8`} placeholder='First Name' value={firstName} />
                <input onChange={(e: React.FormEvent<HTMLInputElement>) => setLastName(e.currentTarget.value)} className={`${style.input} col-sm-8`} placeholder='Last Name' value={lastName} />
                <input onChange={(e: React.FormEvent<HTMLInputElement>) => setPhoneNumber(e.currentTarget.value)} className={`${style.input} col-sm-8`} placeholder='Phone number' value={phoneNumber} />
                <input onChange={(e: React.FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)} className={`${style.input} col-sm-8`} placeholder='username' value={username} />
                <input onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} className={`${style.input} col-sm-8`} type='password' placeholder='password' value={password} />
                <input onChange={(e: React.FormEvent<HTMLInputElement>) => setRepeatedPassword(e.currentTarget.value)} className={`${style.input} col-sm-8`} type='password' placeholder='Repeat Password' value={repeatedPassword} />

                <h4 className={`${messageColor} mt-2`}>{message}</h4>

                <button onClick={() =>
                    dispatch(registerAction({
                        firstName: firstName,
                        lastName: lastName,
                        phoneNumber: phoneNumber,
                        username: username,
                        password: password,
                        repeatedPassword: repeatedPassword
                    }
                    ))} className='btn btn-success mt-2'>Register</button>
                
                <Link to='/entrance'>
                    <button onClick={() => dispatch(cleanScreenMessage())} className='btn btn-info mt-2 ms-2'>Back to logining</button>
                </Link>
            </div>
        </div>
    )
}

export default Register