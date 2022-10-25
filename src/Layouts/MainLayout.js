import React from 'react';

const MainLayout = () => {
  return (
    <section>
      <div className="navbar">this is header</div>
      <div className="mainPart grid grid-cols-12">
        <div className="left col-span-3 bg-slate-500">left</div>
        <div className="right col-span-9 bg-orange-400">right</div>
      </div>
      <div className="footer">footer</div>
    </section>

  );
};

export default MainLayout;  