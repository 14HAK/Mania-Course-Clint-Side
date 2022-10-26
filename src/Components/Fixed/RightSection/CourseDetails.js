import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const singleCourse = useLoaderData()

  return (
    <div>
      <iframe className='w-full h-[450px] text-center' src={singleCourse.details} frameborder="0"></iframe>
    </div>
  );
};

export default CourseDetails;