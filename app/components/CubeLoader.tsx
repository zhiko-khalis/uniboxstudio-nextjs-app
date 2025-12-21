import React from 'react';
import './CubeLoader.css';

const CubeLoader = () => {
  return (
    <div className="cube-loader-wrapper">
      <div className="cube-loader">
        <div className="cube-top" />
        <div className="cube-wrapper">
          <span className="cube-span" style={{ '--i': 0 } as React.CSSProperties} />
          <span className="cube-span" style={{ '--i': 1 } as React.CSSProperties} />
          <span className="cube-span" style={{ '--i': 2 } as React.CSSProperties} />
          <span className="cube-span" style={{ '--i': 3 } as React.CSSProperties} />
        </div>
      </div>
    </div>
  );
};

export default CubeLoader;

