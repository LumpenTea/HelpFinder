import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
import ServiceCard from './ServiceCard';

const ServicesList = () => {
  
    const { services, searched, isSearching } = useSelector((state: RootState) => state.search);
    const screenServices = isSearching ? searched : services;
  
    return (
    <div>
        {screenServices.map((serviceInfo) => <ServiceCard serviceInfo={serviceInfo} key={serviceInfo.serviceName} />)}
    </div>
  )
}

export default ServicesList