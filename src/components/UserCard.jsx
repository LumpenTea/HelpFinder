import React from 'react'
import { useSelector } from 'react-redux';

const UserCard = () => {
    
    const { firstName, lastName, phoneNumber, username } = useSelector(state => state.metaInfo.currentUser);
    
    return (
        <div className='row mt-5'>
            <img src='https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_ct||117||contestfile_1&flp=1554116576-13511971185ca1efe0bcd5a0-26602492.jpg' alt='company' className='col-sm-2' />
            <div className='ms-1 mt-4 col-sm-7'>
                <h3 className='w-100'>User name: {username} </h3>
                <h4 className='w-100'>Name: {firstName} {lastName}</h4>
                <h4 className='w-100'>Telephone: {phoneNumber} </h4>
            </div>
        </div>
    )
}

export default UserCard