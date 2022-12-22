import React from 'react';
import money from "../../../../assest/money.png"
import Law from "../../../../assest/law.png"
import compliment from "../../../../assest/compliant.png"

const IconBanner = () => {
    return (
        <section className="m-4 md:m-8">

			<h1 className='text-3xl lg:text-4xl my-24 text-center font-bold'>Why Engage With Me For Your Legal Services?</h1>
	
	<div className="container mx-auto grid justify-center gap-1 sm:grid-cols-2 lg:grid-cols-3 ">
		<div className="flex flex-col items-center p-4">
			<img src={money} alt="" srcSet="" />
			
		</div>
		<div className="flex flex-col items-center p-4">
		<img src={Law} alt="" srcSet="" />
			
		</div>
		<div className="flex flex-col items-center p-4">
		<img src={compliment} alt="" srcSet="" />
			
		</div>
		
		
		
	</div>
</section>
    );
};

export default IconBanner;