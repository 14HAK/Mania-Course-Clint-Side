import React from 'react';
import Catagory from '../Components/Fixed/CourseCatagory/Catagory';
import Footer from '../Components/Fixed/Footer/Footer';
import Header from '../Components/Fixed/Header/Header';
import Courses from '../Components/Fixed/RightSection/Courses';

const MainLayout = () => {
  return (
    <section>
      <div className="navbar"><Header></Header></div>
      <div className="mainPart grid grid-cols-12">
        <div className="left col-span-3 py-3 px-[62px] text-start bg-slate-100"><Catagory></Catagory></div>
        <div className="right col-span-9 p-3 bg-gray-200"><Courses></Courses></div>
      </div>
      <div className="footer"><Footer></Footer></div>
    </section>

  );
};

export default MainLayout;  