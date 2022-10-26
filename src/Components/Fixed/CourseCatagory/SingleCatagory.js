import React from 'react';
import { Link } from 'react-router-dom';

const SingleCatagory = ({ catagory }) => {
  return (
    <div>
      <Link to={`/course/${catagory.id}`}><p className='text-xl mt-4 text-slate-600 cursor-pointer p-1 hover:underline'>{catagory.catagory_name}</p></Link>
    </div>
  );
};

export default SingleCatagory;