import React from 'react';
import advice from "../../../../../assest/advice.jpg"

const LegalAdvice = () => {
    return (
        <>
        
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="sm:text-3xl lg:text-6xl text-3xl mb-4 font-bold text-black">I Wil Give You Qualified
        <br className="hidden lg:inline-block"/>Legal Advice
      </h1>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={advice}/>
    </div>
  </div>
</section>
        
        
        </>
    );
};

export default LegalAdvice;