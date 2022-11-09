import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ServiceCard = ({service}) => {
  const {img,name,price,description,_id} =service

  

  
  return (

    
    <div className="card card-compact w-64 bg-base-100 shadow-xl">
      
        <img className="object-cover h-48 w-full " src={img}alt="Shoes" />
     
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0,53) +"..."}</p>
        <div className="card-actions justify-end">
          <Link to={`../ServiceDetails/${_id}`}>
          <button  className="btn-sm rounded btn-accent">Show Details</button></Link>
        </div>
      </div>
    </div>
    
  );
};

export default ServiceCard;
