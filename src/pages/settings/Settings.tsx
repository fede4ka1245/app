import React from 'react';
import { Grid, Typography } from '@mui/material';
import Video from '../../components/video/Video';
import { useSetBackground } from '../../hooks/useSetBackground';
import TransparentButton from '../../components/transparentButton/TransparentButton';
import astrologicalProcessor from '../menu/images/astrologicalProcessor.svg';

const Settings = () => {
  useSetBackground('img.png', true);

  return (
    <>
      <Grid container direction={'column'} p={4} rowSpacing={5}>
        <Grid item>
          <Typography fontFamily={'Playfair Display'} fontWeight={'bold'} fontSize={24} color={'white'} textAlign={'center'}>
            Настройки
          </Typography>
        </Grid>
        <Grid item>
          <Video />
        </Grid>
        <Grid item container rowSpacing={2} justifyContent={'space-between'}>
          <Grid item width={'150px'} height={'150px'}>
            <TransparentButton
              onClick={() => console.log(123)}
              image={<img src={astrologicalProcessor} width={60} height={60}/>}
              label={'Основные'}
            />
          </Grid>
          <Grid item width={'150px'} height={'150px'}>
            <TransparentButton
              onClick={() => console.log(123)}
              image={<img src={astrologicalProcessor} width={60} height={60}/>}
              label={'Отображение'}
            />
          </Grid>
          <Grid item width={'150px'} height={'150px'}>
            <TransparentButton
              onClick={() => console.log(123)}
              image={<img src={astrologicalProcessor} width={60} height={60}/>}
              label={'Дробные карты'}
            />
          </Grid>
          <Grid item width={'150px'} height={'150px'}>
            <TransparentButton
              onClick={() => console.log(123)}
              image={<img src={astrologicalProcessor} width={60} height={60}/>}
              label={'Айанамаша'}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Settings;
