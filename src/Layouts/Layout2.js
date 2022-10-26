import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Fixed/Footer/Footer';
import Header from '../Components/Fixed/Header/Header';

const Layout2 = () => {
  return (
    <section className='bg-gray-200'>
      <div className="first"><Header></Header></div>
      <div className="main"><Outlet></Outlet></div>
      <div className="last"><Footer></Footer></div>
    </section>
  );
};

export default Layout2;