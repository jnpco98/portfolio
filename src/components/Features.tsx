import React, { HTMLAttributes } from 'react';
import Dompurify from 'dompurify';

export type FeatureContent = {
  heading: string;
  contents: {
    title: string;
    description: string[];
    icon: string;
  }[];
};

type Props = {
  content: FeatureContent;
} & HTMLAttributes<HTMLDivElement>;

function Features(props: Props) {
  const { className='', content, ...restProps } = props;

  return (
    <section className={`c-features ${className}`} {...restProps}>
      <h2 className="c-features__title">{content.heading}</h2>
      <div className="c-features__grid">
        {content.contents.map(({ title, description, icon }) => 
          <div className="c-features__grid__card">
            <div className="c-features__grid__card-icon" dangerouslySetInnerHTML={{ __html: Dompurify.sanitize(icon) }} />
            <div className="c-features__grid__card-content">
              <h3>{title}</h3>
              {description.map(desc => <p key={desc}>{desc}</p>)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Features;