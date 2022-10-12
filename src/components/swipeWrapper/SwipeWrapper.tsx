import React, { useEffect, useRef } from 'react';

interface SwipeWrapperProps {
  children?: React.ReactNode;
  backgroundComponent?: React.ReactNode
}

const SwipeWrapper = ({ children, backgroundComponent }: SwipeWrapperProps) => {
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
      <section style={{ width: '100%', height: '60px', zIndex: -1, position: 'absolute', borderRadius: '10px' }}>
        {backgroundComponent}
      </section>
      <section style={{ zIndex: 10, opacity: 1 }} ref={main}>
        {children}
      </section>
    </div>
  );
};

export default SwipeWrapper;
