import React from 'react';

const ReviewCard = () => {
    return (
        <div className="my-12 container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between p-4">
            <div className="flex space-x-4">
                <div>
                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                </div>
                <div>
                    <h4 className="font-bold">Leroy Jenkins</h4>
                    <span className="text-xs dark:text-gray-400">2 days ago</span>
                </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-500">
                
                <span className="text-xl font-bold cursor-pointer">Edit</span>
            </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
        </div>
    
       <div className='flex justify-center items-center pt-6 '>
       <button className="btn btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
       </div>
    </div>
    );
};

export default ReviewCard;