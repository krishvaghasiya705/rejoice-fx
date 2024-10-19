import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/src/app/favicon.ico" />
      </Helmet>
      <div className="layout">
        {children}
      </div>
    </>
  );
};

export default Layout;