import React, { useContext, useEffect, useState } from "react";
import AddReview from "../Reviews/AddReview";
import ReviewDetailsCard from "../Reviews/ReviewDetailsCard";
import ServiceDetailsCard from "./ServiceDetailsCard";
import { AuthContext } from "../../Context/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  console.log(service.name);
  const [reviews, setReviews] = useState([]);
  

  useEffect(() => {
    fetch(`https://soul-good-man-server.vercel.app/review?name=${service.name}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [service.name,reviews]);

  return (
    <>
     <Helmet>

<title>Service</title>
</Helmet>
      <div className="flex justify-center my-12">
        <ServiceDetailsCard service={service}></ServiceDetailsCard>
      </div>


      
      <section className="mb-32 text-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

          <div className="container my-24 px-6 mx-auto">
          <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
      
      {reviews.map((review) => (
            <ReviewDetailsCard
              review={review}
              key={review._id}
            ></ReviewDetailsCard>
          ))}

      
      
      </div>
      
      </div>
        </section>

     

      <div className="flex justify-center mb-12">
        {user?.uid ? (
          <AddReview service={service}></AddReview>
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
