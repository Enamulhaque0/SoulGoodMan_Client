import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import ReviewCard from "./ReviewCard";

const ReviewAdd = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews, user?.email]);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12 my-24">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review._id}></ReviewCard>
        ))}
      </div>
    </>
  );
};

export default ReviewAdd;
