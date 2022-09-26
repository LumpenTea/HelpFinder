import React from 'react'

const ServiceCard = ({ serviceInfo }) => {
    return (
        <div className='col-sm-12 border border-dark mt-3'>
            <h2>Service: {serviceInfo.serviceName}</h2>
            <h3>Price: {serviceInfo.price} NIS</h3>
            <h4>Name: {serviceInfo.name}</h4>
            <h4>Phone: {serviceInfo.phoneNumber} </h4>
            <h4>Adress: {serviceInfo.adress}</h4>
            <p className='border border-dark'>Description: {serviceInfo.description}</p>
        </div>
    )
}

export default ServiceCard