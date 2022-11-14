import React from 'react';

const Modal = ({modalData,setModalData,handleData,handleUpdate}) => {

    const {name,reviewText,_id}=modalData
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label onClick={()=>setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
    <div className="relative">
                <label
               
                  
                  className="leading-7 text-sm text-gray-600"
                >
                  Review
                </label>
                
                <textarea 
                onChange={handleData}
                  id="message"
                  name="Description"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={reviewText}
                ></textarea>
              </div>
    <button onClick={()=>handleUpdate(_id)}   className="btn btn-sm cursor-pointer">Submit</button>
  </div>
</div>
        </div>
    );
};

export default Modal;