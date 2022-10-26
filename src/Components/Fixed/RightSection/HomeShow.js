import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from './SingleCourse';

const HomeShow = () => {
  const data = useLoaderData()
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 p-6'>

      {
        data.map((course, idx) => <SingleCourse
          key={idx}
          course={course}
        ></SingleCourse>)
      }

    </div>);
};

export default HomeShow;