import React, { useCallback } from 'react';
import { CardActionArea, Grid, Skeleton, Typography } from '@mui/material';
import styles from './Menu.module.scss';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../models/enums/routes';
import telegram from './images/telegram.png';
import youTube from './images/youTube.png';
import astrologicalProcessor from './images/astrologicalProcessor.svg';
import TransparentButton from '../../components/transparentButton/TransparentButton';
import GalaxyBackground from '../../components/galaxyBackground/GalaxyBackground';
import cross from './images/cross.svg';
import notification from './images/notification.svg';
import calendar from './images/calendar.svg';
import forum from './images/forum.svg';
import courses from './images/courses.svg';
import Message from '../../components/message/Message';
import { useGetAvatar, useGetUserName } from '../../store/selectors';
import { useHideNavbar } from '../../hooks/useHideNavbar';

const Menu = () => {
  const navigate = useNavigate();

  const onNotificationsClick = useCallback(() => {
    navigate(routes.notifications);
  }, [navigate]);

  const onChangeButtonClick = () => {
    navigate(routes.userEdit);
  };

  const onAstrologicalProcessorClick = () => {
    navigate(routes.astrologicalProcessor);
  };

  const onForumClick = () => {
    navigate(routes.forum);
  };

  const onCalendarClick = () => {
    navigate(routes.calendar);
  };

  const onCoursesClick = () => {
    navigate(routes.Courses);
  };

  const onExit = () => {
    navigate(routes.main);
  };

  const avatar = useGetAvatar();
  const name = useGetUserName();

  useHideNavbar();

  return (
    <div>
      <Grid container pl={2} pr={2} pt={4} rowSpacing={4} direction={'column'} minHeight={window.innerHeight + 'px'}>
        <GalaxyBackground />
        <Grid item container justifyContent={'space-between'}>
          <Grid item>
            <img width={20} height={20} src={cross} onClick={onExit} />
          </Grid>
          <Grid item>
            <img width={20} height={23} src={notification} onClick={onNotificationsClick} />
          </Grid>
        </Grid>
        <Grid item container direction={'row'}>
          <Grid item pr={2}>
            {avatar && <img className={styles.profilePhoto} src={avatar}/>}
            {!avatar && <Skeleton sx={{ background: 'gray' }} variant={'circular'} width={'96px'} height={'96px'} />}
          </Grid>
          <Grid item container direction={'column'} flex={1} justifyContent={'center'}>
            <Grid item>
              <Typography fontFamily={'Playfair Display'} fontWeight={'bold'} fontSize={24} color={'white'}>
                {name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontFamily={'Gilroy'} fontSize={14} color={'white'} fontWeight={300} onClick={onChangeButtonClick}>
                изменить
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Message />
        </Grid>
        <Grid item container justifyContent={'space-between'}>
          <Grid item width={'calc(50% - 10px)'} pb={2}>
            <TransparentButton image={<img src={courses}/>} label={'Курсы Альфа'} onClick={onCoursesClick} isSquare={true}/>
          </Grid>
          <Grid item width={'calc(50% - 10px)'} pb={2}>
            <TransparentButton image={<img src={forum}/>} label={'Форум'} onClick={onForumClick} isSquare={true}/>
          </Grid>
          <Grid item width={'calc(50% - 10px)'}>
            <TransparentButton image={<img src={calendar}/>} label={'Календарь'} onClick={onCalendarClick} isSquare={true}/>
          </Grid>
          <Grid container item width={'calc(50% - 10px)'} direction={'column'} justifyContent={'space-between'}>
            <Grid item height={'calc(70% - 10px)'}>
              <CardActionArea sx={{ height: '100%', borderRadius: '10px' }}>
                <section onClick={onAstrologicalProcessorClick} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#FFFFFF', boxShadow: '-5px -5px 20px #FFFFFF, 5px 5px 20px rgba(174, 174, 192, 0.5)', borderRadius: '10px', width: '100%', height: '100%' }}>
                  <img src={astrologicalProcessor} width={50} height={50}/>
                </section>
              </CardActionArea>
            </Grid>
            <Grid item height={'calc(30%)'}>
              <section style={{ background: '#59abd9', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', width: '100%', height: '100%' }}>
                <Typography fontFamily={'Gilroy'} fontSize={14} color={'white'} fontWeight={300}>
                  Продлить
                </Typography>
              </section>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item> */}
        {/*  <TransparentButton */}
        {/*    height="250px" */}
        {/*    onClick={onAstrologicalProcessorClick} */}
        {/*    image={<img alt={'processor'} src={astrologicalProcessor} width={100} height={100}/>} */}
        {/*    label={'Астропроцессор'} */}
        {/*  /> */}
        {/* </Grid> */}
        {/* <Grid item> */}
        {/*  <Video /> */}
        {/* </Grid> */}
        <Grid item container justifyContent={'space-between'} spacing={1} pb={2} mt={'auto'}>
          <Grid item xs={6} md={6}>
            <img alt={'youTube'} src={youTube} width={'100%'}/>
          </Grid>
          <Grid item xs={6} md={6}>
            <img alt={'telegram'} src={telegram} width={'100%'}/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Menu;
