import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Features from '../components/Features';
import About from '../components/About';

function App() {
  return (
    <div className="page-app">
      <Header />
      <Banner pageTitle/>
      <div className="o-spacer" />
      <About />
      <div className="o-spacer" />
      <Features />
    </div>
  );
}

export default App;
