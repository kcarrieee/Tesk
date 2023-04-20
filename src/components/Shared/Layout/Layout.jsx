import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Navbar/Header';


const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main id="main-container">
      {children}
      </main>
      <Footer/>
    </>
  );
}

export default Layout;