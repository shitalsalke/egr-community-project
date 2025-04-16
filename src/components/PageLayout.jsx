import React from 'react';
import Navbar from './NavBar';

const PageLayout = ({ children }) => {
  return (
    <div className="bg-egr-cgrey text-white min-h-screen">
      <Navbar />
      <div className="pt-[100px] px-6 md:px-20">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
