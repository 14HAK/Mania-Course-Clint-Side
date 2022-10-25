import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = () => {
  return (
    <div>
      <Link to='/'><p className='text-xl cursor-pointer font-semibold p-1 underline'>catagory 1</p></Link>
    </div>
  );
};

export default Catagory;