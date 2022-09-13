import React from 'react';
import { Grid, Typography } from '@mui/material';
import styles from './Menu.module.scss';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../helpers/routes';
import Video from '../../components/video/Video';
import telegram from './images/telegram.png';
import youTube from './images/youTube.png';
import astrologicalProcessor from './images/astrologicalProcessor.svg';
import TransparentButton from '../../components/transparentButton/TransparentButton';
import GalaxyBackground from '../../components/galaxyBackground/GalaxyBackground';

const Menu = () => {
  const navigate = useNavigate();

  const onChangeButtonClick = () => {
    navigate(routes.personal);
  };

  const onAstrologicalProcessorClick = () => {
    navigate(routes.astrologicalProcessor);
  };

  return (
    <div>
      <Grid container pl={4} pr={4} pt={4} rowSpacing={4} direction={'column'} minHeight={window.innerHeight + 'px'}>
        <GalaxyBackground />
        <Grid item container direction={'row'} spacing={2} mt={2} mb={'auto'}>
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
          <TransparentButton
            height="250px"
            onClick={onAstrologicalProcessorClick}
            image={<img alt={'processor'} src={astrologicalProcessor} width={100} height={100}/>}
            label={'Астропроцессор'}
          />
        </Grid>
        <Grid item>
          <Video />
        </Grid>
        <Grid item container justifyContent={'space-between'} spacing={1} pb={2}>
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
