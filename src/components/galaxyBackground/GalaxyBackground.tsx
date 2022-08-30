import React, { useEffect, useRef } from 'react';
import background from './galaxyBackground.png';

const GalaxyBackground = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const main = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!main.current) {
      return;
    }

    main.current.style.background = 'linear-gradient(#261C5C 55.73%, #365191 100%) no-repeat';
    main.current.style.minHeight = `${window.innerHeight}px`;

    return () => {
      if (!main.current) {
        return;
      }

      main.current.style.background = '';
      main.current.style.minHeight = '';
    };
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, height: '100%', width: '100%' }}>
      <img alt='background' ref={imageRef} src={background} width={'100%'} style={{ margin: 0, padding: 0 }}/>
      <div ref={main} style={{ zIndex: -2, position: 'fixed', top: 0, left: 0, height: '110%', width: '100%', transform: 'translateY(-10px)' }}/>
    </div>
  );
};

export default GalaxyBackground;
