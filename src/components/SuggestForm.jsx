import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addService } from '../redux/serviceSlice';
import UserCard from './UserCard';

const SuggestForm = () => {

  const dispatch = useDispatch();
  const { username, firstName, lastName, phoneNumber } = useSelector(state => state.metaInfo.currentUser);

  const [serviceName, setServiceName] = useState('');
  const [price, setPrice] = useState(0);
  const [adress, setAdress] = useState('');
  const [description, setDesription] = useState('');

  return (
    <div className='container'>

      <UserCard />

      <div className='row mt-3 text-center border d-flex justify-content-center align-items-center'>
        <h2>Service Form</h2>

        <input onChange={e => setServiceName(e.target.value)} value={serviceName} placeholder='Service name' className='w-75' />
        <input onChange={e => setPrice(e.target.value)} value={price} placeholder='Price' type='number' className='w-75 mt-2' />
        <input onChange={e => setAdress(e.target.value)} value={adress} placeholder='Adress' className='w-75 mt-2' />
        <textarea onChange={e => setDesription(e.target.value)} value={description} placeholder='Description' className='w-75 mt-2 mb-4' />

        <button className='offset-5 col-sm-2 btn btn-danger mb-3'>Clear</button>
        <button onClick={() => dispatch(addService({
          username: username,
          name: `${firstName} ${lastName}`,
          phoneNumber: phoneNumber,
          serviceName: serviceName,
          price: price,
          adress: adress,
          description: description
        }))} className='ms-2 col-sm-2 btn btn-success mb-3'>Add</button>

        <h4 className='offset-5'></h4>
      </div>

    </div>
  )
}

export default SuggestForm