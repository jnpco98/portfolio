import React from 'react';

const bannerImg = "https://images.unsplash.com/photo-1591891265202-85efd3b810e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

type Props = {
  pageTitle?: boolean;
}

function Banner(props: Props) {
  const { pageTitle } = props;

  return(
    <section className="c-banner">
      <img className="c-banner__image" src={bannerImg}/>
      <div className="c-banner__content">
        {pageTitle ? <h1 className="c-banner__content-title">Lorem ipsum dolor sit amet.</h1> :
          <h2 className="c-banner__content-title">Lorem ipsum dolor sit amet.</h2>}
        <p className="c-banner__content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem soluta rerum nam, ex tempora aperiam vel ea culpa suscipit velit sit?</p>
        <a className="c-banner__content-cta o-btn">Lorem, ipsum dolor.</a>
      </div>
    </section>
  );
}

export default Banner;