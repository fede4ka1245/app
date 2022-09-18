import React from 'react';
import { Grid, Typography } from '@mui/material';
import styles from './Menu.module.scss';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../helpers/routes';
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

const Menu = () => {
  const navigate = useNavigate();

  const onChangeButtonClick = () => {
    navigate(routes.personal);
  };

  const onAstrologicalProcessorClick = () => {
    navigate(routes.astrologicalProcessor);
  };

  const onForumClick = () => {
    navigate(routes.forum);
  };

  return (
    <div>
      <Grid container pl={4} pr={4} pt={4} rowSpacing={4} direction={'column'} minHeight={window.innerHeight + 'px'}>
        <GalaxyBackground />
        <Grid item container justifyContent={'space-between'}>
          <Grid item>
            <img width={20} height={20} src={cross} />
          </Grid>
          <Grid item>
            <img width={20} height={23} src={notification} />
          </Grid>
        </Grid>
        <Grid item container direction={'row'} spacing={2}>
          <Grid item>
            <div className={styles.profilePhoto}/>
          </Grid>
          <Grid item container direction={'column'} flex={1} justifyContent={'center'}>
            <Grid item>
              <Typography fontFamily={'Playfair Display'} fontWeight={'bold'} fontSize={24} color={'white'}>
                Александрa
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
            <TransparentButton image={<img src={courses}/>} label={'Курсы Альфа'} onClick={() => {}} isSquare={true}/>
          </Grid>
          <Grid item width={'calc(50% - 10px)'} pb={2}>
            <TransparentButton image={<img src={forum}/>} label={'Форум'} onClick={onForumClick} isSquare={true}/>
          </Grid>
          <Grid item width={'calc(50% - 10px)'}>
            <TransparentButton image={<img src={calendar}/>} label={'Календарь'} onClick={() => {}} isSquare={true}/>
          </Grid>
          <Grid container item width={'calc(50% - 10px)'} direction={'column'} justifyContent={'space-between'}>
            <Grid item height={'calc(70% - 10px)'}>
              <section onClick={onAstrologicalProcessorClick} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#FFFFFF', boxShadow: '-5px -5px 20px #FFFFFF, 5px 5px 20px rgba(174, 174, 192, 0.5)', borderRadius: '10px', width: '100%', height: '100%' }}>
                <img src={astrologicalProcessor} width={50} height={50}/>
              </section>
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
