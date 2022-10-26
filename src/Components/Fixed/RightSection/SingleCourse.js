import React from 'react';

const SingleCourse = ({ course }) => {

  const { course_name, image } = course;

  return (
    <div>

      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-56 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${image})` }} />
        <div className="w-56 -mt-10 overflow-hidden bg-gray-500 rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-100 uppercase dark:text-white">{course_name}</h3>
          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200"></span>
            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-500 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Admit It</button>
          </div>
        </div>
      </div>



    </div>

  );
};

export default SingleCourse;