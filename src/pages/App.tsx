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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="page-app">
        {
          loading ? 
            <Loader /> :
            <React.Fragment>
              <Header/>

              <Banner id='main-banner' pageTitle />
              <div className="o-spacer" />

              <About id='about' />
              <div className="o-spacer" />

              <Features id='features' />
              <div className="o-spacer" />

              <Showcase id='showcase' />
              <div className="o-spacer" />

              <Contact id='contact' />
              <div className="o-spacer" />

              <TextBlock />
              <div className="o-spacer" />
              
              <Footer id='footer' />
            </React.Fragment>
        }
      </div>
  );
}

export default App;
