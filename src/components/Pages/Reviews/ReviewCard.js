import React, { useState } from "react";
import Modal from "./Modal/Modal";

const ReviewCard = ({ review, handleDelete, handleData, handleUpdate }) => {
  const [modalData, setModalData] = useState();

  const { img, name, reviewText, _id } = review;

  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img
              className="rounded-t-lg  object-cover h-56 w-full"
              src={img}
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
            <p className="text-gray-700 text-base mb-4">
              {reviewText?.slice(0, 170)}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => handleDelete(_id)}
                type="button"
                className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Delete
              </button>

              <label
                onClick={() => setModalData(review)}
                htmlFor="my-modal-3"
                className=" inline-block px-9 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Edit
              </label>
            </div>
          </div>
        </div>
        {modalData && (
          <Modal
            modalData={modalData}
            setModalData={setModalData}
            handleData={handleData}
            handleUpdate={handleUpdate}
          ></Modal>
        )}
      </div>
    </>
  );
};

export default ReviewCard;
