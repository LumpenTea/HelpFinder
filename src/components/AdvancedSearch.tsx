import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../redux/configureStore';
import { advancedSearch } from '../redux/serviceSlice';

const AdvancedSearch = () => {

    const [minPrice, setMinPrice] = useState<number | string>(0);
    const [maxPrice, setMaxPrice] = useState<number | string>(0);
    const [serviceName, setServiceName] = useState('');
    const [specialistName, setSpecialistName] = useState('');
    const [city, setCity] = useState('');

    const dispatch = useAppDispatch();


    return (
        <div className='text-center mt-2'>
            <h3>Search Settings</h3>
            <div className='mt-3 border border-dark text-center' >
                <div className='text-center mt-3 ms-5 me-5 mb-3'>
                    <label htmlFor='price' className='me-3 h4'>Price:</label>
                    <input onChange={(e: React.FormEvent<HTMLInputElement>) => setMinPrice(+e.currentTarget.value)} value={minPrice} name='price' placeholder='min' type='number' className='me-3 w-25 text-center mt-2 mb-2 h5' />
                    <input onChange={(e: React.FormEvent<HTMLInputElement>) => setMaxPrice(+e.currentTarget.value)} value={maxPrice} placeholder='max' type='number' className=' w-25 text-center h5' />
                </div>
                <input onChange={(e: React.FormEvent<HTMLInputElement>) => setServiceName(e.currentTarget.value)} value={serviceName} placeholder='Service name' className='w-75 text-center mt-2 mb-3 ms-3 me-3 h5' />
                <input onChange={(e: React.FormEvent<HTMLInputElement>) => setSpecialistName(e.currentTarget.value)} value={specialistName} placeholder='Specialist name' className='w-75 text-center mb-3 ms-3 me-3 h5' />
                <input onChange={(e: React.FormEvent<HTMLInputElement>) => setCity(e.currentTarget.value)} value={city} placeholder='City' className='w-75 text-center ms-3 me-3 h5' />

                <div className='mb-3 mt-3 mb-2'>
                    <Link to='/search/find'>
                        <button onClick={() => dispatch(advancedSearch({
                            minPrice: minPrice! > 0 ? minPrice : '',
                            maxPrice: maxPrice! > 0 ? maxPrice : '',
                            serviceName: serviceName,
                            specialistName: specialistName,
                            city: city
                        }))} className='btn btn-success'>Search</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdvancedSearch