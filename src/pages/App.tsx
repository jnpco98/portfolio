import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Features from '../components/Features';

function App() {
  return (
    <div className="page-app">
      <Header />
      <Banner pageTitle/>
      <div className="o-spacer" />
      <Features />
    </div>
  );
}

export default App;
