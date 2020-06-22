import React, { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
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

  const [bannerEntered, setBannerEntered] = useState(false);
  const [aboutEntered, setAboutEntered] = useState(false);
  const [featuresEntered, setFeaturesEntered] = useState(false);
  const [showcaseEntered, setShowcaseEntered] = useState(false);
  const [contactEntered, setContactEntered] = useState(false);
  const [textBlockEntered, setTextBlockEntered] = useState(false);

  const sectionAnimatedClass = 'animate__animated is-section-animated';

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

              <Waypoint onEnter={() => setBannerEntered(true)} />
              <Banner id='main-banner' className={`${bannerEntered ? `${sectionAnimatedClass} animate__backInDown` : 'is-hidden'}`} pageTitle />
              <Waypoint onEnter={() => setBannerEntered(true)} />
              <div className="o-spacer" />

              <Waypoint onEnter={() => setAboutEntered(true)} />
              <About id='about' className={`${aboutEntered ? `${sectionAnimatedClass} animate__backInLeft` : 'is-hidden'}`}  />
              <Waypoint onEnter={() => setAboutEntered(true)} />
              <div className="o-spacer" />

              <Waypoint onEnter={() => setFeaturesEntered(true)} />
              <Features id='features' className={`${featuresEntered ? `${sectionAnimatedClass} animate__fadeInLeft` : 'is-hidden'}`}  />
              <Waypoint onEnter={() => setFeaturesEntered(true)} />
              <div className="o-spacer" />

              <Waypoint onEnter={() => setShowcaseEntered(true)} />
              <Showcase id='showcase' className={`${showcaseEntered ? `${sectionAnimatedClass} animate__fadeInRight` : 'is-hidden'}`}  />
              <Waypoint onEnter={() => setShowcaseEntered(true)} />
              <div className="o-spacer" />

              <Waypoint onEnter={() => setContactEntered(true)} />
              <Contact id='contact' className={`${contactEntered ? `${sectionAnimatedClass} animate__fadeInLeft` : 'is-hidden'}`}  />
              <Waypoint onEnter={() => setContactEntered(true)} />
              <div className="o-spacer" />

              <Waypoint onEnter={() => setTextBlockEntered(true)} />
              <TextBlock className={`${textBlockEntered ? `${sectionAnimatedClass} animate__fadeInUp` : 'is-hidden'}`} />
              <Waypoint onEnter={() => setTextBlockEntered(true)} />
              <div className="o-spacer" />
              
              <Footer id='footer' />
            </React.Fragment>
        }
      </div>
  );
}

export default App;
