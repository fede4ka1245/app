import React, { useEffect, useRef } from 'react';
import background from './planetBackground.webp';
import styles from './PlanetBackground.module.css';
import { useGetIsNavbarActive } from '../../store/selectors';

const PlanetBackground = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const main = useRef<HTMLDivElement>(null);
  const isNavbarActive = useGetIsNavbarActive();

  useEffect(() => {
    if (!main.current) {
      return;
    }

    main.current.style.background = 'linear-gradient(#261C5C 55.73%, #365191 100%) no-repeat';
    main.current.style.minHeight = isNavbarActive ? `calc(${window.innerHeight}px + 90px)` : `${window.innerHeight}px`;
  }, [isNavbarActive]);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, height: isNavbarActive ? 'calc(100% + 90px)' : '100%', width: '100%' }} className={styles.main}>
      <img alt='background' ref={imageRef} src={background} width={'100%'} style={{ margin: 0, padding: 0 }}/>
      <div ref={main} style={{ zIndex: -2, top: 0, left: 0, width: '100%', height: '100%', position: 'absolute' }}/>
    </div>
  );
};

export default PlanetBackground;
