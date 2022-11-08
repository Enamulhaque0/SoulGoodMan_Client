import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard';
import IconBanner from '../IconBanner/IconBanner';
import PersonBanner from '../PersonBanner/PersonBanner';

const Home = () => {
    const Services= useLoaderData()
    console.log(Services);
    return (
        <>
        
        
        
        <div className='my-16'>
           <PersonBanner></PersonBanner>

            
             
             
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 mx-24'>
            {
                Services.map(service=> <ServiceCard service={service} key={service._id}></ServiceCard>)
            }
            
            </div>
            <div className='flex justify-center items-center'>
            <Link to={"/services"}><button className="btn btn-active btn-secondary rounded-none w-40">See  All</button></Link>
            </div>
             
             
         <IconBanner></IconBanner>
        </div>
        
        
        </>
    );
};

export default Home;