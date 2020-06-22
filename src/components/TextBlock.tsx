import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement>;

function TextBlock(props: Props) {
  const { className='', ...restProps } = props;

  return(
    <section className={`c-text-block ${className}`} {...restProps}>
      <h2 className="c-text-block__title">Lorem ipsum dolor sit amet consectetur.</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eveniet quam voluptatem ducimus accusantium. Sit voluptatem unde aliquid maiores doloribus eius tenetur voluptas tempora nisi ullam aut sint ex et officiis veniam, blanditiis numquam enim itaque. Aut labore magni et!</p>
      <a className="c-text-block__cta o-btn" href="#">Lorem, ipsum dolor.</a>
    </section>
  );
}

export default TextBlock;