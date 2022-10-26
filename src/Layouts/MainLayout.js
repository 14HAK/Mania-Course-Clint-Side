import React from 'react';
import { Outlet } from 'react-router-dom';
import Catagory from '../Components/Fixed/CourseCatagory/Catagory';
import Footer from '../Components/Fixed/Footer/Footer';
import Header from '../Components/Fixed/Header/Header';

const MainLayout = () => {
  return (
    <section>
      <div className="navbar"><Header></Header></div>

      <div className="mainPart grid grid-cols-12">

        <div className="right lg:col-span-3 col-span-12 p-3 bg-gray-200">
          <Catagory></Catagory>
        </div>

        <div className="left lg:col-span-9 col-span-12 py-3 px-[62px] text-start bg-slate-100">
          <Outlet></Outlet>
        </div>

      </div>

      <div className="footer">
        <Footer></Footer>
      </div>
    </section>

  );
};

export default MainLayout;  