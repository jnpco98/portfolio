import React, { HTMLAttributes } from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ShowcaseContent = {
  heading: string;
  contents: {
    image: string;
    title: string;
    description: string[];
    stack: string[];
    demo: string;
    sourceCode: string;
  }[];
}

type Props = {
  content: ShowcaseContent;
} & HTMLAttributes<HTMLDivElement>;

function Showcase(props: Props) {
  const { className='', content, ...restProps } = props;

  return(
    <section className={`c-showcase ${className}`} {...restProps}>
      <h2 className="c-showcase__title">{content.heading}</h2>
      <div className="c-showcase__grid">
        {content.contents.map(({ image, title, description, stack, sourceCode, demo }) => 
          <div className="c-showcase__grid__card" key={title + description}>
            <img className="c-showcase__grid__card-image" src={image} />
            <div className="c-showcase__grid__card-content">
              <h3>{title}</h3>
              {description.map(desc => <p key={desc}>{desc}</p>)}
            </div>
            <div className="c-showcase__grid__card-stack">
              {stack.map(s => <span key={s}>{s}</span>)}
            </div>
            <div className="c-showcase__grid__card-cta">
              {demo &&
                <a href={demo}>
                  <FontAwesomeIcon icon={faLink} />
                </a>
              }
              {sourceCode &&
                <a href={sourceCode}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              }
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Showcase;