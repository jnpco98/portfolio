import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Features from '../components/Features';
import About from '../components/About';
import Showcase from '../components/Showcase';
import TextBlock from '../components/TextBlock';
import Contact from '../components/Contact';

function App() {
  return (
    <div className="page-app">
      <Header />
      <Banner pageTitle/>
      <div className="o-spacer" />
      <About />
      <div className="o-spacer" />
      <Features />
      <div className="o-spacer" />
      <Showcase />
      <div className="o-spacer" />
      <TextBlock />
      <div className="o-spacer" />
      <Contact />
    </div>
  );
}

export default App;
