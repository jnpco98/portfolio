import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Features from '../components/Features';
import About from '../components/About';
import Showcase from '../components/Showcase';
import TextBlock from '../components/TextBlock';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="page-app">
      {
        loading ? <Loader /> :
          <React.Fragment>
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
            <div className="o-spacer" />
            <Footer />
          </React.Fragment>
      }
    </div>
  );
}

export default App;
