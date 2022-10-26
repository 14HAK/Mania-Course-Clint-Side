import React, { useEffect, useState } from 'react';
import SingleCatagory from './SingleCatagory';

const Catagory = () => {
  const [catagories, setCatagories] = useState([])

  useEffect(() => {

    fetch('http://localhost:5000/catagories')
      .then(res => res.json())
      .then(data => setCatagories(data))

  }, [])
  return (
    <div className='py-4'>
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