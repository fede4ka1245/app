import React from 'react';
import { useSetBackground } from '../../hooks/useSetBackground';
import { Grid, Typography } from '@mui/material';
import styles from './Menu.module.scss';
import cross from './images/cross.svg';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../helpers/routes';
import Video from '../../components/video/Video';
import telegram from './images/telegram.png';
import youTube from './images/youTube.png';
import astrologicalProcessor from './images/astrologicalProcessor.svg';

const Menu = () => {
  useSetBackground('authorization-background.png', true);

  const navigate = useNavigate();

  const onChangeButtonClick = () => {
    navigate(routes.personal);
  };

  const onAstrologicalProcessorClick = () => {
    navigate(routes.astrologicalProcessor);
  };

  return (
    <div>
      <Grid container p={4} rowSpacing={4} direction={'column'}>
        <Grid item>
          <img alt={'cross'} src={cross}/>
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
          <section className={styles.transparentButton} onClick={onAstrologicalProcessorClick}>
            <Grid
              container
              display={'flex'}
              justifyContent={'center'}
              direction={'column'}
              alignItems={'center'}
              rowSpacing={2}
              width={'100%'}
              height={'100%'}
            >
              <Grid item>
                <img src={astrologicalProcessor} width={100} height={100}/>
              </Grid>
              <Grid item>
                <Typography color={'white'} fontWeight={'bold'} fontFamily={'Gilroy'} fontSize={18}>
                  Астропроцессор
                </Typography>
              </Grid>
            </Grid>
          </section>
        </Grid>
        <Grid item>
          <Video />
        </Grid>
        <Grid item container justifyContent={'space-between'} spacing={1}>
          <Grid item xs={6} md={6}>
            <img src={youTube} width={'100%'}/>
          </Grid>
          <Grid item xs={6} md={6}>
            <img src={telegram} width={'100%'}/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Menu;
