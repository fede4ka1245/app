import React, { useEffect, useRef } from 'react';
import styles from './MyHoroscope.module.scss';
import { Typography } from '@mui/material';
import { myHoroscopeProps } from './myHoroscopeProps';
import share from './assets/share.svg';
import reply from './assets/reply.svg';
import bin from './assets/bin.svg';

const MyHoroscope = ({ name, city, date }: myHoroscopeProps) => {
  const main = useRef<HTMLElement>(null);

  useEffect(() => {
    let startPosition: number;
    let currentPosition: number;
    let isFastSwipe = true;
    let timeoutId: any;
    let isSwiped = false;
    const maxMove = main.current ? main.current.clientWidth / 2 : 200;

    const onTouchMove = (event: any) => {
      if (isSwiped) {
        return;
      }

      const touchX = event.touches[0].pageX;
      currentPosition = Math.min(startPosition - touchX, maxMove);

      if (!startPosition) {
        startPosition = touchX;
      }

      if (main.current) {
        main.current.style.transform = `translateX(-${currentPosition}px)`;
      }
    };

    const onTouchStart = () => {
      if (isSwiped && main.current) {
        currentPosition = 0;
        main.current.style.transform = 'translateX(0px)';
        return;
      }

      timeoutId = setTimeout(() => {
        isFastSwipe = false;
      }, 300);

      if (main.current) {
        main.current.addEventListener('touchmove', onTouchMove);
      }
    };

    const onTouchEnd = (event: any) => {
      clearTimeout(timeoutId);
      startPosition = 0;

      if (isSwiped) {
        isSwiped = false;
        return;
      }

      if (isFastSwipe && main.current && currentPosition !== maxMove && currentPosition > 2) {
        main.current.style.transform = `translateX(-${maxMove}px)`;
        isSwiped = true;
        return;
      }

      if (main.current) {
        main.current.removeEventListener('touchmove', onTouchMove);

        if (maxMove > currentPosition) {
          main.current.style.transform = 'translateX(0px)';
          isSwiped = false;
          currentPosition = 0;
        } else {
          isSwiped = true;
        }
      }

      isFastSwipe = true;
    };

    if (main.current) {
      main.current.addEventListener('touchstart', onTouchStart);
      main.current.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      if (main.current) {
        main.current.removeEventListener('touchstart', onTouchStart);
        main.current.removeEventListener('touchend', onTouchEnd);
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <section style={{ width: '100%', height: '60px', background: '#37366B', zIndex: -1, position: 'absolute', borderRadius: '10px' }}>
        <div style={{ width: '50%', height: '100%', marginLeft: 'auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <img alt='reply' src={reply} width={'25px'} height={'25px'}/>
          <img alt='share' src={share} width={'25px'} height={'25px'}/>
          <img alt='bin' src={bin} width={'25px'} height={'25px'}/>
        </div>
      </section>
      <section className={styles.main} ref={main}>
        <Typography pl={2} color={'#292E30'} fontSize={'14px'} fontWeight={500} fontFamily={'Gilroy'}>
          {name}
        </Typography>
        <Typography pl={2} color={'#292E30'} fontSize={'10px'} fontWeight={400} fontFamily={'Gilroy'}>
          {date}, {city}
        </Typography>
      </section>
    </div>
  );
};

export default MyHoroscope;
