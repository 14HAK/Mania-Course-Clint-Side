import React from 'react';
import { Link } from 'react-router-dom';

const SingleCatagory = ({ catagory }) => {
  return (
    <div>
      <Link to={`/course/${catagory.id}`}><p className='text-xl text-slate-600 cursor-pointer font-semibold p-1 underline'>{catagory.catagory_name}</p></Link>
    </div>
  );
};

export default SingleCatagory;