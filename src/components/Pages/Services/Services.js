import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const  allServices= useLoaderData()
    const Services = [...allServices].sort((a, b) => b.sort - a.sort);
    console.log(Services);
  

    return (
        
      <>

<Helmet>

<title>Services</title>
</Helmet>
       <div className='flex justify-center items-center'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  my-24'>
          
          {
              Services.map(service=> <ServiceCard service={service} key={service._id}></ServiceCard>)
          }
          
          
      </div>
       </div>
      
      </>
    );
};

export default Services;