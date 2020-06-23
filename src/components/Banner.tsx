import React, { HTMLAttributes } from 'react';
import { Link } from 'react-scroll';
import { linkScrollSettings } from '../constants/scroll';

export type BannerContent = {
  image: string;
  heading: string;
  description: string[];
  cta: string;
  ctaLink: string;
}

type Props = {
  pageTitle?: boolean;
  content: BannerContent;
} & HTMLAttributes<HTMLDivElement>;

function Banner(props: Props) {
  const { className='', pageTitle, content, ...restProps } = props;
  const { image, heading, description, cta, ctaLink } = content;

  return(
    <section className={`c-banner ${className}`} {...restProps}>
      <img className="c-banner__image" src={image} alt='Banner'/>
      <div className="c-banner__content">
        {pageTitle ? <h1 className="c-banner__content-title">{heading}</h1> :
          <h2 className="c-banner__content-title">{heading}</h2>}
        {description.map(s => <p className="c-banner__content-text" key={s}>{s}</p>)}
        <Link className="c-banner__content-cta o-btn" to={ctaLink} {...linkScrollSettings}>{cta}</Link>
      </div>
    </section>
  );
}

export default Banner;