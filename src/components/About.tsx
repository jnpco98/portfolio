import React, { HTMLAttributes } from 'react';

export type AboutContent = {
  image: string;
  heading: string;
  subtitle: string;
  description: string[];
  cta: string;
  ctaLink: string;
}

type Props = {
  content: AboutContent;
} & HTMLAttributes<HTMLDivElement>;

function About(props: Props) {
  const { className='', content, ...restProps } = props;
  const { image, heading, subtitle, description, cta, ctaLink } = content;

  return(
    <section className={`c-about ${className}`} {...restProps}>
      <img className="c-about__left" src={image} />
      <div className="c-about__right">
        <h2 className="c-about__right-title">{heading}</h2>
        <p className="c-about__right-subtitle">{subtitle}</p>
        {description.map(desc => <p key={desc}>{desc}</p>)}
        <a className="c-about__right-cta o-btn" href={ctaLink}>{cta}</a>
      </div>
    </section>
  );
}

export default About;