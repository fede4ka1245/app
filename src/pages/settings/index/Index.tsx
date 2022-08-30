import React from 'react';
import { Grid, Typography } from '@mui/material';
import Video from '../../../components/video/Video';
import TransparentButton from '../../../components/transparentButton/TransparentButton';
import ButtonBack from '../../../components/buttonBack/ButtonBack';
import Moon from '../../../components/moon/Moon';
import { useNavigate } from 'react-router-dom';
import { transparentButtons } from './transparentButtons';
import PlanetBackground from '../../../components/planetBackground/PlanetBackground';

const Index = () => {
  const navigate = useNavigate();

  return (
    <>
      <PlanetBackground />
      <Moon />
      <Grid container>
        <Grid item pr={4} pl={4}>
          <ButtonBack onClick={() => navigate(-1)} label={'Назад'}/>
        </Grid>
        <Grid item container direction={'column'} pr={4} pl={4} pb={4}>
          <Grid item pb={3}>
            <Typography fontFamily={'Playfair Display'} fontWeight={'bold'} fontSize={24} color={'white'} textAlign={'center'}>
              Настройки
            </Typography>
          </Grid>
          <Grid item pb={4}>
            <Video />
          </Grid>
          <Grid item container rowSpacing={4} columnSpacing={2} gridTemplateColumns={'repeat(2, 50%)'} display={'grid'}>
            {transparentButtons.map((button) => (
              <Grid item key={button.label}>
                <TransparentButton
                  onClick={() => navigate(button.route)}
                  image={<img alt='image' src={button.imageSource} width={60} height={60}/>}
                  label={button.label}
                  isSquare={true}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
