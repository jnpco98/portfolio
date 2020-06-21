import React from 'react';

function About() {
  return(
    <section className="c-about">
      <img className="c-about__left" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
      <div className="c-about__right">
        <h2 className="c-about__right-title">Lorem ipsum dolor sit.</h2>
        <p className="c-about__right-subtitle">Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde quaerat officia deleniti perspiciatis, ipsa sapiente nulla saepe sunt autem.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat vitae repudiandae molestiae nobis a eveniet dignissimos. Blanditiis, possimus. Ducimus, atque!</p>
        <a className="c-about__right-cta o-btn">Lorem, ipsum dolor.</a>
      </div>
    </section>
  );
}

export default About;