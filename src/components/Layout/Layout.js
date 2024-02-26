// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const Layout = ({children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}><Content/></main>
      <Footer />
    </div>
  );
};

export default Layout;
