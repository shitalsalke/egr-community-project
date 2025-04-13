import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-egr-light px-6 overflow-hidden">
      {/* Shared Background SVGs */}
      {/* Floating SVGs */}
        <img src="/svgs/undraw_ideation_r1g5.svg" className="absolute top-10 left-6 w-70 opacity-40 z-0" alt="Idea" />
        <img src="/svgs/undraw_grades_hqyk.svg" className="absolute bottom-10 right-6 w-46 opacity-40 z-0" alt="Grades" />
        <img src="/svgs/undraw_social-girl_gytt.svg" className="absolute top-10 right-0 w-50 opacity-50 z-0" alt="Social Girl" />
        <img src="/svgs/undraw_certification_i2m0.svg" className="absolute bottom-0 left-10 w-84 opacity-20 z-0" alt="Certify" />


      {/* Page Content */}
      <main className="relative z-10 flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
