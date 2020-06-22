import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement>;

function Loader(props: Props) {
  const { className='', ...restProps } = props;

  return (
    <div className={`c-loader ${className}`} {...restProps}>
      <div className="c-loader__elements">
        <div className="c-loader__elements-bar" />
        <div className="c-loader__elements-bar" />
        <div className="c-loader__elements-bar" />
        <div className="c-loader__elements-bar" />
        <div className="c-loader__elements-bar" />
        <div className="c-loader__elements-ball" />
      </div>
    </div>
  );
}

export default Loader;