import React, { useContext, useEffect, useState } from "react";
import AddReview from "../Reviews/AddReview";
import ReviewDetailsCard from "../Reviews/ReviewDetailsCard";
import ServiceDetailsCard from "./ServiceDetailsCard";
import { AuthContext } from "../../Context/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service= useLoaderData()
  console.log(service)
  

  

  ;
  return (
    <>
      <div className="flex justify-center my-12">
      <ServiceDetailsCard service={service} ></ServiceDetailsCard>
      </div>

      <ReviewDetailsCard></ReviewDetailsCard>

      <div className="flex justify-center mb-12">
        {user?.uid ? (
          <AddReview></AddReview>
        ) : (
          <h1 className="text-3xl text-bold">
            {" "}
            Please{" "}
            <Link className="text-blue-500" to="/login">
              Login
            </Link>{" "}
            to add a review
          </h1>
        )}
      </div>
    </>
  );
};

export default ServiceDetails;
