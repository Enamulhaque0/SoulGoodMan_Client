import React from 'react';
import soulGoodMan from "../../../../assest/soulGoodMan.jpg"

const PersonBanner = () => {
    return (
        <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={soulGoodMan} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100 py-20">
          <h1 className="text-7xl text-center font-bold">Soul <br /> 
          GoodMan</h1>
         
          <p className="text-center text-2xl">
          corporate lawyer
           
          </p>
          <p className='text-green-800'>
          I have a loyalty that runs in my bloodstream, when I lock into someone 
          or something, you can't get me away from it because commit that thoroughly.
          </p>
        </div>
      </div>
    </div>
    );
};

export default PersonBanner;