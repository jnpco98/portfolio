import React from 'react';

function Loader() {
  return (
    <div className="c-loader">
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