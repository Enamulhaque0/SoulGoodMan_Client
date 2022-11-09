import React from "react";

const ServiceDetailsCard = ({ service }) => {
  const { name, img, description, price } = service;

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <img className="object-cover h-48 w-full " src={img} alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">$ {price}</div>
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsCard;
