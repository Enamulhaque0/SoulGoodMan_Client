import React from 'react';
import IconBanner from '../IconBanner/IconBanner';
import PersonBanner from '../PersonBanner/PersonBanner';

const Home = () => {
    return (
        <div className='my-16'>
           <PersonBanner></PersonBanner>
           <IconBanner></IconBanner>
        </div>
    );
};

export default Home;