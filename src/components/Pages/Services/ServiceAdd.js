import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const ServiceAdd = () => {
  const { user } = useContext(AuthContext);
 

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const Name = form.name.value;
    const Img = form.img.value;
    const Price = form.price.value;
    const Description = form.Description.value;
    
    
    
    const Service = {
      name: Name,
      email: user?.email,
      img: Img,
      price: Price,
      description: Description,
      
     
    };
    

    fetch("https://soul-good-man-server.vercel.app/services",{
      method:"POST",
      headers:{

        "content-type": "application/json"
      },
      body: JSON.stringify(Service)
      
      
    })
    .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Service Added");
          form.reset();
        }
      })
      .catch((er) => {});




  };
  return (
    <section className="text-gray-600 body-font relative">
       <Helmet>

<title>Add Service</title>
</Helmet>
      <div className="container px-5 py-24 mx-auto">
        <form onSubmit={handleAddService} className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label  className="leading-7 text-sm text-gray-600">
                  Img URL
                </label>
                <input
                  type="text"
                  name="img"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label  className="leading-7 text-sm text-gray-600">
                  Price
                </label>
                <input
                  name="price"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label  className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  readOnly
                  defaultValue={user?.email}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  
                  className="leading-7 text-sm text-gray-600"
                >
                  Description
                </label>
                <textarea
                  id="message"
                  name="Description"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Add Service
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ServiceAdd;
