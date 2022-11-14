import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import ReviewCard from "./ReviewCard";

const MyReviews = () => {


 
  const { user,logOut } = useContext(AuthContext);

  const [data, setData] = useState(null);

  const [reviews, setReviews] = useState([]);
  const [refresh,setRefresh]=useState(false)

  const handleData = (e) => {
    e.preventDefault();

    const reviewText = e.target.value;
    setData(reviewText);
  };

  useEffect(() => {
    fetch(`https://soul-good-man-server-enamulhaque0.vercel.app/reviews?email=${user?.email}`,{
      headers: {

        authorization: `Bearer ${localStorage.getItem('soul-token')}`
    }
    })
    .then((res) => {
      if (res.status === 401 || res.status === 403) {
          return logOut();
      }
      return res.json();
  })
      .then((data) => setReviews(data));
  }, [user?.email,refresh,logOut]);

  const handleDelete = (_id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this review"
    );
    if (proceed) {
      fetch(`https://soul-good-man-server-enamulhaque0.vercel.app/reviews/${_id}`, {
        method: "DELETE",
        
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("deleted successfully");
            const remaining = reviews.filter((rws) => rws._id !== _id);
            setReviews(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`https://soul-good-man-server-enamulhaque0.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
       
        
      },
      body: JSON.stringify({ reviewText: data }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setRefresh(!refresh)
        }
      });
  };

  return (
    <>

<Helmet>

<title>My-Reviews</title>
</Helmet>
      <div className="flex justify-center items-center mx-6">
        {reviews && (
          <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12 my-24">
            {reviews.map((review) => (
              <ReviewCard
                review={review}
                key={review._id}
                handleDelete={handleDelete}
                handleData={handleData}
                handleUpdate={handleUpdate}
              ></ReviewCard>
            ))}
          </div>
        )}
        {!reviews.length && (
          <div className="flex justify-center items-center my-24 h-96">
            <h1 className="text-6xl font-bold text-fuchsia-700">
              No Reviews Were Added
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default MyReviews;
