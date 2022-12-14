import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import PlanetBackground from '../../components/planetBackground/PlanetBackground';
import { Grid, Typography } from '@mui/material';
import Map from '../../components/map/Map';
import Buttons from './components/buttons/Buttons';
import Input from '../../components/input/Input';
import { routes } from './routes';
import { Option } from '../../models/types/Option';
import { InputType } from '../../components/input/InputType';
import { useHideNavbar } from '../../hooks/useHideNavbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Horoscopes.scss';
import {
  useGetHoroscopeUserInfo, useGetIsDeepSkyActive, useGetIsTransitionMapsActive, useGetIsYearPickerActive,
  useGetMaps,
  useGetTargetMapValue, useGetTransitionMaps,
  useGetVarshpahalaMaps
} from '../../store/selectors';
import { setTargetMapValue } from '../../store/reducers/horoscopesReducer';
import { useAppDispatch } from '../../store/store';
import { getTimeZoneOffsetFromGreenwichData } from '../../helpers/getTimeZoneOffsetFromGreenwichData';
import { MapSection } from '../../models/types/MapSection';
import { useResetHoroscopeOnUnmount } from '../../hooks/useResetHoroscopeOnUnmount';

const routesOptions = [
  {
    label: 'Натальная к.',
    value: routes.natMap
  },
  {
    label: 'Даши',
    value: routes.dashi
  },
  {
    label: 'Транзиты',
    value: routes.transitions
  },
  {
    label: 'Аштакаварга',
    value: routes.ashtakavarga
  },
  {
    label: 'Варшпахала',
    value: routes.varshapkhala
  },
  {
    label: 'Чакры',
    value: routes.zones
  },
  {
    label: 'Ректификация',
    value: routes.rectification
  }
];

const Index = () => {
  const [targetRoute, setTargetRoute] = useState<Option>(routesOptions[0]);
  const navigate = useNavigate();
  const swiper = useRef<any>();
  const targetMapValue = useGetTargetMapValue();
  const maps = useGetMaps();
  const dispatch = useAppDispatch();
  const horoscopeUserInfo = useGetHoroscopeUserInfo();
  const mapsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const varshpahalaMaps = useGetVarshpahalaMaps();
  const isYearPickerActive = useGetIsYearPickerActive();
  const isTransitionMapsActive = useGetIsTransitionMapsActive();
  const transitionMaps = useGetTransitionMaps();
  const isDeepSkyActive = useGetIsDeepSkyActive();

  const mapTransitSections = useMemo<MapSection [] | undefined>(() => {
    if (!transitionMaps.length) {
      return;
    }

    return transitionMaps[0].mapSections;
  }, [transitionMaps]);

  const timeZoneOffset = useMemo(() => {
    return getTimeZoneOffsetFromGreenwichData(horoscopeUserInfo.greenwich, horoscopeUserInfo.hours, horoscopeUserInfo.minutes);
  }, [horoscopeUserInfo]);

  useEffect(() => {
    if (!targetRoute?.value) {
      return;
    }

    dispatch(setTargetMapValue(maps[0].value));
    navigate(targetRoute.value);

    if (!swiper.current) {
      return;
    }

    if (targetRoute.value === routes.ashtakavarga) {
      swiper.current.allowTouchMove = false;
      return;
    }

    swiper.current.allowTouchMove = true;
  }, [targetRoute]);

  useEffect(() => {
    swiper.current.slideTo(maps.findIndex(({ value }) => value === targetMapValue));
  }, [targetMapValue]);

  const onSwipe = (swiper: any) => {
    if (typeof swiper?.activeIndex !== 'number') {
      return;
    }

    dispatch(setTargetMapValue(maps[swiper?.activeIndex].value));
  };

  const onMapSet = useCallback(({ value }: Option) => {
    dispatch(setTargetMapValue(value));
  }, []);

  const isMapSelectDisabled = useMemo(() => {
    return targetRoute.value === routes.ashtakavarga;
  }, [targetRoute]);

  useHideNavbar();
  useResetHoroscopeOnUnmount();

  const currentMaps = useMemo(() => {
    if (targetRoute.value === routes.transitions && !isTransitionMapsActive && !!transitionMaps.length) {
      return transitionMaps;
    }

    if (targetRoute.value === routes.varshapkhala && !isYearPickerActive) {
      return varshpahalaMaps;
    }

    return maps;
  }, [targetRoute, isYearPickerActive, varshpahalaMaps, maps, transitionMaps, isTransitionMapsActive]);

  return (
    <Grid position={'relative'} height={'100%'} minHeight={'100vh'}>
      <PlanetBackground />
      <Grid item pl={2} pr={2} pt={4}>
        <Buttons />
      </Grid>
      <Grid ref={mapsRef} item pt={2} pb={2}>
        <Swiper
          slidesPerView="auto"
          slidesPerGroup={1}
          className={'maps'}
          centeredSlides
          spaceBetween={5}
          onSwiper={(_swiper) => {
            swiper.current = _swiper;
          }}
          onSlideChange={onSwipe}
        >
          {currentMaps.map((map) => (
            <SwiperSlide key={map.value}>
              <Map
                isDeepSky={isDeepSkyActive}
                mapSections={map.mapSections}
                mapTransitSections={mapTransitSections}
                isTransit={isTransitionMapsActive}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
      <Grid ref={contentRef} pl={2} pr={2} container direction={'column'} justifyContent={'center'}>
        <Grid item container direction={'row'} justifyContent={'space-between'}>
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'Дробные карты'} disabled={isMapSelectDisabled} inputType={InputType.options} options={maps} targetOption={{ label: targetMapValue, value: targetMapValue }} setTargetOption={onMapSet}/>
          </Grid >
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'Раздел'} inputType={InputType.options} options={routesOptions} setTargetOption={setTargetRoute} targetOption={targetRoute}/>
          </Grid>
        </Grid>
        <Grid item pt={1}>
          <Typography fontFamily={'Gilroy'} fontWeight={500} fontSize={'14px'} color={'#C3C9CD'} textAlign={'center'}>
            {horoscopeUserInfo.userName}, {horoscopeUserInfo.date} {horoscopeUserInfo.time}, {timeZoneOffset}, {horoscopeUserInfo.location}
          </Typography>
        </Grid>
      </Grid>
      <Outlet />
    </Grid>
  );
};

export default Index;
