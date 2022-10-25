import React from 'react';
import Footer from '../Components/Fixed/Footer/Footer';
import Header from '../Components/Fixed/Header/Header';

const MainLayout = () => {
  return (
    <section>
      <div className="navbar"><Header></Header></div>
      <div className="mainPart grid grid-cols-12">
        <div className="left col-span-3 bg-slate-500">left</div>
        <div className="right col-span-9 bg-orange-400">right</div>
      </div>
      <div className="footer"><Footer></Footer></div>
    </section>

  );
};

export default MainLayout;  