import React, { useEffect, useRef, useState } from 'react';
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
import { useGetHoroscopeUserInfo, useGetMaps, useGetTargetMapValue } from '../../store/selectors';
import { setTargetMapValue } from '../../store/reducers/horoscopesReducer';
import { useAppDispatch } from '../../store/store';

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

  useEffect(() => {
    if (!targetRoute?.value) {
      return;
    }

    navigate(targetRoute.value);
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

  const onMapSet = ({ value }: Option) => {
    dispatch(setTargetMapValue(value));
  };

  useHideNavbar();

  useEffect(() => {
    if (!mapsRef.current || !contentRef.current) {
      return;
    }

    const sticky = mapsRef.current.offsetTop;
    console.log(mapsRef.current.offsetTop);

    window.onscroll = () => {
      console.log(mapsRef.current);

      if (!mapsRef.current || !contentRef.current) {
        return;
      }

      if (window.pageYOffset > sticky) {
        contentRef.current.style.paddingTop = `${mapsRef.current.clientHeight}px`;
        mapsRef.current.style.position = 'fixed';
        mapsRef.current.style.width = '100%';
        mapsRef.current.style.top = '0';
        mapsRef.current.style.zIndex = '100';
      } else {
        mapsRef.current.style.position = 'static';
        contentRef.current.style.paddingTop = '0';
      }
    };
  }, []);

  return (
    <div>
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
          {maps.map((map) => (
            <SwiperSlide key={map.value}>
              <Map mapSections={map.mapSections} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
      <Grid ref={contentRef} pl={2} pr={2} container direction={'column'} justifyContent={'center'}>
        <Grid item container direction={'row'} justifyContent={'space-between'}>
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'Дробные карты'} inputType={InputType.options} options={maps} targetOption={{ label: targetMapValue, value: targetMapValue }} setTargetOption={onMapSet}/>
          </Grid >
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'Раздел'} inputType={InputType.options} options={routesOptions} setTargetOption={setTargetRoute} targetOption={targetRoute}/>
          </Grid>
        </Grid>
        <Grid item pt={1}>
          <Typography fontFamily={'Gilroy'} fontWeight={500} fontSize={'14px'} color={'#C3C9CD'} textAlign={'center'}>
            {horoscopeUserInfo.userName}, {horoscopeUserInfo.date} {horoscopeUserInfo.time}, {horoscopeUserInfo.timeZoneOffset}, {horoscopeUserInfo.location}
          </Typography>
        </Grid>
      </Grid>
      <Outlet />
    </div>
  );
};

export default Index;
