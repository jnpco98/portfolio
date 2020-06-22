import React, { HTMLAttributes } from 'react';

export type TextBlockContent = {
  heading: string;
  description: string[];
  cta: string;
  ctaLink: string;
};

type Props = {
  content: TextBlockContent;
} & HTMLAttributes<HTMLDivElement>;

function TextBlock(props: Props) {
  const { className='', content, ...restProps } = props;
  const { heading, description, cta, ctaLink } = content;

  return(
    <section className={`c-text-block ${className}`} {...restProps}>
      <h2 className="c-text-block__title">{heading}</h2>
      {description.map(desc => <p key={desc}>{desc}</p>)}
      <a className="c-text-block__cta o-btn" href={ctaLink}>{cta}</a>
    </section>
  );
}

export default TextBlock;