import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import ReviewCard from "./ReviewCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews, user?.email]);


  const handleDelete = _id =>{
    const proceed = window.confirm('Are you sure, you want to delete this review');
    if(proceed){
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'DELETE',
           
        })
        .then(res => res.json())
        .then(data => {
           
            if (data.deletedCount > 0){
                toast.success('deleted successfully');
                const remaining = reviews.filter(rws => rws._id !== _id);
                setReviews(remaining);
            }
        })
    }
}

    
  return (
    <>
      <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12 my-24">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review._id} handleDelete={handleDelete}></ReviewCard>
        ))}
      </div>
    </>
  );
};

export default MyReviews;
