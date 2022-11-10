import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard';
import IconBanner from '../IconBanner/IconBanner';
import PersonBanner from '../PersonBanner/PersonBanner';
import LegalAdvice from './LegalAdvice/LegalAdvice';

const Home = () => {
    const Services= useLoaderData()
    return (
        <>
        
        <Helmet>

            <title>Soul Good Man</title>
        </Helmet>
        
        <div className='my-24 '>
           <PersonBanner></PersonBanner>

            
             
           <h1 className='text-center mt-12 lg:text-5xl text-2xl font-semibold'>Take Advantage Of My  Consultation</h1>
           <div className='flex justify-center items-center'>
            
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 '>
            {
                Services.map(service=> <ServiceCard service={service} key={service._id}></ServiceCard>)
            }
            
            </div>
           </div>
            <div className='flex justify-center items-center'>
            <Link to={"/services"}><button className="btn btn-active btn-secondary rounded w-40">See  All</button></Link>
            </div>
             
             <LegalAdvice></LegalAdvice>
         <IconBanner></IconBanner>
        </div>
        
        
        </>
    );
};

export default Home;