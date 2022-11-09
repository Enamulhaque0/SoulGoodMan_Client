import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { img, name, price, description, _id } = service;
  

  return (
   
    
    
      <PhotoProvider maskOpacity={0.5} speed={() => 800}
      easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>

<div className="card card-compact w-64 bg-base-100 shadow-xl">
        <PhotoView   src={img}>
          <img className="object-cover h-48 w-full " src={img}  alt="Shoes" />
        </PhotoView>

        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 53) + "..."}</p>
          <div className="card-actions justify-end">
            <Link to={`../ServiceDetails/${_id}`}>
              <button className="btn-sm rounded btn-accent">
                Show Details
              </button>
            </Link>
          </div>
        </div>
      </div>
      </PhotoProvider>

  );
};

export default ServiceCard;
