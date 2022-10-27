import React, { useEffect, useState } from 'react';
import SingleCatagory from './SingleCatagory';

const Catagory = () => {
  const [catagories, setCatagories] = useState([])

  useEffect(() => {

    fetch('https://mania-course-server.vercel.app/catagories')
      .then(res => res.json())
      .then(data => setCatagories(data))

  }, [])
  return (
    <div className='lg:py-4 lg:text-left text-center '>
      <p className='text-xl text-green-900 font-semibold'>Learning Projects</p>
      <hr className='mr-6' />
      {
        catagories.map(catagory => <SingleCatagory
          key={catagory.id}
          catagory={catagory}
        ></SingleCatagory>)
      }
    </div>
  );
};

export default Catagory;