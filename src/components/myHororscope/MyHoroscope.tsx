import React, { useCallback, useState } from 'react';
import styles from './MyHoroscope.module.scss';
import { IconButton, Typography } from '@mui/material';
import { myHoroscopeProps } from './myHoroscopeProps';
import share from './assets/share.svg';
import reply from './assets/reply.svg';
import bin from './assets/bin.svg';
import { useLoadHoroscopes } from '../../hooks/useLoadHororscope';
import AppLoader from '../appLoader/AppLoader';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../pages/horoscopes/routes';
import { useDeleteHoroscope } from '../../hooks/useDeleteHoroscope';
import SwipeWrapper from '../swipeWrapper/SwipeWrapper';
import { tap } from '../../helpers/tap';

const MyHoroscope = ({ horoscope }: myHoroscopeProps) => {
  const loadHoroscope = useLoadHoroscopes();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onHoroscopeClick = useCallback(() => {
    if (!horoscope.horoscopeInfo.greenwich || !horoscope.horoscopeInfo.hours || !horoscope.horoscopeInfo.minutes) {
      return;
    }

    setIsLoading(true);

    loadHoroscope({
      ...horoscope.horoscopeInfo,
      timeZoneData: {
        greenwich: horoscope.horoscopeInfo.greenwich,
        hours: horoscope.horoscopeInfo.hours,
        minutes: horoscope.horoscopeInfo.minutes
      },
      addressInformation: horoscope.addressInfo
    }).then(() => {
      navigate(routes.natMap);
    }).finally(() => {
      setIsLoading(false);
    });
  }, [navigate, horoscope, loadHoroscope]);

  const deleteHoroscope = useDeleteHoroscope();

  const onDeleteClick = useCallback(() => {
    deleteHoroscope(horoscope);
  }, [horoscope]);

  return (
    <div>
      <AppLoader isLoading={isLoading} />
      <SwipeWrapper backgroundComponent={(
        <section style={{ width: '100%', height: '60px', background: '#37366B', zIndex: 1, position: 'absolute', borderRadius: '10px' }}>
          <div style={{ width: '50%', height: '100%', marginLeft: 'auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <IconButton>
              <img alt='reply' src={reply} width={'25px'} height={'25px'}/>
            </IconButton>
            <IconButton>
              <img alt='share' src={share} width={'25px'} height={'25px'}/>
            </IconButton>
            <IconButton onClick={onDeleteClick}>
              <img alt='bin' src={bin} width={'25px'} height={'25px'}/>
            </IconButton>
          </div>
        </section>
      )}>
        <section className={styles.main} onClick={(e) => tap(e, { onSingleTap: () => {}, onDoubleTap: onHoroscopeClick })}>
          <Typography pl={2} color={'#292E30'} fontSize={'14px'} fontWeight={500} fontFamily={'Gilroy'}>
            {horoscope.horoscopeInfo.userName}
          </Typography>
          <Typography pl={2} color={'#292E30'} fontSize={'10px'} fontWeight={400} fontFamily={'Gilroy'}>
            {horoscope.horoscopeInfo.date}, {horoscope.addressInfo.value}
          </Typography>
        </section>
      </SwipeWrapper>
    </div>
  );
};

export default MyHoroscope;
