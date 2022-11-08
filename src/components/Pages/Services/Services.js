import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const Services= useLoaderData()

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-24 my-24'>
            {
                Services.map(service=> <ServiceCard service={service} key={service._id}></ServiceCard>)
            }
            
        </div>
    );
};

export default Services;